interface ConfidenceBarProps {
    score: number;
}

export function ConfidenceBar({ score }: ConfidenceBarProps) {
    return (
        <div className="glass-card p-6 animate-fade-in flex flex-col justify-center" style={{ animationDelay: '0.3s' }}>
            <div className="flex justify-between items-end mb-2">
                <span className="text-[var(--text-secondary)] text-sm font-medium">Reasoning Confidence</span>
                <span className="text-2xl font-bold text-white">{score}%</span>
            </div>
            <div className="w-full bg-black/30 h-3 rounded-full overflow-hidden">
                <div
                    className="h-full bg-[var(--accent-secondary)] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${score}%`, boxShadow: '0 0 10px var(--accent-secondary)' }}
                />
            </div>
        </div>
    );
}
