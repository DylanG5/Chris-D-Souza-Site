# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Chris D'Souza, an equity strategist, motivational speaker, and author. The site is built using vanilla HTML, CSS, and JavaScript without any build tools or frameworks.

## Project Structure

- **Root HTML files**: 10 HTML pages including `index.html` (homepage), `books.html`, `lecture.html`, `events.html`, `testimonial.html`, `songs.html`, `contact.html`, `DEI.html`, `DEI_schedule.html`, and `tailwind.html`
- **Static assets**:
  - `style.css` - Main stylesheet with responsive design and mobile navigation
  - `script.js` - JavaScript for mobile hamburger menu and collapsible content
  - `images/` - Directory containing photos, logos, and graphics
  - `audio/` - Directory for audio files
  - `documents/` - Directory for downloadable documents

## Key Features

- **Responsive design** with mobile hamburger navigation
- **Static content** showcasing books, workshops, events, and testimonials
- **DEI Summit pages** with schedule and speaker information
- **Fitnimism retreat** promotion and registration
- **Contact forms** and testimonials

## Development

This is a static website with no build process. Changes can be made directly to HTML, CSS, and JS files.

### Testing Changes
Since there are no automated tests or build commands, test changes by:
1. Opening HTML files directly in a browser
2. Testing responsive behavior on different screen sizes
3. Verifying mobile navigation functionality
4. Checking all internal links work correctly

## Deployment

The site uses automated deployment via GitHub Actions:
- **Workflow**: `.github/workflows/deployToGoDaddy.yml`
- **Trigger**: Pushes to `main` branch
- **Target**: GoDaddy hosting via FTP deployment
- **Directory**: Deploys to `public_html/` on the server

Changes pushed to the main branch will automatically deploy to the live website.

## Common Tasks

- **Update content**: Edit the relevant HTML files directly
- **Modify styling**: Edit `style.css` for visual changes
- **Add new pages**: Create new HTML files and update navigation in existing pages
- **Update images**: Add to `images/` directory and reference in HTML
- **Mobile menu changes**: Modify the hamburger menu structure in HTML and corresponding JavaScript in `script.js`

## Important Notes

- No package managers, build tools, or dependencies
- Uses external CDN for fonts (Google Fonts) and CSS normalization
- Mobile-first responsive design approach
- All pages follow consistent header/footer structure with navigation