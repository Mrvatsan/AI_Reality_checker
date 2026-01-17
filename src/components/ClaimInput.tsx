import { useState } from 'react';

interface ClaimInputProps {
    onAnalyze: (text: string) => void;
    isAnalyzing: boolean;
}

export function ClaimInput({ onAnalyze, isAnalyzing }: ClaimInputProps) {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (text.trim().length > 0) {
            onAnalyze(text);
        }
    };

    return (
        <div className="glass-card p-1 animate-fade-in mx-auto w-full max-w-3xl" style={{ animationDelay: '0.1s' }}>
            <div className="bg-[rgba(10,11,16,0.6)] rounded-[22px] p-8 md:p-12 border border-white/5 w-full">
                <div className="mb-8 flex justify-between items-end w-full">
                    <label className="text-base font-semibold text-[var(--text-primary)] font-['Outfit'] block mb-1">
                        Viral Content
                    </label>
                    <span className="text-xs font-mono text-[var(--text-tertiary)] bg-white/5 px-2 py-1 rounded">
                        {text.length} chars
                    </span>
                </div>

                <textarea
                    className="w-full bg-black/30 border border-white/10 rounded-xl p-6 text-lg text-white placeholder-[var(--text-tertiary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-all resize-none mb-10 min-h-[180px] leading-relaxed backdrop-blur-sm"
                    placeholder="Paste a viral tweet, reel caption, or forwarded message here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    disabled={isAnalyzing}
                />

                <div className="flex justify-between items-center">
                    <p className="text-sm text-[var(--text-tertiary)] hidden md:block opacity-80">
                        We care about logic, not politics.
                    </p>
                    <button
                        className="btn-primary flex items-center gap-3 min-w-[180px] justify-center ml-auto"
                        onClick={handleSubmit}
                        disabled={isAnalyzing || text.trim().length === 0}
                    >
                        {isAnalyzing ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>Analyzing...</span>
                            </>
                        ) : (
                            <>
                                <span>Analyze Claim</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
