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
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full max-w-md mb-2">
        <div className="text-lg font-medium">Score: {score}</div>
        <div className="text-lg font-medium">High Score: {highScore}</div>
      </div>
      
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
            <p className="text-xs text-muted-foreground/80 mt-2">A weapon will appear when you reach 400 points</p>
          </div>
        )}
        
        {/* Game over overlay has been removed and is now handled in DinoGame.ts */}
      </div>
      
      <div className="mt-4 grid grid-cols-3 gap-4 w-full max-w-md">
        <button 
          className="btn bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-4 rounded-lg font-medium text-lg flex items-center justify-center"
          onClick={handleJumpButtonClick}
        >
          <kbd className="bg-primary-foreground/20 px-2 py-1 rounded mr-2 text-sm">SPACE</kbd>
          {gameOver ? "Restart" : gameStarted ? "Jump" : "Start"}
        </button>
        
        <button 
          className={`btn py-3 px-4 rounded-lg font-medium text-lg flex items-center justify-center ${
            hasWeapon && !gameOver 
              ? "bg-primary text-primary-foreground hover:bg-primary/90" 
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
          onClick={handleShootButtonClick}
          disabled={!hasWeapon || gameOver || !gameStarted}
        >
          <kbd className="bg-primary-foreground/20 px-2 py-1 rounded mr-2 text-sm">SHIFT</kbd>
          Shoot
        </button>
        
        <button 
          className="btn bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-4 rounded-lg font-medium text-lg flex items-center justify-center"
          onMouseDown={handleCrouchButtonPress}
          onMouseUp={handleCrouchButtonRelease}
          onMouseLeave={handleCrouchButtonRelease}
          onTouchStart={handleCrouchButtonPress}
          onTouchEnd={handleCrouchButtonRelease}
          disabled={gameOver || !gameStarted}
        >
          <kbd className="bg-primary-foreground/20 px-2 py-1 rounded mr-2 text-sm">↓</kbd>
          Crouch
        </button>
      </div>
      
      <div className="mt-4 text-xs text-muted-foreground text-center max-w-md">
        <p className="mb-1">Controls: <kbd className="px-1 rounded bg-muted">SPACE</kbd> to jump, <kbd className="px-1 rounded bg-muted">SHIFT</kbd> to shoot, <kbd className="px-1 rounded bg-muted">↓</kbd> to crouch</p>
        
        {gameStarted && !gameOver && score < 400 && !hasWeapon && (
          <p className="mt-2">
            Reach 400 points to get a weapon!
          </p>
        )}
      </div>
    </div>
  );
};

export default GameCanvas; 