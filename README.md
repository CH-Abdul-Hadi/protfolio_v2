# LiveInsight

A modern, multi-theme developer portfolio that automatically updates based on your GitHub activity, resume, and personal information. Designed to evolve with your career, this portfolio minimizes maintenance while delivering a professional, visually-driven showcase—plus the ability to switch between multiple themes to reflect your style. :contentReference[oaicite:0]{index=0}

---

##  Multiple Portfolio Themes

LiveInsight includes three distinct visual templates—switchable via URL parameter (`?template=1`, `?template=2`, `?template=3`):

| Template | Description |
|----------|-------------|
| **1. CyberPunk Tech** | Bold, neon-infused, futuristic design with animations—great for tech-forward developers. :contentReference[oaicite:1]{index=1} |
| **2. Cool Elegant Light/Dark** | Minimalist and elegant, with support for light/dark mode and modern typography. :contentReference[oaicite:2]{index=2} |
| **3. Terminal Theme** | Retro terminal-style layout with monospace fonts, command-line vibes, and syntax highlighting. :contentReference[oaicite:3]{index=3} |

Switch themes instantly by appending the appropriate query parameter to your deployed URL.

---

##  Features

- **Auto-Generated Content**  
  Pulls your resume and GitHub profile data (repositories, stars, contributions, commit history) into a dynamic portfolio. :contentReference[oaicite:4]{index=4}

- **Real-Time Updates**  
  Integrates with APIs to reflect GitHub activity dynamically and supports manual or scheduled background refresh. :contentReference[oaicite:5]{index=5}

- **Interactive Stats**  
  Includes visuals like commit graphs, top languages, and key metrics for an engaging presentation. :contentReference[oaicite:6]{index=6}

- **Responsive & Customizable**  
  Works across devices, allows customization through a `portfolio.json` file, stored in local storage for faster load. :contentReference[oaicite:7]{index=7}

- **Modular Architecture**  
  Easy to expand with new templates—just add another src directory and configure the `main.tsx` loader. :contentReference[oaicite:8]{index=8}

---

##  Technology Stack

- **Frameworks & Languages:** React, TypeScript, Vite  
- **Design:** Tailwind CSS, Framer Motion, shadcn/ui  
- **Frontend Architecture:** Component-based structure supporting multiple themes :contentReference[oaicite:9]{index=9}

---

##  How It Works

1. **Initial Load**  
   Checks for existing local portfolio data; if not found, fetches data from GitHub. :contentReference[oaicite:10]{index=10}

2. **Data Processing**  
   Parses uploaded resume (PDF), fetches GitHub stats, and consolidates data into a portfolio model. :contentReference[oaicite:11]{index=11}

3. **Storage Layer**  
   Saves all data in local storage to improve performance and reduce API calls. :contentReference[oaicite:12]{index=12}

4. **Template Selection**  
   Loads the correct theme based on URL parameters; all themes share the same data model. :contentReference[oaicite:13]{index=13}

5. **Rendering & UX**  
   UI components update reactively based on data changes and adapt styling per active template. :contentReference[oaicite:14]{index=14}

6. **Updating Mechanism**  
   Manual refresh or scheduled updates via service worker ensure portfolio stays current. :contentReference[oaicite:15]{index=15}

---

##  Getting Started

### Prerequisites

- Node.js (version 16 or newer)  
- npm or Yarn  
- (Optional) Portfolio Automation API key for enhanced resume data integration :contentReference[oaicite:16]{index=16}


