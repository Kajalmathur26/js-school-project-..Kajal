// src/components/Timeline.tsx
import React from "react";
import type { TimelineEvent } from "../types";
import EventMarker from "./EventMarker";

interface TimelineProps {
  events: TimelineEvent[];
  onEventClick: (event: TimelineEvent) => void;
}

const Timeline: React.FC<TimelineProps> = ({ events, onEventClick }) => {
  const sortedEvents = [...events].sort((a, b) => a.year - b.year);
  const startYear = sortedEvents[0]?.year || 0;
  const endYear = sortedEvents[sortedEvents.length - 1]?.year || 0;

  return (
    <div className="relative w-11/12 mx-auto h-32 my-16 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg flex items-center">
      <div className="w-full h-1.5 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full" />
      {sortedEvents.map((event, index) => {
        const leftPercent = endYear > startYear ? ((event.year - startYear) / (endYear - startYear)) * 100 : 50;
        return (
          <EventMarker
            key={event.id}
            event={event}
            onEventClick={onEventClick}
            style={{ left: `${leftPercent}%`, animationDelay: `${index * 150}ms` }}
          />
        );
      })}
    </div>
  );
};

export default Timeline;
