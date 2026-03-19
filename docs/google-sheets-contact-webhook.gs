const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID";
const SHEET_NAME = "Sheet1";
const DEBUG_SHEET_NAME = "Webhook Debug";
const SHARED_SECRET = "replace-with-the-same-secret-you-set-in-nextjs";
const ENABLE_DEBUG_LOGS = false;

function doPost(e) {
  const debugId = Utilities.getUuid();

  try {
    logDebug_(debugId, "request_received", {
      hasEvent: Boolean(e),
      hasPostData: Boolean(e && e.postData),
      contentType: e && e.postData ? e.postData.type : "",
      bodyLength: e && e.postData && e.postData.contents
        ? String(e.postData.contents).length
        : 0,
    });

    const rawBody = (e && e.postData && e.postData.contents) || "{}";
    const payload = JSON.parse(rawBody);

    logDebug_(debugId, "payload_parsed", {
      source: payload.source || "",
      submissionId: payload.submissionId || "",
      hasMessage: Boolean(payload.message),
      hasEmail: Boolean(payload.email),
      submittedAt: payload.submittedAt || "",
    });

    if (payload.secret !== SHARED_SECRET) {
      logDebug_(debugId, "secret_mismatch", {
        providedSecret: payload.secret ? "present" : "missing",
      });
      return json_({
        success: false,
        message: "Unauthorized",
        debugId: debugId,
      });
    }

    const sheet = getSheet_();
    ensureHeaderRow_(sheet);
    logDebug_(debugId, "sheet_ready", {
      sheetName: SHEET_NAME,
      lastRow: sheet.getLastRow(),
    });

    if (payload.submissionId && hasSubmission_(sheet, payload.submissionId)) {
      logDebug_(debugId, "duplicate_submission", {
        submissionId: payload.submissionId,
      });
      return json_({
        success: true,
        message: "Duplicate submission ignored.",
        debugId: debugId,
      });
    }

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.email || "",
      payload.message || "",
      payload.source || "website",
      payload.submissionId || "",
    ]);

    logDebug_(debugId, "row_saved", {
      sheetName: SHEET_NAME,
      savedSubmissionId: payload.submissionId || "",
      lastRow: sheet.getLastRow(),
    });

    return json_({
      success: true,
      message: "Saved.",
      debugId: debugId,
    });
  } catch (error) {
    logDebug_(debugId, "exception", {
      message: error && error.message ? error.message : "Unexpected error",
      stack: error && error.stack ? String(error.stack).slice(0, 1000) : "",
    });
    return json_({
      success: false,
      message: error && error.message ? error.message : "Unexpected error",
      debugId: debugId,
    });
  }
}

function doGet() {
  const props = PropertiesService.getScriptProperties();
  return json_({
    success: true,
    message: "Debug endpoint is live.",
    debugEnabled: ENABLE_DEBUG_LOGS,
    lastDebugId: props.getProperty("last_debug_id") || "",
    lastStep: props.getProperty("last_debug_step") || "",
    lastDetails: props.getProperty("last_debug_details") || "",
    lastUpdatedAt: props.getProperty("last_debug_time") || "",
  });
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    throw new Error("Sheet tab not found: " + SHEET_NAME);
  }

  return sheet;
}

function ensureHeaderRow_(sheet) {
  if (sheet.getLastRow() !== 0) {
    return;
  }

  sheet.appendRow(["Submitted At", "Email", "Message", "Source", "Submission ID"]);
}

function hasSubmission_(sheet, submissionId) {
  const lastRow = sheet.getLastRow();

  if (lastRow <= 1) {
    return false;
  }

  const values = sheet.getRange(2, 5, lastRow - 1, 1).getValues().flat();
  return values.includes(submissionId);
}

function getDebugSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(DEBUG_SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(DEBUG_SHEET_NAME);
    sheet.appendRow(["Timestamp", "Debug ID", "Step", "Details"]);
  }

  return sheet;
}

function logDebug_(debugId, step, details) {
  if (!ENABLE_DEBUG_LOGS) {
    return;
  }

  const timestamp = new Date().toISOString();
  const serializedDetails = JSON.stringify(details || {});
  const props = PropertiesService.getScriptProperties();

  props.setProperty("last_debug_id", debugId);
  props.setProperty("last_debug_step", step);
  props.setProperty("last_debug_details", serializedDetails);
  props.setProperty("last_debug_time", timestamp);

  const debugSheet = getDebugSheet_();
  debugSheet.appendRow([timestamp, debugId, step, serializedDetails]);
}

function readLatestDebug() {
  if (!ENABLE_DEBUG_LOGS) {
    Logger.log("Debug logging is disabled.");
    return;
  }

  const props = PropertiesService.getScriptProperties();
  Logger.log(JSON.stringify({
    lastDebugId: props.getProperty("last_debug_id") || "",
    lastStep: props.getProperty("last_debug_step") || "",
    lastDetails: props.getProperty("last_debug_details") || "",
    lastUpdatedAt: props.getProperty("last_debug_time") || "",
  }, null, 2));
}

function testWebhookPayload() {
  const samplePayload = {
    submissionId: Utilities.getUuid(),
    submittedAt: new Date().toISOString(),
    email: "debug@example.com",
    message: "Manual Apps Script test message",
    source: "manual-debug",
    secret: SHARED_SECRET,
  };

  const response = doPost({
    postData: {
      type: "application/json",
      contents: JSON.stringify(samplePayload),
    },
  });

  Logger.log(response.getContent());
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
