document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.getElementById("timeline");
    const navContainer = document.getElementById("timeline-nav");
    const modal = document.getElementById("modal");
    const modalBody = modal.querySelector(".modal-body");
    const closeBtn = modal.querySelector(".close-btn");
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    function setTheme(theme) {
        if (theme === "dark") {
            body.classList.add("dark-theme");
            body.classList.remove("light-theme");
        } else {
            body.classList.add("light-theme");
            body.classList.remove("dark-theme");
        }
        localStorage.setItem("theme", theme);
        themeToggle.textContent = theme === "dark" ? "Switch to Light" : "Switch to Dark";
    }

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    themeToggle.addEventListener("click", () => {
        const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
        setTheme(currentTheme === "dark" ? "light" : "dark");
    });

    fetch("./data/events.json")
        .then(res => res.json())
        .then(events => {
            events.forEach((event) => {
                const marker = document.createElement("article");
                marker.classList.add("timeline-event");
                marker.id = event.id;
                marker.innerHTML = `
                    <div class="event-marker" aria-hidden="true"></div>
                    <h2>${event.year} – ${event.title}</h2>
                    <figure>
                        <img src="${event.imageURL}" alt="${event.title}" width="300"/>
                    </figure>
                `;
                marker.addEventListener("click", () => openModal(event));
                timeline.appendChild(marker);

                const navItem = document.createElement("div");
                navItem.classList.add("timeline-item");
                navItem.innerHTML = `
                    <div class="timeline-label">${event.year}s</div>
                    <a href="#${event.id}" class="timeline-dot" aria-label="Go to ${event.title}"></a>
                `;
                const dot = navItem.querySelector(".timeline-dot");

                dot.addEventListener("click", (e) => {
                    e.preventDefault();
                    document.querySelectorAll(".timeline-dot").forEach(d => d.classList.remove("timeline-dot-focus"));
                    dot.classList.add("timeline-dot-focus");

                    const targetMarker = document.getElementById(event.id);
                    if (targetMarker) targetMarker.scrollIntoView({ behavior: "smooth", block: "center" });

                    openModal(event);
                });

                navContainer.appendChild(navItem);
            });
        })
        .catch(err => console.error("Error loading events:", err));

    function openModal(event) {
        modalBody.innerHTML = `
            <h2>
                <a href="${event.link}" target="_blank" rel="noopener noreferrer">
                    ${event.year} – ${event.title}
                </a>
            </h2>
            <p>${event.description}</p>
            <figure>
                <img src="${event.imageURL}" alt="${event.title}" width="300"/>
                <figcaption>${event.category}</figcaption>
            </figure>
        `;
        const modalLinks = modalBody.querySelectorAll("a");
        modalLinks.forEach(link => link.addEventListener("click", (e) => e.stopPropagation()));

        modal.setAttribute("aria-hidden", "false");
        modal.style.display = "block";
    }

    function closeModal() {
        modal.setAttribute("aria-hidden", "true");
        modal.style.display = "none";
    }

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
});
