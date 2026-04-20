# High-Performance Developer Portfolio

A futuristic, high-performance portfolio website built with pure HTML, CSS, and JavaScript. Featuring a dark sci-fi aesthetic, glassmorphism UI elements, smooth scrolling, scroll-triggered fade animations, and dynamic data rendering.

![Portfolio Preview](./images/smartkart.png)

## 🚀 Features

- **Futuristic UI/UX**: Dark theme with neon glowing accents, floating blobs, and an interactive grid background.
- **Glassmorphism**: Translucent cards with backdrop filters and precise border treatments to ensure high premium aesthetics.
- **Dynamic Content Injection**: Personal details, roles, education, soft/hard skills, and all projects are isolated and loaded dynamically through `script.js` to ensure the HTML stays semantic and clean.
- **Scroll Tracking & Animations**: Integrated Intersection Observers to trigger fade-ins progressively as users scroll.
- **Fully Responsive**: Fluid grid layouts that adapt continuously from widescreen desktops down to mobile devices, combined with an animated mobile hamburger menu.

## 🛠 Tech Stack

- **HTML5:** Semantic architecture
- **CSS3:** Native CSS variables, Flexbox, Canvas Grids, Keyframe Animations (No frameworks used for maximum control)
- **JavaScript (ES6):** DOM Manipulation, Intersection Observers, custom typing effects

## 📋 Requirements & Setup

Because this is a vanilla frontend application without a backend dependency tree, there are **no package managers or dependencies required** (No `npm`, `pip`, etc.). 

**To run the website locally:**
1. Clone this repository.
2. Navigate to the project directory.
3. Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).
   - *Optional:* Use a tool like VS Code Live Server for hot reloading while editing.

## 🚢 Deployment to GitHub Pages

This project is tailored specifically for instant deployment via GitHub Pages.

1. Upload/Push all files (`index.html`, `style.css`, `script.js`, and the `/images` folder) to your GitHub repository.
2. Navigate to **Settings** in your GitHub repository.
3. Click on the **Pages** tab on the left sidebar.
4. Under **Source**, select the `main` branch (or whichever branch you pushed to) and the `/ (root)` folder.
5. Click **Save**. Your site will be live within a few minutes!

## 📁 Directory Structure
```
/
├── index.html       # Structural layout and head metadata
├── style.css        # Visual styles, variables, queries, and keyframes
├── script.js        # Logic for injecting content and handling animations
├── README.md        # Documentation
└── /images          # Application mockups and visual assets
```

## 📝 Modifying Content Data

To update your skills, projects, or experience timeline, simply open `script.js`. All configuration arrays (`skillsData`, `experienceData`, `educationData`, `projectsData`) are conveniently located at the very top of the file for quick edits.
