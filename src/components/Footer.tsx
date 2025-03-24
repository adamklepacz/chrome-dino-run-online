
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn("w-full py-8 border-t border-border/40 bg-secondary/50", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium text-foreground">GameTime</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Play our games anytime, anywhere. Kill boredom and have fun with our free online games.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-foreground">Navigation</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gra-logiczna" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Logical Game
                </Link>
              </li>
              <li>
                <Link to="/gra-zrecznosciowa" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Arcade Game
                </Link>
              </li>
              <li>
                <Link to="/gra-strategiczna" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Strategy Game
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-foreground">Games</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">
                  Logical Games
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Arcade Games
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Strategy Games
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-foreground">Contact</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Contact us if you have questions or suggestions.
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} GameTime. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
