/**
 * AI Reality Check - Main Application Entry Point
 * Manages the core layout and high-level state for the claim analysis flow.
 */
import { useState } from 'react';
import { Hero } from './components/Hero';
import { ClaimInput } from './components/ClaimInput';
import { Results } from './components/Results';
import { useAnalysis } from './hooks/useAnalysis';

function App() {
  const { isAnalyzing, result, analyzeClaim } = useAnalysis();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl space-y-12 md:space-y-20">
        <header className="flex justify-center">
          <Hero />
        </header>

        <main className="space-y-12">
          <ClaimInput onAnalyze={analyzeClaim} isAnalyzing={isAnalyzing} />

          {result && (
            <div className="transition-all duration-500 ease-out">
              <Results result={result} />
            </div>
          )}
        </main>

        <footer className="text-center py-6 text-sm text-[var(--text-secondary)] opacity-60 border-t border-[var(--glass-border)]">
          <p>This tool evaluates logical plausibility and reasoning quality. It does not guarantee real-time factual verification.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
