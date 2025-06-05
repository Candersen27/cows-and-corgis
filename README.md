# 🐕 Cows and Corgis 🐄

A turn-based strategy game where players control adorable corgis to herd cows through fence gates on a hexagonal board.

![Game Status](https://img.shields.io/badge/status-in%20development-yellow)
![Platform](https://img.shields.io/badge/platform-mobile%20web-blue)
![Tech Stack](https://img.shields.io/badge/tech-HTML5%20%7C%20CSS3%20%7C%20JavaScript-orange)

## 🎮 Game Overview

**Cows and Corgis** combines cute animal themes with strategic depth. Players take turns moving their corgis to influence cow movement, trying to herd cows through their scoring gates while disrupting their opponent's plans.

### Core Mechanics
- **Turn-based strategy** on a hexagonal grid
- **Corgi movement**: 3 hexes per turn with tactical positioning
- **Cow AI**: Cows flee from nearby corgis with some randomness
- **Distraction system**: Adjacent corgis get distracted and skip turns
- **Strategic depth**: Create "sandwich plays" to disable multiple opponent corgis

### Unique Features
- **Mobile-first design** optimized for touch interaction
- **Emergent gameplay** through corgi positioning and cow behavior
- **Quick sessions** perfect for mobile gaming (5-10 minute games)
- **Easy to learn, hard to master** gameplay

## 🎯 Gameplay Rules

### Setup
- **Board**: Hexagonal grid with pasture, gates, and starting positions
- **Players**: 2 players, each controlling 3 corgis
- **Cows**: 5 neutral cows that move based on nearby corgi positions

### How to Play
1. **Move corgis**: Each turn, move all 3 corgis up to 3 hexes each
2. **Cow response**: Cows automatically move 1 hex, fleeing from nearby corgis
3. **Score points**: Get cows through your gate (first to 3 points wins)
4. **Tactical disruption**: Place corgis adjacent to opponent corgis to "distract" them

### Advanced Tactics
- **Herding corridors**: Use multiple corgis to guide cow movement
- **Disruption plays**: Sacrifice positioning to disable opponent pieces
- **Sandwich maneuvers**: Lock down 2 opponent corgis with 1 of yours

## 🛠️ Technical Architecture

### Tech Stack
- **Frontend**: HTML5 Canvas for smooth animations
- **Game Logic**: Vanilla JavaScript with modular architecture
- **Styling**: CSS3 with mobile-responsive design
- **Deployment**: Static hosting (GitHub Pages, Netlify, etc.)

### Key Systems
- **Hexagonal Grid**: Axial coordinate system for precise movement
- **Entity Management**: Modular corgi and cow classes
- **Turn Management**: State-driven game loop
- **AI Behavior**: Cow movement with proximity detection and flee mechanics
- **Touch Interaction**: Mobile-optimized input handling

### File Structure
```
cows-and-corgis/
├── index.html              # Main game interface
├── styles/
│   ├── main.css           # Core styling and layout
│   └── mobile.css         # Mobile-specific responsive design
├── scripts/
│   ├── main.js            # Game initialization and setup
│   ├── hexGrid.js         # Hexagonal coordinate mathematics
│   ├── gameBoard.js       # Board rendering and management
│   ├── entities.js        # Corgi and Cow entity classes
│   └── gameState.js       # Game state and turn management
└── assets/
    └── images/            # Game sprites and visual assets
```

## 🚀 Development Progress

### ✅ Phase 1: Foundation (Weeks 1-2)
- [x] Project setup and repository initialization
- [ ] Hexagonal grid system implementation
- [ ] Basic board rendering and canvas setup
- [ ] Entity classes for corgis and cows
- [ ] Touch interaction and input handling

### 🔄 Phase 2: Core Mechanics (Weeks 3-4)
- [ ] Corgi movement system with 3-hex range
- [ ] Cow AI with flee behavior
- [ ] Turn-based game loop
- [ ] Scoring system and win conditions
- [ ] Corgi distraction mechanics

### 📋 Phase 3: Polish & Enhancement (Weeks 5-6)
- [ ] Visual design and animations
- [ ] Sound effects and game feel
- [ ] Tutorial and onboarding
- [ ] Performance optimization
- [ ] Deployment and testing

### 🎯 Future Features
- [ ] Multiplayer implementation
- [ ] Progressive Web App (PWA) support
- [ ] Advanced gameplay modes
- [ ] Achievement system

## 🎨 Design Philosophy

### Game Design Goals
- **Intuitive theme**: Everyone understands "dogs herd cows"
- **Strategic depth**: Simple rules with emergent complexity
- **Mobile-optimized**: Touch-first interaction design
- **Quick sessions**: Engaging gameplay in 5-10 minutes

### Learning Objectives
This project serves as a comprehensive learning experience in:
- **JavaScript game development** fundamentals
- **Mobile-first design** principles
- **Turn-based game architecture** patterns
- **AI behavior programming** concepts
- **Modular code organization** best practices

## 🎮 How to Play (Development Version)

### Prerequisites
- Modern web browser with HTML5 Canvas support
- No additional installations required

### Local Development
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cows-and-corgis.git
   cd cows-and-corgis
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Start Live Server**
   - Install Live Server extension in VS Code
   - Right-click `index.html` → "Open with Live Server"
   - Game opens automatically in browser

4. **Development workflow**
   - Edit files in VS Code
   - Save changes for automatic browser refresh
   - Use browser developer tools for debugging

## 🤝 Contributing

This is a personal learning project, but feedback and suggestions are welcome!

### Development Process
- **Documentation-driven development**: Each coding session is documented as conversation PDFs
- **Iterative approach**: Build, test, refine, repeat
- **Mobile-first**: All features tested on mobile devices
- **Learning-focused**: Prioritize understanding over quick solutions

### Feedback Welcome
- Game balance suggestions
- UI/UX improvements
- Code architecture feedback
- Bug reports and edge cases

## 📚 Documentation

### Development Journey
This project uses an innovative "conversation-as-documentation" approach:
- Each development session saved as PDF
- Decision rationale preserved in context
- Learning moments documented for future reference
- Searchable development history

### Key Resources
- [Game Rules Document](docs/game_rules.md)
- [Development Plan](docs/week1_plan.md)
- [Technical Architecture](docs/architecture.md)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Project Goals

### Primary Objectives
- [x] **Learn JavaScript** game development fundamentals
- [ ] **Create portfolio piece** demonstrating technical skills
- [ ] **Build engaging game** that's genuinely fun to play
- [ ] **Master mobile development** touch interaction patterns

### Innovation Goals
- [ ] **Validate conversation-PDF workflow** for development documentation
- [ ] **Create reusable patterns** for future game projects
- [ ] **Develop unique mechanics** that feel fresh and engaging

---

*Built with ❤️ as a learning journey in game development. Follow along with the development process through documented conversation sessions!*