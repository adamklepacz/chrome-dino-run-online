import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full py-4 px-4 border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50", className)}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-foreground flex items-center gap-2 transition-all hover:opacity-80">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-subtle"></span>
          Dino Run Online
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/dino-game" className="text-foreground/80 hover:text-foreground transition-colors font-medium text-primary">
            Dino Game
          </Link>
          <Link to="/gra-logiczna" className="text-foreground/80 hover:text-foreground transition-colors">
            Logical Game
          </Link>
          <Link to="/gra-zrecznosciowa" className="text-foreground/80 hover:text-foreground transition-colors">
            Arcade Game
          </Link>
          <Link to="/gra-strategiczna" className="text-foreground/80 hover:text-foreground transition-colors">
            Strategy Game
          </Link>
          <Link to="/faq" className="text-foreground/80 hover:text-foreground transition-colors">
            FAQ
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button className="text-foreground p-2">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
