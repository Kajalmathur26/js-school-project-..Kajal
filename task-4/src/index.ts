import { fetchTimelineData } from "./fetcher";
import { renderTimeline } from "./renderer";
import { setupModalControls } from "./modal";

function main(): void {
  const events = fetchTimelineData();
  renderTimeline(events);
  setupModalControls();
  console.log("✅ Timeline app initialized");
}

document.addEventListener("DOMContentLoaded", main);
