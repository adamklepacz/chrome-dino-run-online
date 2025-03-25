import React, { useEffect, useRef, useState, useCallback } from 'react';
import { DinoGame } from './DinoGame';

const GameCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<DinoGame | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [hasWeapon, setHasWeapon] = useState(false);
  const [isCrouching, setIsCrouching] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  
  // Funkcja do synchronizacji stanu gry
  const syncGameState = useCallback(() => {
    const game = gameRef.current;
    if (!game) return;
    
    setGameStarted(game.isGameStarted());
    setGameOver(game.isGameOver());
    setScore(game.getScore());
    setHighScore(game.getHighScore());
    setHasWeapon(game.hasWeapon());
    setIsCrouching(game.isCrouching());
    setIsPaused(game.isPaused());
  }, []);
  
  // Funkcja do obsługi zdarzenia gameOver
  const handleGameOver = useCallback(() => {
    setGameOver(true);
    syncGameState();
  }, [syncGameState]);
  
  // Funkcja do obsługi schylania się
  const handleCrouch = useCallback((isCrouching: boolean) => {
    if (!gameRef.current) return;
    gameRef.current.handleCrouch(isCrouching);
  }, []);
  
  // Function to toggle debug mode
  const handleToggleDebug = useCallback(() => {
    if (!gameRef.current) return;
    gameRef.current.toggleDebugMode();
    setDebugMode(!debugMode);
  }, [debugMode]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas width and height
    canvas.width = 800;
    canvas.height = 300;
    
    // Create game instance
    const newGame = new DinoGame(canvas);
    gameRef.current = newGame;
    
    // Add custom event listener for game over
    newGame.onGameOver = handleGameOver;
    
    // Interval do aktualizacji danych UI
    const stateInterval = setInterval(syncGameState, 100);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gameRef.current) return;
      
      if (e.code === 'Space') {
        e.preventDefault();
        gameRef.current.handleJump();
      } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        e.preventDefault();
        gameRef.current.handleShoot();
      } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {
        e.preventDefault();
        handleCrouch(true);
      } else if (e.code === 'KeyP') {
        e.preventDefault();
        handleTogglePause();
      }
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      if (!gameRef.current) return;
      
      if (e.code === 'ArrowDown' || e.code === 'KeyS') {
        e.preventDefault();
        handleCrouch(false);
      }
    };
    
    // Add key event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    // Clean up
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      clearInterval(stateInterval);
      if (gameRef.current) {
        gameRef.current.stop();
      }
    };
  }, [handleGameOver, syncGameState, handleCrouch]);
  
  const handleJumpButtonClick = () => {
    if (!gameRef.current) return;
    gameRef.current.handleJump();
  };
  
  const handleShootButtonClick = () => {
    if (!gameRef.current) return;
    gameRef.current.handleShoot();
  };
  
  const handleCrouchButtonPress = () => {
    handleCrouch(true);
  };
  
  const handleCrouchButtonRelease = () => {
    handleCrouch(false);
  };
  
  const handleTogglePause = () => {
    if (!gameRef.current) return;
    gameRef.current.togglePause();
    syncGameState();
  };
  
  return (
    <div className="flex flex-col items-center">
  
      
      <div className="relative border-2 border-foreground rounded-lg overflow-hidden bg-background">
        <canvas 
          ref={canvasRef} 
          className="block"
          style={{ 
            maxWidth: '100%',
            height: 'auto'
          }}
        />
        
        {!gameStarted && !gameOver && (
          <div className="absolute inset-0 flex items-center justify-center flex-col bg-background/80">
            <h2 className="text-2xl font-bold mb-4">Press SPACE to Start</h2>
            <p className="text-muted-foreground mb-2">Jump with SPACE, Shoot with SHIFT</p>
            <p className="text-muted-foreground mb-2">Crouch with DOWN ARROW</p>
            <p className="text-xs text-muted-foreground/80 mt-2">A weapon will appear when you reach 100 points</p>
          </div>
        )}
        
        {/* Game over overlay has been removed and is now handled in DinoGame.ts */}
      </div>
      
      <div className="mt-4 grid grid-cols-4 gap-3 w-full max-w-md">
        <button 
          className="btn bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-2 rounded-lg font-medium text-lg flex items-center justify-center"
          onClick={handleJumpButtonClick}
        >
          <kbd className="bg-primary-foreground/20 px-1 py-1 rounded mr-1 text-sm">SPACE</kbd>
          {gameOver ? "Restart" : gameStarted ? "Jump" : "Start"}
        </button>
        
        <button 
          className={`btn py-3 px-2 rounded-lg font-medium text-lg flex items-center justify-center ${
            hasWeapon && !gameOver 
              ? "bg-primary text-primary-foreground hover:bg-primary/90" 
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
          onClick={handleShootButtonClick}
          disabled={!hasWeapon || gameOver || !gameStarted}
        >
          <kbd className="bg-primary-foreground/20 px-1 py-1 rounded mr-1 text-sm">SHIFT</kbd>
          Shoot
        </button>
        
        <button 
          className="btn bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-2 rounded-lg font-medium text-lg flex items-center justify-center"
          onMouseDown={handleCrouchButtonPress}
          onMouseUp={handleCrouchButtonRelease}
          onMouseLeave={handleCrouchButtonRelease}
          onTouchStart={handleCrouchButtonPress}
          onTouchEnd={handleCrouchButtonRelease}
          disabled={gameOver || !gameStarted}
        >
          <kbd className="bg-primary-foreground/20 px-1 py-1 rounded mr-1 text-sm">↓</kbd>
          Crouch
        </button>
        
        <button 
          className={`btn py-3 px-2 rounded-lg font-medium text-lg flex items-center justify-center ${
            !gameOver && gameStarted
              ? isPaused 
                ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" 
                : "bg-orange-500 text-white hover:bg-orange-600" 
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
          onClick={handleTogglePause}
          disabled={!gameStarted || gameOver}
        >
          <kbd className="bg-primary-foreground/20 px-1 py-1 rounded mr-1 text-sm">P</kbd>
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>
      
      <div className="mt-4 text-xs text-muted-foreground text-center max-w-md">
        <p className="mb-1">Controls: <kbd className="px-1 rounded bg-muted">SPACE</kbd> to jump, <kbd className="px-1 rounded bg-muted">SHIFT</kbd> to shoot, <kbd className="px-1 rounded bg-muted">↓</kbd> to crouch, <kbd className="px-1 rounded bg-muted">P</kbd> to pause</p>
        
        {gameStarted && !gameOver && score < 100 && !hasWeapon && (
          <p className="mt-2">
            Reach 100 points to get a weapon!
          </p>
        )}
        
        {isPaused && (
          <p className="mt-2 text-orange-500 font-medium">
            ⚠️ Debug: Paused
          </p>
        )}
        
        {debugMode && (
          <p className="mt-2 text-red-500 font-medium">
            🐞 Debug Mode: ON - Hitboxes visible
          </p>
        )}
        
        <button
          onClick={handleToggleDebug}
          className="mt-4 px-3 py-1 text-xs bg-muted text-muted-foreground rounded-lg hover:bg-muted/80"
        >
          {debugMode ? "Disable" : "Enable"} Debug Mode
        </button>
      </div>
    </div>
  );
};

export default GameCanvas; 