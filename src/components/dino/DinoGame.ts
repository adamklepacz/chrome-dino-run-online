// Game constants
const GROUND_HEIGHT = 20;
const JUMP_VELOCITY = -15;
const GRAVITY = 0.6;
const INITIAL_GAME_SPEED = 7;
const MAX_GAME_SPEED = 17;
const SCORE_INCREMENT = 1;
const SCORE_INTERVAL = 6; 
const WEAPON_SCORE_THRESHOLD = 100; // Score needed to get a weapon
const MONSTER_SCORE = 20; // Extra points for shooting a monster
const CLOUD_FREQUENCY = 150; // How often a new cloud appears

// Types for game objects
interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  visible?: boolean;
}

interface Dino extends GameObject {
  velocityY: number;
  jumping: boolean;
  hasWeapon: boolean;
  crouching: boolean;
}

interface Obstacle extends GameObject {
  type: 'small' | 'large';
  multiple: number; // For clustered obstacles
}

interface Monster extends GameObject {
  speed: number;
  frameIndex?: number; // For animation frames
}

interface Weapon extends GameObject {
  visible: boolean;
}

interface Bullet extends GameObject {
  speed: number;
}

interface Cloud extends GameObject {
  speed: number;
}

interface GameState {
  score: number;
  highScore: number;
  gameSpeed: number;
  gameOver: boolean;
  gameStarted: boolean;
  isPaused: boolean;
  debugMode: boolean;
}

export class DinoGame {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private spriteSheet: HTMLImageElement;
  private gunImage: HTMLImageElement;
  private groundY: number;
  private animationId: number | null = null;
  private frameCount: number = 0;
  private lastFrameTime: number = 0;
  private groundOffset: number = 0;
  
  // Callback for game over event
  public onGameOver: () => void = () => {};
  
  // Game objects
  private dino: Dino;
  private obstacles: Obstacle[] = [];
  private monsters: Monster[] = [];
  private weapons: Weapon[] = [];
  private bullets: Bullet[] = [];
  private clouds: Cloud[] = [];

  // Game state
  private state: GameState = {
    score: 0,
    highScore: 0,
    gameSpeed: 0,
    gameOver: false,
    gameStarted: false,
    isPaused: false,
    debugMode: false
  };
  
  // Sprites positions
  private dinoRunning1X = 1514;
  private dinoRunning2X = 1602;
  private dinoJumpingX = 1338;
  private dinoCrouching1X = 1866;
  private dinoWidth = 88;
  private dinoCrouchWidth = 118;
  private dinoCrouching2X = 1984;
  private dinoHeight = 94;
  private dinoCrouchHeight = 60;
  private crouchingSpriteY = 36; // Y position of crouching sprite
  private cloudX = 166;
  private cloudY = 2;
  private cloudWidth = 92;
  private cloudHeight = 27;
  private groundX = 0;
  private groundSpriteY = 104;
  private groundWidth = 2404;
  private groundHeight = 24;
  
  // Add these sprite coordinates for game over text and numbers
  private gameOverX = 954;
  private gameOverY = 25;
  private gameOverWidth = 382;
  private gameOverHeight = 25;
  private numbersX = 954;
  private numbersY = 0;
  private numberWidth = 20;
  private numberHeight = 23;
  private refreshIconX = 2;  // Start position in sprite.png
  private refreshIconY = 2;
  private refreshIconWidth = 73;  // Updated width: 75 - 2 = 73
  private refreshIconHeight = 65;  // Updated height: 67 - 2 = 65
  
  // Add these sprite coordinates for pterodactyl
  private pterodactylWingsUpX = 260;     // Adjusted frame position in sprite.png
  private pterodactylWingsUpY = 2;       // Y position in sprite.png
  private pterodactylWingsDownX = 350;   // Adjusted second frame position
  private pterodactylWingsDownY = 2;     // Y position in sprite.png
  private pterodactylWidth = 93;         // Original width from the code
  private pterodactylHeight = 69;        // Original height from the code
  private pterodactylDisplayWidth = 93;  // Display with same dimensions
  private pterodactylDisplayHeight = 69; // Display with same dimensions
  
  // For crouching animation
  private calculateCrouchY(): number {
    // In the original code, the y position doesn't change when crouching
    // It just uses a different hitbox
    return this.groundY - this.dinoHeight;
  }

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Could not get 2D context from canvas');
    }
    this.ctx = context;
    
    // Calculate ground position
    this.groundY = this.canvas.height - GROUND_HEIGHT;
    
    // Initialize dino
    this.dino = {
      x: 100,
      y: this.groundY - this.dinoHeight, // Dino height
      width: this.dinoWidth,
      height: this.dinoHeight,
      velocityY: 0,
      jumping: false,
      hasWeapon: false,
      crouching: false
    };
    
    // Load sprite sheet
    this.spriteSheet = new Image();
    this.spriteSheet.src = '/dino-assets/sprite.png';
    
    // Preload all sprite assets
    this.preloadAssets();
  }
  
  private preloadAssets(): void {
    const sprite2 = new Image();
    sprite2.src = '/dino-assets/sprite2.png';
    
    const sprite3 = new Image();
    sprite3.src = '/dino-assets/sprite3.png';
    
    const sprite4 = new Image();
    sprite4.src = '/dino-assets/sprite4.png';
    
    // Load gun image
    this.gunImage = new Image();
    this.gunImage.src = '/dino-assets/gun.png';
  }
  
  public start(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    
    // Reset game state
    this.state = {
      score: 0,
      highScore: this.state.highScore, // Keep high score
      gameSpeed: INITIAL_GAME_SPEED,
      gameOver: false,
      gameStarted: true,
      isPaused: false,
      debugMode: false
    };
    
    // Reset game objects
    this.obstacles = [];
    this.monsters = [];
    this.weapons = [];
    this.bullets = [];
    this.clouds = [];
    this.groundOffset = 0;
    
    // Initialize some clouds
    this.generateInitialClouds();
    
    // Reset dino
    this.dino.velocityY = 0;
    this.dino.jumping = false;
    this.dino.hasWeapon = false;
    this.dino.crouching = false;
    this.dino.width = this.dinoWidth;
    this.dino.height = this.dinoHeight;
    // Ensure correct Y position
    this.dino.y = this.groundY - this.dino.height;
    
    // Start game loop
    this.lastFrameTime = performance.now();
    this.frameCount = 0;
    this.gameLoop(this.lastFrameTime);
  }
  
  private generateInitialClouds(): void {
    // Create a few clouds at game start for a nicer look
    for (let i = 0; i < 3; i++) {
      this.clouds.push({
        x: Math.random() * this.canvas.width,
        y: 50 + Math.random() * 100,
        width: this.cloudWidth,
        height: this.cloudHeight,
        speed: this.state.gameSpeed * 0.5
      });
    }
  }
  
  public stop(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
  
  public handleJump(): void {
    // If game is over, restart
    if (this.state.gameOver) {
      this.start();
      return;
    }
    
    // If game has not started, start it
    if (!this.state.gameStarted) {
      this.start();
      return;
    }
    
    // Cannot jump while crouching
    if (this.dino.crouching) {
      return;
    }
    
    // If dino is not jumping, make it jump
    if (!this.dino.jumping) {
      this.dino.velocityY = JUMP_VELOCITY;
      this.dino.jumping = true;
    }
  }
  
  public handleCrouch(isCrouching: boolean): void {
    if (!this.state.gameStarted || this.state.gameOver) return;
    
    // Cannot crouch while jumping
    if (this.dino.jumping) return;
    
    if (isCrouching) {
      // Start crouching
      if (!this.dino.crouching) {
        this.dino.crouching = true;
        // Update hitbox size
        this.dino.width = this.dinoCrouchWidth;
        this.dino.height = this.dinoCrouchHeight;
        // Adjust Y position to keep feet on ground
        // dinoHeight - dinoCrouchHeight is the difference in heights
        this.dino.y = this.groundY - this.dinoCrouchHeight;
      }
    } else {
      // Stop crouching
      if (this.dino.crouching) {
        this.dino.crouching = false;
        // Restore hitbox size
        this.dino.width = this.dinoWidth;
        this.dino.height = this.dinoHeight;
        // Restore Y position
        this.dino.y = this.groundY - this.dinoHeight;
      }
    }
  }
  
  public handleShoot(): void {
    if (!this.state.gameStarted || this.state.gameOver || !this.dino.hasWeapon) return;
    
    // Create a new bullet
    this.bullets.push({
      x: this.dino.x + this.dino.width,
      y: this.dino.y + this.dino.height / 3,
      width: 20,
      height: 5,
      speed: 15
    });
  }
  
  private gameLoop(timestamp: number): void {
    // Calculate delta time
    const deltaTime = timestamp - this.lastFrameTime;
    this.lastFrameTime = timestamp;
    
    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Update game state if not paused
    if (!this.state.isPaused) {
      this.update(deltaTime);
    }
    
    // Draw game
    this.draw();
    
    // Continue loop if game is not over
    if (!this.state.gameOver) {
      this.animationId = requestAnimationFrame(this.gameLoop.bind(this));
    }
  }
  
  private update(deltaTime: number): void {
    if (!this.state.gameStarted || this.state.gameOver || this.state.isPaused) return;
    
    this.frameCount++;
    
    // Update score
    if (this.frameCount % SCORE_INTERVAL === 0) {
      this.state.score += SCORE_INCREMENT;
    }
    
    // Increase game speed based on score
    this.state.gameSpeed = Math.min(
      INITIAL_GAME_SPEED + (this.state.score / 100),
      MAX_GAME_SPEED
    );
    
    // Update ground position
    this.updateGround();
    
    // Update dino position
    this.updateDino();
    
    // Generate obstacles and monsters
    this.generateObstacles();
    this.generateMonsters();
    this.generateClouds();
    
    // Generate weapon if score threshold reached
    if (this.state.score >= WEAPON_SCORE_THRESHOLD && !this.dino.hasWeapon && this.weapons.length === 0) {
      this.generateWeapon();
    }
    
    // Update obstacles
    this.updateObstacles();
    
    // Update monsters
    this.updateMonsters();
    
    // Update weapons
    this.updateWeapons();
    
    // Update bullets
    this.updateBullets();
    
    // Update clouds
    this.updateClouds();
    
    // Check collisions
    this.checkCollisions();
  }
  
  private updateGround(): void {
    // Scroll ground based on game speed
    this.groundOffset = (this.groundOffset + this.state.gameSpeed) % this.groundWidth;
  }
  
  private updateDino(): void {
    // Apply gravity to dino if jumping
    if (this.dino.jumping) {
      this.dino.velocityY += GRAVITY;
      this.dino.y += this.dino.velocityY;
      
      // Check if dino is on ground
      if (this.dino.y >= this.groundY - this.dino.height) {
        this.dino.y = this.groundY - this.dino.height;
        this.dino.velocityY = 0;
        this.dino.jumping = false;
      }
    }
  }
  
  private generateClouds(): void {
    // Random cloud generation
    if (this.frameCount % CLOUD_FREQUENCY === 0 && Math.random() < 0.6) {
      const randomY = 20 + Math.random() * 100; // Random height for clouds
      
      this.clouds.push({
        x: this.canvas.width,
        y: randomY,
        width: this.cloudWidth,
        height: this.cloudHeight,
        speed: this.state.gameSpeed * 0.3 + Math.random() * 0.3 // Clouds move slower than the game
      });
    }
  }
  
  private updateClouds(): void {
    // Move clouds and remove if off screen
    this.clouds = this.clouds.filter(cloud => {
      cloud.x -= cloud.speed;
      return cloud.x + cloud.width > 0;
    });
  }
  
  private generateObstacles(): void {
    // Random obstacle generation based on score and frame count
    if (this.frameCount % 60 === 0 && Math.random() < 0.5) {
      // Decide obstacle type
      const isLarge = Math.random() < 0.3;
      
      // Determine number of clustered obstacles (1-3)
      const multiple = Math.floor(Math.random() * 3) + 1;
      
      if (isLarge) {
        this.obstacles.push({
          x: this.canvas.width,
          y: this.groundY - 100, // Tall cactus height
          width: 49 * multiple,
          height: 100,
          type: 'large',
          multiple
        });
      } else {
        this.obstacles.push({
          x: this.canvas.width,
          y: this.groundY - 70, // Small cactus height
          width: 34 * multiple,
          height: 70,
          type: 'small',
          multiple
        });
      }
    }
  }
  
  private generateMonsters(): void {
    // Generate flying monsters occasionally
    if (this.state.score > 200 && this.frameCount % 120 === 0 && Math.random() < 0.3) {
      // Random height for flying monster
      const randomY = this.groundY - 150 - Math.random() * 60;
      
      this.monsters.push({
        x: this.canvas.width,
        y: randomY,
        width: this.pterodactylDisplayWidth,
        height: this.pterodactylDisplayHeight,
        speed: this.state.gameSpeed * 0.8,
        frameIndex: 0 // Start with wings up
      });
    }
  }
  
  private generateWeapon(): void {
    // Create a new weapon at a safe position
    const weapon = {
      x: this.canvas.width,
      y: this.groundY - 60, // Position above ground
      width: 45,
      height: 30,
      visible: true
    };

    // Check if there is any obstacle nearby that would make collecting the weapon dangerous
    if (this.isSafePosition(weapon)) {
      this.weapons.push(weapon);
    } else {
      // Try again after some frames if current position isn't safe
      setTimeout(() => {
        if (!this.dino.hasWeapon && this.weapons.length === 0 && !this.state.gameOver) {
          this.generateWeapon();
        }
      }, 1000); // Wait a second before trying again
    }
  }
  
  private isSafePosition(weapon: GameObject): boolean {
    // Safety margin (extra space to ensure player doesn't need to be too close to obstacles)
    const safetyMargin = 100;
    
    // Check if any obstacle is too close to the weapon
    for (const obstacle of this.obstacles) {
      // Calculate horizontal distance between obstacle and weapon
      const horizontalDistance = obstacle.x - weapon.x;
      
      // If obstacle is ahead of weapon and close enough to be dangerous
      if (horizontalDistance >= -obstacle.width && horizontalDistance <= safetyMargin) {
        return false;
      }
    }
    
    // Check monsters too
    for (const monster of this.monsters) {
      // Calculate horizontal distance between monster and weapon
      const horizontalDistance = monster.x - weapon.x;
      
      // If monster is ahead of weapon and close enough to be dangerous
      if (horizontalDistance >= -monster.width && horizontalDistance <= safetyMargin) {
        return false;
      }
      
      // Also check vertical distance for flying monsters
      const verticalDistance = Math.abs(monster.y - weapon.y);
      if (verticalDistance < monster.height + weapon.height) {
        return false; // Too close vertically
      }
    }
    
    return true; // No obstacles are dangerously close
  }
  
  private updateObstacles(): void {
    // Move obstacles and remove if off screen
    this.obstacles = this.obstacles.filter(obstacle => {
      obstacle.x -= this.state.gameSpeed;
      return obstacle.x + obstacle.width > 0;
    });
  }
  
  private updateMonsters(): void {
    // Move monsters and remove if off screen
    this.monsters = this.monsters.filter(monster => {
      monster.x -= monster.speed;
      return monster.x + monster.width > 0;
    });
  }
  
  private updateWeapons(): void {
    // Move weapons and remove if off screen
    this.weapons = this.weapons.filter(weapon => {
      weapon.x -= this.state.gameSpeed;
      return weapon.x + weapon.width > 0 && weapon.visible;
    });
  }
  
  private updateBullets(): void {
    // Move bullets and remove if off screen
    this.bullets = this.bullets.filter(bullet => {
      bullet.x += bullet.speed;
      return bullet.x < this.canvas.width;
    });
  }
  
  private checkCollisions(): void {
    // Create a smaller hitbox for the dino to make collisions more forgiving
    const dinoHitbox = {
      x: this.dino.x + 10,  // Add some padding on the left
      y: this.dino.y + (this.dino.crouching ? 20 : 10),  // Adjusted padding for crouching
      width: this.dino.width - 20, // Make hitbox a bit smaller than the visual sprite
      height: this.dino.height - (this.dino.crouching ? 30 : 15) // Adjusted height reduction for crouching
    };
    
    // Draw debug hitbox if debug mode is enabled
    if (this.state.debugMode) {
      this.drawHitbox(dinoHitbox, 'red');
      // Also draw the visual sprite box in a different color
      this.ctx.strokeStyle = 'green';
      this.ctx.lineWidth = 1;
      this.ctx.strokeRect(this.dino.x, this.dino.y, this.dino.width, this.dino.height);
      
      // Draw ground level line
      this.ctx.strokeStyle = 'blue';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(0, this.groundY);
      this.ctx.lineTo(this.canvas.width, this.groundY);
      this.ctx.stroke();
    }
    
    // Check collision with obstacles
    for (const obstacle of this.obstacles) {
      // Create a hitbox that's slightly smaller than the visual size
      // to make the collision detection more forgiving
      const obstacleHitbox = {
        x: obstacle.x + 10,  // Add some padding on the left
        y: obstacle.y + 10,  // Add some padding on top
        width: obstacle.width - 20,  // Make hitbox a bit smaller than the visual sprite
        height: obstacle.height - 20 // Make hitbox a bit smaller than the visual sprite
      };
      
      // Draw debug hitbox if debug mode is enabled
      if (this.state.debugMode) {
        this.drawHitbox(obstacleHitbox, 'blue');
      }
      
      if (this.isCollision(dinoHitbox, obstacleHitbox)) {
        this.gameOver();
        return;
      }
    }
    
    // Check collision with monsters
    for (let i = 0; i < this.monsters.length; i++) {
      const monster = this.monsters[i];
      
      // Create a hitbox that's slightly smaller than the visual size
      // to make the collision detection more forgiving
      const monsterHitbox = {
        x: monster.x + 10,  // Adjust hitbox position slightly
        y: monster.y + 10,
        width: monster.width - 20,  // Make hitbox a bit smaller than the visual sprite
        height: monster.height - 20
      };
      
      // Draw debug hitbox if debug mode is enabled
      if (this.state.debugMode) {
        this.drawHitbox(monsterHitbox, 'green');
      }
      
      // Check collision with dino
      if (this.isCollision(dinoHitbox, monsterHitbox)) {
        this.gameOver();
        return;
      }
      
      // Check collision with bullets
      for (let j = 0; j < this.bullets.length; j++) {
        const bullet = this.bullets[j];
        
        if (this.isCollision(bullet, monsterHitbox)) {
          // Remove monster and bullet
          this.monsters.splice(i, 1);
          this.bullets.splice(j, 1);
          
          // Add points for shooting monster
          this.state.score += MONSTER_SCORE;
          
          // Decrement counters since we removed items
          i--;
          j--;
          break;
        }
      }
    }
    
    // Check collision with weapons
    for (let i = 0; i < this.weapons.length; i++) {
      const weapon = this.weapons[i];
      
      if (weapon.visible && this.isCollision(dinoHitbox, weapon)) {
        // Collect weapon
        this.dino.hasWeapon = true;
        weapon.visible = false;
        this.weapons.splice(i, 1);
        break;
      }
    }
  }
  
  private isCollision(a: GameObject, b: GameObject): boolean {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }
  
  private gameOver(): void {
    if (this.state.gameOver) {
      return; // Already in game over state
    }
    
    this.state.gameOver = true;
    
    // Update high score
    if (this.state.score > this.state.highScore) {
      this.state.highScore = this.state.score;
    }
    
    // Stop game loop
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    
    // Draw the game over screen
    this.drawGameOver();
    
    // Trigger game over callback
    if (this.onGameOver) {
      this.onGameOver();
    }
  }
  
  private draw(): void {
    // Draw background (clouds)
    this.drawClouds();
    
    // Draw ground
    this.drawGround();
    
    // Draw dino
    this.drawDino();
    
    // Draw obstacles
    this.drawObstacles();
    
    // Draw monsters
    this.drawMonsters();
    
    // Draw weapons
    this.drawWeapons();
    
    // Draw bullets
    this.drawBullets();
    
    // Draw score
    this.drawScore();
    
    // Draw game over screen if game is over
    if (this.state.gameOver) {
      this.drawGameOver();
    }
  }
  
  private drawClouds(): void {
    // Draw all clouds
    for (const cloud of this.clouds) {
      this.ctx.drawImage(
        this.spriteSheet,
        this.cloudX, this.cloudY, this.cloudWidth, this.cloudHeight,
        cloud.x, cloud.y, cloud.width, cloud.height
      );
    }
  }
  
  private drawGround(): void {
    // Draw ground with continuous scrolling
    // First part: Main ground
    this.ctx.drawImage(
      this.spriteSheet,
      this.groundX, this.groundSpriteY, this.groundWidth, this.groundHeight,
      -this.groundOffset, this.groundY - 4, this.groundWidth, this.groundHeight
    );
    
    // Second part: Extension to make it seamless
    if (this.groundOffset > 0) {
      this.ctx.drawImage(
        this.spriteSheet,
        this.groundX, this.groundSpriteY, this.groundWidth, this.groundHeight,
        this.groundWidth - this.groundOffset, this.groundY - 4, this.groundWidth, this.groundHeight
      );
    }
  }
  
  private drawDino(): void {
    // Determine which sprite to use based on dino state
    let spriteX = this.dinoJumpingX;
    let spriteY = 0; // Default Y position for running/jumping
    let spriteWidth = this.dinoWidth;
    let spriteHeight = this.dinoHeight;
    
    if (this.dino.jumping) {
      // Use jumping sprite
      spriteX = this.dinoJumpingX;
      spriteY = 0;
      spriteWidth = this.dinoWidth;
      spriteHeight = this.dinoHeight;
    } else if (this.dino.crouching) {
      // Use dedicated crouching sprites with different Y position
      if (this.frameCount % 10 < 5) {
        spriteX = this.dinoCrouching1X;
      } else {
        spriteX = this.dinoCrouching2X;
      }
      spriteY = this.crouchingSpriteY;
      spriteWidth = this.dinoCrouchWidth;
      spriteHeight = this.dinoCrouchHeight;
    } else {
      // Use running sprite
      if (this.frameCount % 10 < 5) {
        spriteX = this.dinoRunning1X;
      } else {
        spriteX = this.dinoRunning2X;
      }
      spriteY = 0;
      spriteWidth = this.dinoWidth;
      spriteHeight = this.dinoHeight;
    }
    
    // Draw dino sprite
    this.ctx.drawImage(
      this.spriteSheet,
      spriteX, spriteY, spriteWidth, spriteHeight,
      this.dino.x, this.dino.y, this.dino.width, this.dino.height
    );
    
    // Draw weapon on dino if has weapon
    if (this.dino.hasWeapon) {
      const weaponY = this.dino.crouching ? 
        this.dino.y + this.dino.height / 4 : 
        this.dino.y + this.dino.height / 3;
      
      // Draw gun image instead of rectangle
      this.ctx.drawImage(
        this.gunImage,
        this.dino.x + this.dino.width - 30, // Adjust position as needed
        weaponY - 5, // Adjust position as needed
        30, // Width
        20  // Height
      );
    }
    
    // Debug visualization - uncomment for debugging hitbox
    // this.ctx.strokeStyle = 'red';
    // this.ctx.strokeRect(this.dino.x, this.dino.y, this.dino.width, this.dino.height);
  }
  
  private drawObstacles(): void {
    for (const obstacle of this.obstacles) {
      // Draw different sprites based on obstacle type
      if (obstacle.type === 'small') {
        // Small cactus
        this.ctx.drawImage(
          this.spriteSheet,
          446, 2, 34 * obstacle.multiple, 70,
          obstacle.x, obstacle.y, obstacle.width, obstacle.height
        );
      } else {
        // Large cactus
        this.ctx.drawImage(
          this.spriteSheet,
          652, 2, 49 * obstacle.multiple, 100,
          obstacle.x, obstacle.y, obstacle.width, obstacle.height
        );
      }
    }
  }
  
  private drawMonsters(): void {
    for (const monster of this.monsters) {
      // Determine which sprite frame to use for animation
      const frameIndex = Math.floor(this.frameCount / 10) % 2; // Change frame every 10 frames
      
      // Coordinates in the sprite sheet
      const srcX = frameIndex === 0 ? this.pterodactylWingsUpX : this.pterodactylWingsDownX;
      const srcY = this.pterodactylWingsUpY; // Same Y for both frames
      
      // Draw the correct pterodactyl frame
      this.ctx.drawImage(
        this.spriteSheet,
        srcX, srcY, 
        this.pterodactylWidth, this.pterodactylHeight,
        monster.x, monster.y, 
        this.pterodactylDisplayWidth, this.pterodactylDisplayHeight
      );
      
      // Debug visualization - uncomment for debugging hitbox
      // this.ctx.strokeStyle = 'red';
      // this.ctx.strokeRect(monster.x, monster.y, monster.width, monster.height);
    }
  }
  
  private drawWeapons(): void {
    for (const weapon of this.weapons) {
      if (weapon.visible) {
        // Draw gun image instead of blue rectangle with text
        this.ctx.drawImage(
          this.gunImage,
          weapon.x,
          weapon.y,
          weapon.width,
          weapon.height
        );
      }
    }
  }
  
  private drawBullets(): void {
    for (const bullet of this.bullets) {
      // Draw bullet
      this.ctx.fillStyle = '#FF0000';
      this.ctx.fillRect(
        bullet.x, bullet.y, bullet.width, bullet.height
      );
    }
  }
  
  private drawScore(): void {
    this.ctx.fillStyle = '#000000';
    this.ctx.font = '20px Arial';
    this.ctx.fillText(`Score: ${this.state.score}`, 20, 30);
    this.ctx.fillText(`High Score: ${this.state.highScore}`, this.canvas.width - 200, 30);
  }
  
  private drawGameOver(): void {
    if (!this.state.gameOver) return;
    
    // Clear the canvas overlay added by GameCanvas component
    
    // Draw game over text using sprite image
    this.ctx.drawImage(
      this.spriteSheet,
      this.gameOverX, this.gameOverY, this.gameOverWidth, this.gameOverHeight,
      (this.canvas.width - this.gameOverWidth) / 2, this.canvas.height / 2 - 50, 
      this.gameOverWidth, this.gameOverHeight
    );
    
    // Draw score using pixel numbers from sprite
    const scoreText = this.state.score.toString();
    const scoreWidth = scoreText.length * (this.numberWidth + 2); // 2px spacing between digits
    let digitX = (this.canvas.width - scoreWidth) / 2;
    
    for (let i = 0; i < scoreText.length; i++) {
      const digit = parseInt(scoreText[i]);
      // Calculate position in sprite sheet for this digit
      const digitSpriteX = this.numbersX + digit * this.numberWidth;
      
      this.ctx.drawImage(
        this.spriteSheet,
        digitSpriteX, this.numbersY, this.numberWidth, this.numberHeight,
        digitX, this.canvas.height / 2, this.numberWidth, this.numberHeight
      );
      
      digitX += this.numberWidth + 2; // Move to next digit position with spacing
    }
    
    // Draw refresh icon - ensuring it's fully visible
    // Increased size for better visibility and adjusted position
    const iconSize = 48;
    this.ctx.drawImage(
      this.spriteSheet,
      this.refreshIconX, this.refreshIconY, this.refreshIconWidth, this.refreshIconHeight,
      (this.canvas.width - this.refreshIconWidth) / 2, this.canvas.height / 2 + 40,
      this.refreshIconWidth, this.refreshIconHeight  // Use actual dimensions instead of fixed iconSize
    );
    
    // Reset text alignment
    this.ctx.textAlign = 'left';
  }
  
  // Helper method to draw hitboxes for debug purposes
  private drawHitbox(obj: GameObject, color: string): void {
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(obj.x, obj.y, obj.width, obj.height);
  }
  
  // Metody do sprawdzania stanu gry
  public isGameOver(): boolean {
    return this.state.gameOver;
  }
  
  public isGameStarted(): boolean {
    return this.state.gameStarted;
  }
  
  public getScore(): number {
    return this.state.score;
  }
  
  public getHighScore(): number {
    return this.state.highScore;
  }
  
  public hasWeapon(): boolean {
    return this.dino.hasWeapon;
  }
  
  public isCrouching(): boolean {
    return this.dino.crouching;
  }
  
  // Add pause/resume method
  public togglePause(): void {
    if (!this.state.gameStarted || this.state.gameOver) return;
    
    this.state.isPaused = !this.state.isPaused;
    
    // If we're unpausing, update the last frame time to avoid a big jump
    if (!this.state.isPaused) {
      this.lastFrameTime = performance.now();
    }
  }
  
  // Method to check if game is paused
  public isPaused(): boolean {
    return this.state.isPaused;
  }
  
  // Add a method to toggle debug mode
  public toggleDebugMode(): void {
    this.state.debugMode = !this.state.debugMode;
  }
} 