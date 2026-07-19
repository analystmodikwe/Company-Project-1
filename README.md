# Company-Project-1
Mokoena TT Holdings

A responsive one-page website for Mokoena TT Holdings, a bakery offering locally made, freshly baked bread, cakes, and pastries.

Redesigning an outdated website using React and Tailwind CSS

<!-- Problem i was solving -->
I rebuild an existing website because it had, Confusing navigation, No browser router or url link for every page, The navigation bar keeps disappearing as you scroll down its not sticky, The order now link is not working as it should be (bad UX), Address and email address are poorly  placed, Pictures of their items are not really placed properly, Their contact page has no contacts about them its only an input for a user to send a message,  The styling is not attractive. The form doesnt have any datbase or backend so the business can not recieve any equiries or orders

and company was not getting any customers through their website, thats an indicator that the UI/UX is bad, so thats the problem i was trying to solve.


Live site: [ https://mokoena-tt-holdings.netlify.app/ ]

Features


One-page layout with smooth scroll navigation between sections (Home, Services, Menu, About Us, Contacts)
Responsive navbar with a mobile hamburger menu that collapses into a dropdown below the md breakpoint
Hero section with a full-bleed background image
Services showcase in a responsive card grid
Menu display across three categories — Cakes, Everyday Treats, and Special Delights — each rendered dynamically from local data files
Contact section featuring:

An embedded Google Maps location, lazy-loaded via IntersectionObserver so it only mounts once scrolled into view (reduces initial load and avoids unnecessary background activity)
Phone, email, and WhatsApp contact details



Floating WhatsApp button for quick order enquiries, present on every section
Custom footer with business contact details and quick links


Tech Stack


React
Vite — build tool and dev server
Tailwind CSS
React Icons (react-icons/fa6)


Getting Started

Prerequisites


Node.js (v18 or later recommended)
npm


Installation

bashgit clone https://github.com/analystmodikwe/[your-repo-name].git
cd [your-repo-name]
npm install

Development

bashnpm run dev

Runs the app locally with Vite's dev server (default: http://localhost:5173).

Build

bashnpm run build

Builds the app for production into the dist/ folder.

Preview production build

bashnpm run preview

Performance Notes

A few deliberate optimizations were made to keep scrolling smooth:


Images in the Menu grid use loading="lazy" and decoding="async" to prevent large image decode work from blocking the main thread during scroll.
Google Maps embed is not rendered on initial page load — it mounts only when the Contact section scrolls into view, using an IntersectionObserver in Contact.jsx.
Card grids use responsive Tailwind breakpoints (grid-cols-*) so layouts adapt smoothly from mobile through desktop without large visual jumps.


Author

Built by Lesedi Modikwe.


