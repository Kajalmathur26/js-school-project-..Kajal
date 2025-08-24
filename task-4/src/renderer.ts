import type { TimelineEvent } from "./types";
import { openModal } from "./modal";

export function renderTimeline(events: TimelineEvent[]): void {
  const timelineContainer = document.getElementById("timeline");
  const navContainer = document.getElementById("timeline-nav");
  if (!timelineContainer || !navContainer) return;

  timelineContainer.innerHTML = "";
  navContainer.innerHTML = "";

  events.forEach(event => {
    const article = document.createElement("article");
    article.className = "timeline-event";
    article.id = event.id;
    article.innerHTML = `
      <div class="event-marker" aria-hidden="true"></div>
      <h2>${event.year} – ${event.title}</h2>
      <figure>
        <img src="${event.imageURL}" alt="${event.title}" />
        <figcaption>${event.category}</figcaption>
      </figure>
      <p>${event.description}</p>
    `;
    article.addEventListener("click", () => openModal(event));
    timelineContainer.appendChild(article);

    const navItem = document.createElement("div");
    navItem.className = "timeline-item";
    navItem.innerHTML = `
      <div class="timeline-label">${event.year}s</div>
      <a href="#${event.id}" class="timeline-dot" aria-label="Go to ${event.title}"></a>
    `;

    const dot = navItem.querySelector(".timeline-dot") as HTMLElement | null;
    if (dot) {
      dot.addEventListener("click", e => {
        e.preventDefault();
        document.querySelectorAll(".timeline-dot").forEach(d =>
          d.classList.remove("timeline-dot-focus")
        );
        dot.classList.add("timeline-dot-focus");

        const target = document.getElementById(event.id);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });

        openModal(event);
      });
    }

    navContainer.appendChild(navItem);
  });
}
