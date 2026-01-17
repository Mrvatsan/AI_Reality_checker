export function Hero() {
    return (
        <div className="flex flex-col items-center text-center animate-fade-in pt-10">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--accent-secondary)] text-sm font-medium tracking-wide backdrop-blur-md">
                ✨ AI-Powered Logic Analysis
            </div>
            <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-500">
                    AI Reality Check
                </span>
            </h2>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                Decode viral noise. Analyze claims using <span className="text-[var(--text-primary)] font-semibold">pure logic</span>, not internet rumors.
            </p>
        </div>
    );
}
