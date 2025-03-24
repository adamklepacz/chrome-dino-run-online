
import React from 'react';
import { cn } from '@/lib/utils';

interface GamePlaceholderProps {
  className?: string;
  title?: string;
}

const GamePlaceholder: React.FC<GamePlaceholderProps> = ({ 
  className,
  title = "Game Loading..."
}) => {
  return (
    <div className={cn("game-placeholder flex flex-col items-center justify-center p-8", className)}>
      <div className="animate-fade-in flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin mb-4"></div>
        <h2 className="text-xl font-medium text-foreground">{title}</h2>
        <p className="text-muted-foreground text-center mt-2">
          Ta sekcja będzie zawierała grę. Na ten moment jest to tylko placeholder.
        </p>
      </div>
    </div>
  );
};

export default GamePlaceholder;
