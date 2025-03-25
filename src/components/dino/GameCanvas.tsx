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
    canvas.width = 1000;
    canvas.height = 400;
    
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
      <div className="mt-4 flex flex-col items-center w-full max-w-lg">
        <div className="grid grid-cols-3 gap-6 w-full">
          {/* Jump button */}
          <div className="flex flex-col items-center">
            <button 
              className="btn bg-primary text-primary-foreground hover:bg-primary/90 w-24 h-24 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              onClick={handleJumpButtonClick}
            >
              <div className="flex flex-col items-center">
                <span className="text-xl">{gameOver ? "🔄" : "⬆️"}</span>
                <kbd className="bg-primary-foreground/20 px-1 rounded text-xs mt-1">SPACE</kbd>
              </div>
            </button>
            <span className="text-sm mt-2">{gameOver ? "Restart" : gameStarted ? "Jump" : "Start"}</span>
          </div>
          
          {/* Crouch button */}
          <div className="flex flex-col items-center">
            <button 
              className="btn bg-primary text-primary-foreground hover:bg-primary/90 w-24 h-24 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              onMouseDown={handleCrouchButtonPress}
              onMouseUp={handleCrouchButtonRelease}
              onMouseLeave={handleCrouchButtonRelease}
              onTouchStart={handleCrouchButtonPress}
              onTouchEnd={handleCrouchButtonRelease}
              disabled={gameOver || !gameStarted}
            >
              <div className="flex flex-col items-center">
                <span className="text-xl">⬇️</span>
                <kbd className="bg-primary-foreground/20 px-[2px] rounded text-xs mt-1">ARROW DOWN</kbd>
              </div>
            </button>
            <span className="text-sm mt-2">Crouch</span>
          </div>
          
          {/* Shoot button */}
          <div className="flex flex-col items-center">
            <button 
              className={`btn w-24 h-24 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow ${
                hasWeapon && !gameOver 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
              onClick={handleShootButtonClick}
              disabled={!hasWeapon || gameOver || !gameStarted}
            >
              <div className="flex flex-col items-center">
                <span className="text-xl">🔫</span>
                <kbd className="bg-primary-foreground/20 px-1 rounded text-xs mt-1">SHIFT</kbd>
              </div>
            </button>
            <span className="text-sm mt-2">Shoot</span>
          </div>
        </div>
        
        <div className="mt-6 text-xs text-muted-foreground text-center max-w-md">
          <p className="mb-1">Controls: <kbd className="px-1 rounded bg-muted">SPACE</kbd> to jump, <kbd className="px-1 rounded bg-muted">SHIFT</kbd> to shoot, <kbd className="px-1 rounded bg-muted">↓</kbd> to crouch.</p>
          
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
    </div>
  );
};

export default GameCanvas; 