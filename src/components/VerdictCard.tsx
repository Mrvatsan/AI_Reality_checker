import type { Verdict } from '../hooks/useAnalysis';

interface VerdictCardProps {
    verdict: Verdict;
}

const VERDICT_COLORS = {
    'Logically Plausible': 'var(--status-plausible)',
    'Logically Questionable': 'var(--status-questionable)',
    'Logically Inconsistent': 'var(--status-inconsistent)',
};

export function VerdictCard({ verdict }: VerdictCardProps) {
    const color = VERDICT_COLORS[verdict];

    return (
        <div className="glass-card p-6 text-center animate-fade-in" style={{ animationDelay: '0.2s', borderTop: `4px solid ${color}` }}>
            <h3 className="text-[var(--text-secondary)] text-sm uppercase tracking-wider mb-2">Likely Verdict</h3>
            <div className="text-3xl md:text-4xl font-bold" style={{ color }}>
                {verdict}
            </div>
        </div>
    );
}
