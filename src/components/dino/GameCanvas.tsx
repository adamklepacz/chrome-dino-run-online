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
  
  // Funkcja do synchronizacji stanu gry
  const syncGameState = useCallback(() => {
    const game = gameRef.current;
    if (!game) return;
    
    setGameStarted(game.isGameStarted());
    setGameOver(game.isGameOver());
    setScore(game.getScore());
    setHighScore(game.getHighScore());
    setHasWeapon(game.hasWeapon());
  }, []);
  
  // Funkcja do obsługi zdarzenia gameOver
  const handleGameOver = useCallback(() => {
    setGameOver(true);
    syncGameState();
  }, [syncGameState]);
  
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
      }
    };
    
    // Add key event listeners
    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(stateInterval);
      if (gameRef.current) {
        gameRef.current.stop();
      }
    };
  }, [handleGameOver, syncGameState]);
  
  const handleJumpButtonClick = () => {
    if (!gameRef.current) return;
    gameRef.current.handleJump();
  };
  
  const handleShootButtonClick = () => {
    if (!gameRef.current) return;
    gameRef.current.handleShoot();
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
            <p className="text-xs text-muted-foreground/80 mt-2">A weapon will appear when you reach 400 points</p>
          </div>
        )}
        
        {gameOver && (
          <div className="absolute inset-0 flex items-center justify-center flex-col bg-background/80">
            <h2 className="text-2xl font-bold mb-4">Game Over</h2>
            <p className="text-lg mb-2">Score: {score}</p>
            <p className="text-muted-foreground mb-4">Press SPACE to restart</p>
            <button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-lg"
              onClick={handleJumpButtonClick}
            >
              Restart Game
            </button>
          </div>
        )}
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4 w-full max-w-md">
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
      </div>
      
      {gameStarted && !gameOver && score < 400 && !hasWeapon && (
        <div className="mt-2 text-xs text-muted-foreground">
          Reach 400 points to get a weapon!
        </div>
      )}
    </div>
  );
};

export default GameCanvas; 