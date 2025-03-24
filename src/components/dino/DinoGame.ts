// Game constants
const GROUND_HEIGHT = 20;
const JUMP_VELOCITY = -15;
const GRAVITY = 0.6;
const INITIAL_GAME_SPEED = 7;
const MAX_GAME_SPEED = 17;
const SCORE_INCREMENT = 1;
const SCORE_INTERVAL = 6; 
const WEAPON_SCORE_THRESHOLD = 400; // Score needed to get a weapon
const MONSTER_SCORE = 20; // Extra points for shooting a monster

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
}

interface Obstacle extends GameObject {
  type: 'small' | 'large';
  multiple: number; // For clustered obstacles
}

interface Monster extends GameObject {
  speed: number;
}

interface Weapon extends GameObject {
  visible: boolean;
}

interface Bullet extends GameObject {
  speed: number;
}

interface GameState {
  score: number;
  highScore: number;
  gameSpeed: number;
  gameOver: boolean;
  gameStarted: boolean;
}

export class DinoGame {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private spriteSheet: HTMLImageElement;
  private groundY: number;
  private animationId: number | null = null;
  private frameCount: number = 0;
  private lastFrameTime: number = 0;
  
  // Callback for game over event
  public onGameOver: () => void = () => {};
  
  // Game objects
  private dino: Dino;
  private obstacles: Obstacle[] = [];
  private monsters: Monster[] = [];
  private weapons: Weapon[] = [];
  private bullets: Bullet[] = [];

  // Game state
  private state: GameState = {
    score: 0,
    highScore: 0,
    gameSpeed: 0,
    gameOver: false,
    gameStarted: false
  };
  
  // Sprites positions
  private dinoRunning1X = 1514;
  private dinoRunning2X = 1602;
  private dinoJumpingX = 1338;
  private dinoWidth = 88;
  private dinoHeight = 94;
  
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
      y: this.groundY - 94, // Dino height
      width: 88,
      height: 94,
      velocityY: 0,
      jumping: false,
      hasWeapon: false
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
      gameStarted: true
    };
    
    // Reset game objects
    this.obstacles = [];
    this.monsters = [];
    this.weapons = [];
    this.bullets = [];
    
    // Reset dino
    this.dino.y = this.groundY - this.dino.height;
    this.dino.velocityY = 0;
    this.dino.jumping = false;
    this.dino.hasWeapon = false;
    
    // Start game loop
    this.lastFrameTime = performance.now();
    this.frameCount = 0;
    this.gameLoop(this.lastFrameTime);
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
    
    // If dino is not jumping, make it jump
    if (!this.dino.jumping) {
      this.dino.velocityY = JUMP_VELOCITY;
      this.dino.jumping = true;
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
    
    // Update game state
    this.update(deltaTime);
    
    // Draw game
    this.draw();
    
    // Continue loop if game is not over
    if (!this.state.gameOver) {
      this.animationId = requestAnimationFrame(this.gameLoop.bind(this));
    }
  }
  
  private update(deltaTime: number): void {
    if (!this.state.gameStarted || this.state.gameOver) return;
    
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
    
    // Update dino position
    this.updateDino();
    
    // Generate obstacles and monsters
    this.generateObstacles();
    this.generateMonsters();
    
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
    
    // Check collisions
    this.checkCollisions();
  }
  
  private updateDino(): void {
    // Apply gravity to dino
    this.dino.velocityY += GRAVITY;
    this.dino.y += this.dino.velocityY;
    
    // Check if dino is on ground
    if (this.dino.y >= this.groundY - this.dino.height) {
      this.dino.y = this.groundY - this.dino.height;
      this.dino.velocityY = 0;
      this.dino.jumping = false;
    }
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
        width: 93,
        height: 69,
        speed: this.state.gameSpeed * 0.8
      });
    }
  }
  
  private generateWeapon(): void {
    this.weapons.push({
      x: this.canvas.width,
      y: this.groundY - 60, // Position above ground
      width: 45,
      height: 30,
      visible: true
    });
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
    // Check collision with obstacles
    for (const obstacle of this.obstacles) {
      if (this.isCollision(this.dino, obstacle)) {
        this.gameOver();
        return;
      }
    }
    
    // Check collision with monsters
    for (let i = 0; i < this.monsters.length; i++) {
      const monster = this.monsters[i];
      
      // Check collision with dino
      if (this.isCollision(this.dino, monster)) {
        this.gameOver();
        return;
      }
      
      // Check collision with bullets
      for (let j = 0; j < this.bullets.length; j++) {
        const bullet = this.bullets[j];
        
        if (this.isCollision(bullet, monster)) {
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
      
      if (weapon.visible && this.isCollision(this.dino, weapon)) {
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
    this.state.gameOver = true;
    
    // Update high score
    if (this.state.score > this.state.highScore) {
      this.state.highScore = this.state.score;
    }
    
    // Call the gameOver callback
    this.onGameOver();
    
    // Draw game over screen
    this.drawGameOver();
  }
  
  private draw(): void {
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
  
  private drawGround(): void {
    const groundY = this.groundY;
    
    // Draw ground line
    this.ctx.beginPath();
    this.ctx.moveTo(0, groundY);
    this.ctx.lineTo(this.canvas.width, groundY);
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = '#000000';
    this.ctx.stroke();
  }
  
  private drawDino(): void {
    // Determine which sprite to use based on dino state
    let spriteX = this.dinoJumpingX;
    
    if (!this.dino.jumping) {
      // Alternate running frames every few frames for animation
      if (this.frameCount % 10 < 5) {
        spriteX = this.dinoRunning1X;
      } else {
        spriteX = this.dinoRunning2X;
      }
    }
    
    // Draw dino sprite
    this.ctx.drawImage(
      this.spriteSheet,
      spriteX, 0, this.dinoWidth, this.dinoHeight,
      this.dino.x, this.dino.y, this.dino.width, this.dino.height
    );
    
    // Draw weapon on dino if has weapon
    if (this.dino.hasWeapon) {
      this.ctx.fillStyle = '#000000';
      this.ctx.fillRect(
        this.dino.x + this.dino.width - 15,
        this.dino.y + this.dino.height / 3,
        20,
        10
      );
    }
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
      // Draw monster sprite
      this.ctx.drawImage(
        this.spriteSheet,
        134, 2, 93, 69,
        monster.x, monster.y, monster.width, monster.height
      );
    }
  }
  
  private drawWeapons(): void {
    for (const weapon of this.weapons) {
      if (weapon.visible) {
        // Draw weapon sprite
        this.ctx.fillStyle = '#0000FF';
        this.ctx.fillRect(
          weapon.x, weapon.y, weapon.width, weapon.height
        );
        
        // Draw gun text
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = '16px Arial';
        this.ctx.fillText('GUN', weapon.x + 5, weapon.y + 20);
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
    // Draw semi-transparent overlay
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw game over text
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = '36px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('GAME OVER', this.canvas.width / 2, this.canvas.height / 2 - 40);
    
    // Draw score
    this.ctx.font = '24px Arial';
    this.ctx.fillText(`Score: ${this.state.score}`, this.canvas.width / 2, this.canvas.height / 2);
    
    // Draw restart instructions
    this.ctx.font = '20px Arial';
    this.ctx.fillText('Press SPACE to restart', this.canvas.width / 2, this.canvas.height / 2 + 40);
    
    // Reset text alignment
    this.ctx.textAlign = 'left';
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
} 