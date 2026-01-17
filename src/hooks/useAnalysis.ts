import { useState } from 'react';

export type Verdict = 'Logically Plausible' | 'Logically Questionable' | 'Logically Inconsistent';

export interface AnalysisResult {
    verdict: Verdict;
    confidenceScore: number;
    reasoningSummary: string[];
    manipulationFlags: string[];
    saferVersion: string;
}

/**
 * Custom hook that manages the analysis lifecycle.
 * Simulates a network request with a delay and returns deterministic mock data.
 * 
 * @returns {object} The analysis state (isAnalyzing, result) and trigger function (analyzeClaim).
 */
export function useAnalysis() {
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<AnalysisResult | null>(null);

    const analyzeClaim = async (text: string) => {
        setIsAnalyzing(true);
        setResult(null);

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 2500));

        // Simple deterministic mock logic based on text length
        let mockResult: AnalysisResult;

        if (text.toLowerCase().includes('always') || text.toLowerCase().includes('never') || text.length < 50) {
            mockResult = {
                verdict: 'Logically Questionable',
                confidenceScore: 72,
                reasoningSummary: [
                    'The claim uses absolute terms ("always", "never") which are rarely factually precise in this context.',
                    'There is a lack of verifiable source attribution.',
                    'The reasoning relies on a generalization fallacy.'
                ],
                manipulationFlags: ['Absolute Language', 'Generalization'],
                saferVersion: text.replace(/always|never/g, 'often').replace(/everyone/g, 'many people')
            };
        } else if (text.toLowerCase().includes('prove') || text.toLowerCase().includes('fact')) {
            mockResult = {
                verdict: 'Logically Plausible',
                confidenceScore: 89,
                reasoningSummary: [
                    'The logic follows a sound deductive pattern.',
                    'No obvious emotional manipulation or logical fallacies detected.',
                    'The premises appear to support the conclusion adequately.'
                ],
                manipulationFlags: [],
                saferVersion: text
            };
        } else {
            mockResult = {
                verdict: 'Logically Inconsistent',
                confidenceScore: 45,
                reasoningSummary: [
                    'The conclusion does not follow from the premise (Non-sequitur).',
                    'High emotional valence usage suggests an appeal to emotion.',
                    'Key context is missing to fully evaluate the claim.'
                ],
                manipulationFlags: ['Non-sequitur', 'Emotional Appeal'],
                saferVersion: "It is reported that " + text
            };
        }

        setResult(mockResult);
        setIsAnalyzing(false);
    };

    return { isAnalyzing, result, analyzeClaim };
}
