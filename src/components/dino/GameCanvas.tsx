import React, { useEffect, useRef, useState, useCallback } from 'react';
import { DinoGame } from './DinoGame';
import RotationMessage from './RotationMessage';
import ScrollLockButton from '@/components/ScrollLockButton';

interface GameCanvasProps {
  onGameAction?: (action: string, data?: Record<string, unknown>) => void;
}

const GameCanvas: React.FC<GameCanvasProps> = ({ onGameAction }) => {
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
  const [turboActive, setTurboActive] = useState(false);
  const [turboCooldown, setTurboCooldown] = useState(false);
  const [turboTimeLeft, setTurboTimeLeft] = useState(0);
  
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
    setTurboActive(game.isTurboActive());
    setTurboCooldown(game.isTurboCooldown());
    setTurboTimeLeft(game.getTurboTimeLeft());
  }, []);
  
  // Funkcja do obsługi zdarzenia gameOver
  const handleGameOver = useCallback(() => {
    setGameOver(true);
    syncGameState();
    
    // Track game over event
    if (onGameAction && gameRef.current) {
      onGameAction('over', {
        score: gameRef.current.getScore(),
        high_score: gameRef.current.getHighScore()
      });
    }
  }, [syncGameState, onGameAction]);
  
  // Track game start
  const trackGameStart = useCallback(() => {
    if (onGameAction && gameRef.current) {
      onGameAction('start');
    }
  }, [onGameAction]);
  
  // Funkcja do obsługi schylania się
  const handleCrouch = useCallback((isCrouching: boolean) => {
    if (!gameRef.current) return;
    gameRef.current.handleCrouch(isCrouching);
    
    // Track crouch action
    if (onGameAction && isCrouching) {
      onGameAction('crouch');
    }
  }, [onGameAction]);
  
  // Function to toggle debug mode
  const handleToggleDebug = useCallback(() => {
    if (!gameRef.current) return;
    gameRef.current.toggleDebugMode();
    setDebugMode(!debugMode);
  }, [debugMode]);
  
  // Function to activate TURBO mode
  const handleActivateTurbo = useCallback(() => {
    if (!gameRef.current) return;
    gameRef.current.activateTurbo();
    
    // Track turbo activation
    if (onGameAction) {
      onGameAction('turbo_activated');
    }
  }, [onGameAction]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas width and height
    canvas.width = 1000;
    canvas.height = 380;
    
    // Create game instance
    const newGame = new DinoGame(canvas);
    gameRef.current = newGame;
    
    // Add custom event listener for game over
    newGame.onGameOver = handleGameOver;
    
    // Hook into game start
    const originalStartMethod = newGame.start.bind(newGame);
    newGame.start = () => {
      originalStartMethod();
      trackGameStart();
    };
    
    // Initialize the game loop to show the dinosaur without starting gameplay
    newGame.stop(); // Stop any existing loops
    
    // Animation function for initial state
    let animFrameId: number;
    
    const renderLoop = () => {
      if (gameRef.current && !gameRef.current.isGameStarted() && !gameRef.current.isGameOver()) {
        gameRef.current.drawInitialState();
      }
      animFrameId = requestAnimationFrame(renderLoop);
    };
    
    // Start the render loop
    animFrameId = requestAnimationFrame(renderLoop);
    
    // Interval do aktualizacji danych UI
    const stateInterval = setInterval(syncGameState, 100);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gameRef.current) return;
      
      if (e.code === 'Space') {
        e.preventDefault();
        gameRef.current.handleJump();
      } else if (e.code === 'KeyZ') {
        e.preventDefault();
        gameRef.current.handleShoot();
      } else if (e.code === 'KeyC') {
        e.preventDefault();
        handleCrouch(true);
      } else if (e.code === 'KeyP') {
        e.preventDefault();
        handleTogglePause();
      } else if (e.code === 'KeyX') {
        e.preventDefault();
        handleActivateTurbo();
      }
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      if (!gameRef.current) return;
      
      if (e.code === 'KeyC') {
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
      cancelAnimationFrame(animFrameId);
      if (gameRef.current) {
        gameRef.current.stop();
      }
    };
  }, [handleGameOver, syncGameState, handleCrouch, handleActivateTurbo, trackGameStart]);
  
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
      <RotationMessage />
      
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
          <div className="absolute inset-0 flex items-center justify-center flex-col bg-transparent">
            <h2 className="text-2xl font-bold mb-4 bg-background/70 px-6 py-3 rounded-lg">Press SPACE to Start</h2>
          </div>
        )}
        
        {/* Game over overlay has been removed and is now handled in DinoGame.ts */}
      </div>
      <div className="mt-4 flex flex-col items-center w-full max-w-lg">
        <div className="grid grid-cols-5 gap-4 w-full">
          {/* Jump button */}
          <div className="flex flex-col items-center">
            <button 
              className="btn bg-primary text-primary-foreground hover:bg-primary/90 w-20 h-20 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
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
              className="btn bg-primary text-primary-foreground hover:bg-primary/90 w-20 h-20 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              onMouseDown={handleCrouchButtonPress}
              onMouseUp={handleCrouchButtonRelease}
              onMouseLeave={handleCrouchButtonRelease}
              onTouchStart={handleCrouchButtonPress}
              onTouchEnd={handleCrouchButtonRelease}
              disabled={gameOver || !gameStarted}
            >
              <div className="flex flex-col items-center">
                <span className="text-xl">⬇️</span>
                <kbd className="bg-primary-foreground/20 px-[2px] rounded text-xs mt-1">C</kbd>
              </div>
            </button>
            <span className="text-sm mt-2">Crouch</span>
          </div>
          
          {/* Shoot button */}
          <div className="flex flex-col items-center">
            <button 
              className={`btn w-20 h-20 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow ${
                hasWeapon && !gameOver 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
              onClick={handleShootButtonClick}
              disabled={!hasWeapon || gameOver || !gameStarted}
            >
              <div className="flex flex-col items-center">
                <span className="text-xl">🔫</span>
                <kbd className="bg-primary-foreground/20 px-1 rounded text-xs mt-1">Z</kbd>
              </div>
            </button>
            <span className="text-sm mt-2">Shoot</span>
          </div>
          
          {/* TURBO button */}
          <div className="flex flex-col items-center">
            <button 
              className={`btn w-20 h-20 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow ${
                !turboActive && !turboCooldown && gameStarted && !gameOver
                  ? "bg-orange-500 text-white hover:bg-orange-600" 
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
              onClick={handleActivateTurbo}
              disabled={turboActive || turboCooldown || !gameStarted || gameOver}
            >
              <div className="flex flex-col items-center">
                <span className="text-xl">🔥</span>
                <kbd className="bg-primary-foreground/20 px-1 rounded text-xs mt-1">X</kbd>
              </div>
            </button>
            <span className="text-sm mt-2">
              {turboActive 
                ? `TURBO ${Math.ceil(turboTimeLeft / 1000)}s` 
                : turboCooldown 
                  ? `Cooldown ${Math.ceil(turboTimeLeft / 1000)}s` 
                  : "TURBO"}
            </span>
          </div>
          
          {/* Scroll Lock button - only visible on mobile */}
          <div className="flex flex-col items-center lg:hidden">
            <ScrollLockButton disabled={!gameStarted && gameOver} />
          </div>
        </div>
        
        <div className="mt-6 text-xs text-muted-foreground text-center max-w-md">
          <p className="mb-1">Controls: <kbd className="px-1 rounded bg-muted">SPACE</kbd> to jump, <kbd className="px-1 rounded bg-muted">Z</kbd> to shoot, <kbd className="px-1 rounded bg-muted">C</kbd> to crouch, <kbd className="px-1 rounded bg-muted">X</kbd> for TURBO, <kbd className="px-1 rounded bg-muted md:hidden">L</kbd> <span className="md:hidden">to lock scroll</span>.</p>
          
          {gameStarted && !gameOver && score < 100 && !hasWeapon && (
            <p className="mt-2">
              Reach 100 points to get a weapon!
            </p>
          )}
          
          {turboActive && (
            <p className="mt-2 text-orange-500 font-medium">
              🔥 TURBO Mode: Active for {Math.ceil(turboTimeLeft / 1000)}s
            </p>
          )}
          
          {turboCooldown && (
            <p className="mt-2 text-gray-500 font-medium">
              ⏱️ TURBO Cooldown: {Math.ceil(turboTimeLeft / 1000)}s
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