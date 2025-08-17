// src/components/FutureEventPredictor.tsx
import React, { useState } from 'react';
import { callGeminiApi } from '../utils/callGeminiApi';
import SkeletonLoader from './SkeletonLoader';
import type { TimelineEvent } from '../types';

interface Prediction {
  year: string;
  title: string;
  description: string;
}

export const FutureEventPredictor: React.FC<{ lastEvent: TimelineEvent | null }> = ({ lastEvent }) => {
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const [error, setError] = useState('');

  const handleGetPrediction = async () => {
    if (!lastEvent) return;
    
    setIsThinking(true);
    setError('');
    setPrediction(null);

    const prompt = `Based on the last major milestone in computing being '${lastEvent.title}' in ${lastEvent.year}, what is a plausible next major milestone? Provide a creative but realistic title, a predicted year (e.g., "2030s"), and a short description. Your response must be in JSON format.`;
    
    // ✅ CORRECTED: The config object now uses snake_case and is much simpler.
    const config = {
      response_mime_type: "application/json",
    };

    try {
      const data = await callGeminiApi(prompt, config);
      setPrediction(data);
    } catch (err) {
      setError("Couldn't predict the future this time.");
    } finally {
      setIsThinking(false);
    }
  };

  if (!lastEvent) return null;

  return (
    <div className="mt-16 text-center p-6 relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800/50 border border-violet-200 dark:border-violet-900/50">
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-violet-500/20 via-purple-500/0 to-pink-500/20 animate-spin-slow -z-0"></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold font-display text-gray-800 dark:text-gray-200 mb-4">What's Next?</h2>
        <button 
          onClick={handleGetPrediction} 
          disabled={isThinking} 
          className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform transition-all disabled:opacity-50"
        >
          {isThinking ? 'Gazing into the future...' : 'Predict the Next Milestone'}
        </button>
        
        {isThinking && (
            <div className="mt-6 p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-xl">
                <SkeletonLoader />
            </div>
        )}

        {prediction && (
          <div className="mt-6 p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-xl text-left animate-fade-in-up">
            <p className="text-xl font-semibold text-violet-500 dark:text-violet-400">{prediction.year}</p>
            <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mt-1">{prediction.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{prediction.description}</p>
          </div>
        )}

        {error && (
            <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/50 rounded-lg text-red-700 dark:text-red-200">
                {error}
            </div>
        )}
      </div>
    </div>
  );
};