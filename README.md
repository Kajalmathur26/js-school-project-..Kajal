# 🖥️ Timeline of Computing

## Project Goal
This project is a static HTML-based timeline that showcases major milestones in the history of computing. The goal of this project is to develop a fully functional, accessible, and responsive timeline web application that evolves incrementally through six structured tasks.

## Initial Roadmap
- **Stage 1:** HTML. The Foundations of Web Design  
- **Stage 2:** CSS and Preprocessors  
- **Stage 3:** JavaScript Fundamentals. Dynamic Web Development  
- **Stage 4:** Typescript. Fundamentals  
- **Stage 5:** React. Building Dynamic User Interfaces  
- **Stage 6:** Web Accessibility – Designing for Everyone  

## Progress

### Task 1:
- Created a semantic and accessible HTML structure.  
- Included headings, sections, and articles for each timeline entry.  
- Added a `<header>` with a logo and theme toggle button.  
- Inserted placeholder images for each computing milestone.  
- Ensured proper use of semantic tags like `<main>`, `<section>`, `<article>`, `<figure>`, and `<footer>`.  
- Focused on clean HTML with meaningful content and layout.  

### Task 2:
- Developed a static, responsive layout using CSS Grid and Flexbox.  
- Established a clear base typography and cohesive color scheme for the app.  
- Styled timeline articles with consistent spacing, borders, and shadows for visual clarity.  
- Implemented responsive breakpoints for mobile, tablet, and desktop views.  
- Added accessible styling with focus states and readable color contrasts.  
- Enhanced user experience with interactive timeline markers and modal animations. 

### Task 3:   

- Introduced interactivity to the timeline using **vanilla JavaScript**.  
- Created a `data/events.json` file containing **at least 8 sample events**, each with `year`, `title`, `description`, `imageURL`, and `category`.  
- Developed `script.js` to:  
  - Fetch and parse the `events.json` file.  
  - Dynamically render event markers into the `#timeline` section.  
  - Attach click handlers to each marker to **open the modal** with detailed event information.  
  - Implement **close functionality** for the modal, including clicking outside the modal and the close button.  
- Updated `index.html` to load `script.js` at the end of the `<body>` for proper DOM access.  
- Ensured accessibility by using **ARIA attributes** and maintaining keyboard-friendly modal interactions.  
- Persisted **dark/light theme toggle** across sessions using `localStorage`.

