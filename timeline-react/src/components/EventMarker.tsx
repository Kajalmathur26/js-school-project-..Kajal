import React from "react";
import type { TimelineEvent } from "../types";

interface EventMarkerProps {
  event: TimelineEvent;
  onEventClick: (event: TimelineEvent) => void;
  style?: React.CSSProperties;
}

const EventMarker: React.FC<EventMarkerProps> = ({ event, onEventClick, style }) => (
  <div
    className="absolute cursor-pointer transform -translate-x-1/2 group animate-fade-in-up"
    style={style}
    onClick={() => onEventClick(event)}
  >
    <div className="w-5 h-5 bg-violet-500 rounded-full border-2 border-white dark:border-gray-800 group-hover:scale-125 transition-transform shadow-lg" />
    <span className="absolute top-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap bg-white/50 dark:bg-gray-900/50 px-2 py-1 rounded-md">
      {event.year}
    </span>
  </div>
);

export default EventMarker;
