interface ReasoningListProps {
    points: string[];
    flags: string[];
}

export function ReasoningList({ points, flags }: ReasoningListProps) {
    return (
        <div className="glass-card p-8 animate-fade-in space-y-6" style={{ animationDelay: '0.4s' }}>
            {/* Flags Section */}
            {flags.length > 0 && (
                <div className="mb-6">
                    <h4 className="text-[var(--text-secondary)] text-sm uppercase tracking-wider mb-3">Potential Red Flags</h4>
                    <div className="flex flex-wrap gap-2">
                        {flags.map((flag, i) => (
                            <span key={i} className="px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-full">
                                ⚠️ {flag}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Reasoning Points */}
            <div>
                <h4 className="text-[var(--text-secondary)] text-sm uppercase tracking-wider mb-3">Logic Analysis</h4>
                <ul className="space-y-3">
                    {points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-lg text-white/90">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] shrink-0" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
