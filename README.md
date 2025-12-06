# NFL College Guessr 🏈

A fun web game where you guess which college/university each NFL player attended. Test your knowledge of college football and NFL players!

## Features

- **Multiple Difficulty Levels**: Easy (5 pts), Medium (10 pts), Hard (20 pts)
- **Weighted Random Selection**: 40% easy, 35% medium, 25% hard
- **Score Tracking**: Track your total score and current streak
- **Two Game Modes**:
  - **Classic Mode**: Play as long as you want
  - **Lives Mode**: 3 strikes and you're out!
- **Leaderboard**: Local storage-based leaderboard to track your best scores
- **Beautiful UI**: Modern, responsive design with smooth animations

## How to Run Locally

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually ``)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Game.jsx          # Main game component
    Game.css
    Scoreboard.jsx    # Score, streak, lives display
    Scoreboard.css
    Leaderboard.jsx   # Leaderboard view
    Leaderboard.css
  data/
    players.js        # Player database with difficulty levels
  utils/
    gameLogic.js      # Game logic functions
    storage.js        # Local storage utilities
  App.jsx             # Main app component with routing
  App.css
  main.jsx            # React entry point
  index.css           # Global styles
```

## Game Rules

- **Easy Players** (5 points): Heisman winners, 1st-round picks, top-50 fantasy names
- **Medium Players** (10 points): Well-known starters, non-Heisman QBs, mid-round picks
- **Hard Players** (20 points): Backup QBs, 2nd/3rd string players, late picks, small conference schools

## Stretch Features (Future Enhancements)

The codebase is structured to easily add:
- Multiple-choice mode
- Timed mode (15 seconds per question)
- Daily challenge
- Streak multiplier
- Dark mode

## Technologies Used

- React 18
- Vite
- CSS3 (with animations)
- Local Storage API

## License

MIT

