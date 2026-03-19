export const GridBackground = () => {
    const contourPattern =
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='220' viewBox='0 0 320 220' fill='none'%3E%3Cpath d='M-24 62C34 30 96 30 150 58s112 30 194-4' stroke='%23f4eee3' stroke-opacity='0.07' stroke-width='1.1'/%3E%3Cpath d='M-16 138C44 110 102 116 154 144s114 34 190 0' stroke='%23f4eee3' stroke-opacity='0.06' stroke-width='1'/%3E%3Cpath d='M-28 196C42 170 102 172 148 198s116 28 202-8' stroke='%23f4eee3' stroke-opacity='0.05' stroke-width='1'/%3E%3C/svg%3E\")";

    return (
        <div className="fixed inset-0 z-0 min-h-screen w-full overflow-hidden bg-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(146,162,129,0.08),transparent_30%),radial-gradient(circle_at_82%_14%,rgba(240,202,138,0.045),transparent_24%),radial-gradient(circle_at_50%_0%,rgba(255,245,228,0.06),transparent_38%),linear-gradient(180deg,rgba(255,248,235,0.018),rgba(13,17,15,0.08))]" />
            <div className="absolute inset-x-0 top-[-18%] h-[40vh] bg-[radial-gradient(circle_at_center,rgba(255,245,228,0.08),transparent_72%)] blur-3xl" />
            <div className="absolute left-[-4%] top-[24%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(145,161,128,0.045),transparent_60%)] blur-3xl" />
            <div className="absolute inset-y-0 right-[-4%] w-[28vw] bg-[radial-gradient(circle_at_center,rgba(240,202,138,0.045),transparent_60%)] blur-3xl" />
            <div
                className="absolute inset-0 opacity-16"
                style={{
                    backgroundImage: contourPattern,
                    backgroundSize: "320px 220px",
                }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,rgba(9,12,10,0.1)_100%)]" />
        </div>
    );
};
