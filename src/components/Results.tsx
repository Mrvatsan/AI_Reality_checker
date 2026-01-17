import type { AnalysisResult } from '../hooks/useAnalysis';
import { VerdictCard } from './VerdictCard';
import { ConfidenceBar } from './ConfidenceBar';
import { ReasoningList } from './ReasoningList';
import { SaferVersion } from './SaferVersion';

interface ResultsProps {
    result: AnalysisResult;
}

export function Results({ result }: ResultsProps) {
    return (
        <div className="space-y-8 animate-fade-in pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <VerdictCard verdict={result.verdict} />
                <ConfidenceBar score={result.confidenceScore} />
            </div>

            <ReasoningList
                points={result.reasoningSummary}
                flags={result.manipulationFlags}
            />

            <SaferVersion text={result.saferVersion} />
        </div>
    );
}
