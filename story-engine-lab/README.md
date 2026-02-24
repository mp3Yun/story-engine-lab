# Story Engine Lab

Story Engine Lab is a headless story animation engine built as a technical playground for experimenting with render loops, timeline systems, and modular architecture design. It supports both manual page navigation and automatic timeline-based playback, making it ideal for creating short interactive stories or fantasy storybooks.

---

## Features

- **Manual & Auto Playback** – Flip pages manually or let the engine auto-play with page durations.
- **Headless Engine Architecture** – Separation of core engine logic from UI rendering.
- **Modular Design** – Easy to extend with new page elements, animations, or backgrounds.
- **Custom Timeline Control** – Fine-grained control over element appearance and duration.
- **TypeScript + React** – Fully typed and reactive, easy to integrate into web projects.

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/story-engine-lab.git
cd story-engine-lab
npm install
```

### Running Locally
npm run dev

### Project Structure
```
src/
  domain/       # Story and Page type definitions
  engine/       # Core StoryEngine class
  features/     # Library page / Player page 專屬功能
  components/   # React components for rendering UI
  assets/       # Background images, character images
```

### Usage Example
```
import { StoryEngine } from './engine/StoryEngine'
import { mockStory } from './domain/story'

const engine = new StoryEngine(mockStory)

// Subscribe to page changes
engine.subscribe(() => {
  console.log('Current page:', engine.getCurrentPage())
})

// Start auto playback
engine.setMode('auto')
engine.play()
```

### Future Roadmap
Add character and text animations

Implement typing effects and fade-ins

Build a web-based editor for writing and timing stories

Support multiple layers of backgrounds and audio tracks

Expand story length and branching paths for interactive stories