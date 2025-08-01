// src/components/EventModal.tsx
import React, { useState, useEffect } from "react";
import type { TimelineEvent } from "../types";
import { callGeminiApi } from "../utils/callGeminiApi"; // helper function for API call
import SkeletonLoader from "./SkeletonLoader";

interface EventModalProps {
  event: TimelineEvent | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose, onPrev, onNext }) => {
  const [summary, setSummary] = useState('');
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [summaryError, setSummaryError] = useState('');

  // Reset state on event change
  useEffect(() => {
    setSummary('');
    setSummaryError('');
  }, [event]);

  const handleGetSummary = async () => {
    if (!event) return;
    setIsSummarizing(true);
    setSummaryError('');
    try {
      const data = await callGeminiApi(`Summarize: ${event.description}`);
      setSummary(data || "No summary available.");
    } catch {
      setSummaryError("Couldn't generate summary.");
    } finally {
      setIsSummarizing(false);
    }
  };

  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-lg w-full">
        <button onClick={onClose}>Close</button>

        <img
          src={event.imageURL}
          alt={event.title}
          className="mb-4 w-full h-48 object-cover rounded"
        />

        <h2>{event.title} ({event.year})</h2>
        <p>{event.description}</p>

        <button onClick={handleGetSummary} disabled={isSummarizing}>
          {isSummarizing ? "Thinking..." : "Quick Summary"}
        </button>

        {/* Show loader while summarizing */}
        {isSummarizing && <SkeletonLoader />}

        {/* Show summary once available */}
        {summary && <p>{summary}</p>}
        {summaryError && <p className="text-red-500">{summaryError}</p>}

        <div className="flex justify-between mt-4">
          {onPrev && <button onClick={onPrev}>Prev</button>}
          {onNext && <button onClick={onNext}>Next</button>}
        </div>
      </div>
    </div>
  );
};

export default EventModal;
