# Dashboard Screenshots

This directory contains the 4 main dashboard screenshots used on the landing page.

## Required Images:

### 1. `dashboard-institutional.png`
- **Used in:** Institutional Trade Intelligence module
- **Shows:** Dashboard view with BEARISH signal for AAPL at $280.70
- **Alt text:** "Institutional Trade Intelligence Dashboard showing BEARISH signal for AAPL"
- **Purpose:** Showcase the main trading intelligence interface

### 2. `research-workspace.png`
- **Used in:** Company Fundamentals Terminal module
- **Shows:** Research workspace with AAPL financial statements and metrics
- **Alt text:** "Research Workspace showing AAPL financial statements and metrics"
- **Purpose:** Demonstrate fundamental analysis capabilities

### 3. `comparison-table.png`
- **Used in:** AI Research Copilot module
- **Shows:** SniperIQ vs competitors comparison table
- **Alt text:** "SniperIQ vs Competitors Comparison showing institutional advantages"
- **Purpose:** Highlight competitive advantages

### 4. `institutional-engine.png`
- **Used in:** "See It In Action" preview section
- **Shows:** Institutional Intelligence engine detailed breakdown
- **Alt text:** "Institutional Intelligence Engine breakdown showing detailed analysis"
- **Purpose:** Show the depth of institutional analysis

## Image Requirements:

- **Format:** PNG (preferred for screenshots)
- **Quality:** High resolution for retina displays (2x recommended)
- **Size:** Optimize for web (use compression tools like TinyPNG)
- **Aspect Ratio:** 16:9 or similar landscape format
- **Max File Size:** < 500KB per image (after optimization)

## How to Add Images:

1. Save/upload the 4 screenshots from the user's uploads
2. Rename them to match the filenames above
3. Place them in this directory: `public/images/screenshots/`
4. Rebuild the landing page: `npm run build`
5. Deploy to production

## Design Effects Applied:

All screenshots use glassmorphism effects:
- Semi-transparent backdrop with blur
- Gradient overlays (blue/purple, emerald/teal, amber/orange)
- Border with white/10 opacity
- Hover scale animation (1.05x zoom)
- Shadow-2xl for depth
- Gradient fade from bottom (black/40 to transparent)

## Note:

The landing page will still build and work without these images, but will show broken image placeholders. Make sure to add the actual screenshots before deploying to production.
