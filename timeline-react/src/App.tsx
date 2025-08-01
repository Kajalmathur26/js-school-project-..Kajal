import { useState, useEffect } from "react";
import Header from './components/Header';
import Timeline from './components/Timeline';
import EventModal from './components/EventModal';
import { FutureEventPredictor } from './components/FutureEventPredictor';
import { eventsData } from './data/events';
import type { TimelineEvent } from './types';

// ----------------------
// App Component
// ----------------------
function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => localStorage.getItem("theme") === "dark");
  const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>(null);
  
  const sortedEvents = [...eventsData].sort((a, b) => a.year - b.year);
  const activeIndex = activeEvent ? sortedEvents.findIndex(e => e.id === activeEvent.id) : -1;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  
  const handlePrev = () => {
      if(activeIndex > 0) {
          setActiveEvent(sortedEvents[activeIndex - 1]);
      }
  };
  
  const handleNext = () => {
      if(activeIndex < sortedEvents.length - 1) {
          setActiveEvent(sortedEvents[activeIndex + 1]);
      }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors relative overflow-x-hidden">
        <div className="aurora-background">
            <div className="aurora-one"></div><div className="aurora-two"></div><div className="aurora-three"></div>
        </div>
        <div className="relative z-10">
            <Header isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(prev => !prev)} />
            <main className="p-4">
                <Timeline events={sortedEvents} onEventClick={setActiveEvent} />
                <FutureEventPredictor lastEvent={sortedEvents[sortedEvents.length - 1]} />
            </main>
            <EventModal 
                event={activeEvent} 
                onClose={() => setActiveEvent(null)}
                onPrev={activeIndex > 0 ? handlePrev : undefined}
                onNext={activeIndex < sortedEvents.length - 1 ? handleNext : undefined}
            />
        </div>
    </div>
  );
}

export default App;
