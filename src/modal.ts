import type { TimelineEvent } from "./types";

const modal = document.getElementById("modal");
const modalBody = modal?.querySelector(".modal-body") as HTMLElement | null;
const closeBtn = modal?.querySelector(".close-btn");

export function setupModalControls(): void {
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  console.log("Modal setup complete");
}

export function openModal(event: TimelineEvent): void {
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <h2>
      <a href="${event.link}" target="_blank" rel="noopener noreferrer">
        ${event.year} – ${event.title}
      </a>
    </h2>
    <p>${event.description}</p>
    <figure>
      <img src="${event.imageURL}" alt="${event.title}" />
      <figcaption>${event.category}</figcaption>
    </figure>
  `;

  modalBody.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", (e) => e.stopPropagation())
  );

  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(): void {
  if (!modal) return;
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}
