export const GridBackground = () => {
    const contourPattern =
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='220' viewBox='0 0 320 220' fill='none'%3E%3Cpath d='M-24 62C34 30 96 30 150 58s112 30 194-4' stroke='%23f4eee3' stroke-opacity='0.07' stroke-width='1.1'/%3E%3Cpath d='M-16 138C44 110 102 116 154 144s114 34 190 0' stroke='%23f4eee3' stroke-opacity='0.06' stroke-width='1'/%3E%3Cpath d='M-28 196C42 170 102 172 148 198s116 28 202-8' stroke='%23f4eee3' stroke-opacity='0.05' stroke-width='1'/%3E%3C/svg%3E\")";

    return (
        <div className="fixed inset-0 z-0 min-h-screen w-full overflow-hidden bg-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,115,77,0.14),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(185,173,201,0.12),transparent_22%),linear-gradient(180deg,rgba(12,16,14,0.08),rgba(12,16,14,0.45))]" />
            <div className="absolute inset-x-0 top-[-12%] h-[48vh] bg-[radial-gradient(circle_at_center,rgba(255,244,234,0.1),transparent_65%)] blur-3xl" />
            <div className="absolute inset-y-0 right-[-10%] w-[40vw] bg-[radial-gradient(circle_at_center,rgba(213,177,109,0.12),transparent_58%)] blur-3xl" />
            <div
                className="absolute inset-0 opacity-35"
                style={{
                    backgroundImage: contourPattern,
                    backgroundSize: "320px 220px",
                }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(6,10,8,0.46)_100%)]" />
        </div>
    );
};
