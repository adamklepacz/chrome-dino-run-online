# Dino Run Game

This is an advanced version of the Chrome Dino game, built with TypeScript and Canvas within a Next.js application.

## Game Features

- **Classic Jumping Mechanics**: Jump over cacti and obstacles
- **Weapon Collection**: Collect weapons when you reach 400 points
- **Monster Shooting**: Shoot flying monsters for extra points
- **Progressive Difficulty**: Game speed increases as your score grows
- **High Score Tracking**: Keep track of your best performance

## Controls

- **SPACE** - Jump over obstacles
- **SHIFT** - Shoot (when weapon is collected)
- Mobile buttons are also provided for touch devices

## Game Technical Details

### Game Objects

- **Dino**: The main character controlled by the player
- **Obstacles**: Cacti of different sizes that the player must jump over
- **Monsters**: Flying creatures that can be shot for extra points
- **Weapons**: Collectible items that allow the player to shoot monsters
- **Bullets**: Projectiles fired by the dino when it has a weapon

### Game Parameters

The game has several configurable parameters that can be modified:

```typescript
// Game constants at the top of DinoGame.ts
const GROUND_HEIGHT = 20;
const JUMP_VELOCITY = -15;
const GRAVITY = 0.6;
const INITIAL_GAME_SPEED = 7;
const MAX_GAME_SPEED = 17;
const SCORE_INCREMENT = 1;
const SCORE_INTERVAL = 6; 
const WEAPON_SCORE_THRESHOLD = 400; // Score needed to get a weapon
const MONSTER_SCORE = 20; // Extra points for shooting a monster
```

## File Structure

- `GameCanvas.tsx` - React component that wraps the game canvas
- `DinoGame.ts` - Main game logic, handling rendering, physics, and game state

## How to Modify

### Adding New Obstacles

To add new types of obstacles, you can modify the `generateObstacles` method in the `DinoGame` class.

### Changing Sprites

The game uses sprite sheets for rendering. You can update the sprite constants in the `DinoGame` class:

```typescript
private dinoRunning1X = 1514;
private dinoRunning2X = 1602;
private dinoJumpingX = 1338;
```

### Gameplay Modifications

- To change the jump height, modify the `JUMP_VELOCITY` constant
- To change the game speed, modify the `INITIAL_GAME_SPEED` and `MAX_GAME_SPEED` constants
- To change when the weapon appears, modify the `WEAPON_SCORE_THRESHOLD` constant

## Integration

The Dino game is integrated into the application via the `/dino-game` route and uses the site's main layout for consistent styling. 