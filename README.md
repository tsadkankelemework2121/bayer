# Bayer East Africa Fleet Management Dashboard

A professional, responsive fleet management dashboard displaying eco-driving and prohibitory driving compliance data for Bayer's East African operations.

## Features

✨ **Interactive Dashboard**
- Regional comparison (Kenya & Tanzania)
- Real-time metrics and KPIs
- Visual data representations using charts

📊 **Data Visualization**
- Bar charts for overspeeding incidents
- Pie charts for compliance distribution
- Detailed performance tables with rankings

🎯 **Key Metrics Tracked**
- Fleet size and vehicle counts
- Overspeeding incidents and compliance
- Prohibited driving hours violations
- Vehicle performance rankings

🎨 **Design Features**
- Modern dark theme with professional styling
- Fully responsive layout (mobile, tablet, desktop)
- Smooth transitions and interactive elements
- Accessible typography and color contrast

## Data Overview

### Kenya Region
- **Fleet Size:** 81 vehicles
- **Overspeeding Vehicles:** 45
- **Prohibited Hours Violations:** 68 vehicles
- **Compliance Rate:** 16% fully compliant
- **Notable:** Vehicle KCU 905Z had 81 overspeeding incidents (highest)

### Tanzania Region
- **Fleet Size:** 27 vehicles
- **Overspeeding Vehicles:** 5
- **Prohibited Hours Violations:** 21 vehicles
- **Compliance Rate:** 22% fully compliant
- **Notable:** Vehicle T 561 EXW had highest prohibited hour travel (890 minutes)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Technology Stack
- **React 19.2** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling & responsive design
- **Recharts** - Interactive data visualization
- **Vite** - Lightning-fast build tool

## Project Structure

```
src/
├── App.tsx          # Main dashboard component
├── index.css        # Tailwind configuration and global styles
└── main.tsx         # React entry point

tailwind.config.js   # Tailwind CSS configuration
postcss.config.js    # PostCSS configuration
vite.config.ts       # Vite configuration
```

## Dashboard Sections

### 1. Header
- Bayer branding with logo
- Report date and dashboard title
- Sticky navigation for easy access

### 2. Region Selector
- Toggle between Kenya and Tanzania
- Dynamic updates to all visualizations and metrics

### 3. Key Metrics Cards
- **Fleet Size** - Total number of vehicles
- **Overspeeding Incidents** - Vehicles exceeding speed limits
- **Prohibited Hours Violations** - Vehicles driving during restricted times
- **Compliance Rate** - Percentage of fully compliant vehicles

### 4. Visual Analytics
- **Overspeeding Bar Chart** - Incident counts by vehicle
- **Compliance Pie Chart** - Distribution between compliant and higher-risk vehicles

### 5. Top Performing Vehicles Table
- Top 5 ranked vehicles
- Maximum speed achieved
- Compliance status indicators
- Visual ranking badges

### 6. Key Insights Section
- Region-specific findings
- Performance highlights and concerns
- Actionable observations

## Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Background | #0a0e27 | Main background |
| Primary | #10b981 | Success, compliant status |
| Accent | #f59e0b | Warnings, incidents |
| Alert | #ef4444 | Violations, risks |
| Card Background | #111829 | Data cards |
| Border | #1f2937 | Dividers, borders |

## Deployment

### Deploy to Vercel

```bash
vercel deploy
```

### Build for Production

```bash
pnpm build
```

The optimized production build will be in the `dist` folder, ready for deployment to any static hosting service.

## Development Notes

The dashboard is designed to be:
- **Responsive** - Seamless experience on all screen sizes
- **Accessible** - Semantic HTML and proper color contrast
- **Performant** - Optimized charts and efficient rendering
- **Maintainable** - Clear component structure and consistent styling

## Report Information

- **Report Date:** January 2026
- **Regions Covered:** Kenya, Tanzania
- **Data Source:** Bayer East Africa Fleet Management System
- **Dashboard Created:** April 2026
