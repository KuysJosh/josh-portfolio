# Josh — IT Portfolio (React + TypeScript + Vite)

A modern, high-performance React implementation of the interactive IT Portfolio.

## Features Preserved & Enhanced
- **Interactive 3D Avatar Rig**:
  - Parallax head-tracking following cursor & touch with 60 FPS requestAnimationFrame
  - 23 high-resolution WebP sprites with gaze tracking & mood switching (neutral, happy, curious)
  - Real-time HUD displaying gaze direction and mood
  - Natural blinking cycle and ambient idle look-around animation
- **Dynamic Mouse Glow & Cyberpunk Accents**:
  - Radial gradient ambient cursor glow
  - Corner brackets, rotating disc, dashed orbits, and laser scan line
- **Terminal & Bento Grid**:
  - Authentic terminal with interactive commands (`whoami`, `cat focus.txt`, `location`, `status`)
  - Dynamic card spotlight that follows the mouse
  - Animated count-up statistics with ease-out cubic transitions upon scrolling into view
- **Typewriter Effect**:
  - Automatically cycles through key professional roles with blinking cursor
- **Infinite Marquee Ticker**:
  - Seamless continuous ticker of core IT skills
- **Interactive UI**:
  - Reading scroll progress bar at the top
  - Floating pill navigation with active section indicator (ScrollSpy)
  - Responsive mobile overlay sheet with ESC key handling and body lock
  - Interactive project cards with mock build/ping/query terminal windows
  - Working contact form with mailto generation and magnetic button physics
  - Smooth "Back to top" button

## Getting Started

### Development
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Production Build
Type-check and compile the production bundle:
```bash
npm run build
```

### Preview Build
Preview the compiled production build locally:
```bash
npm run preview
```

## Customizing Your Portfolio

All personal info, skills, projects, experience, stats, and links are organized cleanly in:
`src/data/portfolioData.ts`

Simply edit that file to update your roles, bio, work history, projects, and contact info without touching the component templates.
