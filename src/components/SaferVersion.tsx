import { useState } from 'react';

interface SaferVersionProps {
    text: string;
}

export function SaferVersion({ text }: SaferVersionProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="glass-card p-6 animate-fade-in border-l-4 border-l-[var(--accent-secondary)]" style={{ animationDelay: '0.5s' }}>
            <div className="flex justify-between items-center mb-3">
                <h4 className="text-[var(--accent-secondary)] text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Safer Reworded Version
                </h4>
                <button
                    onClick={handleCopy}
                    className="text-xs text-[var(--text-secondary)] hover:text-white transition-colors flex items-center gap-1"
                >
                    {copied ? 'Copied!' : 'Copy Text'}
                </button>
            </div>
            <p className="text-lg bg-black/20 p-4 rounded-lg italic text-white/90 border border-white/5">
                "{text}"
            </p>
        </div>
    );
}
