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
            <h3 className="text-lg font-medium text-foreground">DinoRunOnline</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Play the Chrome Dinosaur Game anytime, anywhere. Kill boredom and have fun with our free online games.
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
                <Link to="/dino-game" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Dino Game
                </Link>
              </li>
              <li>
                <Link to="/chrome-dino-game" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Chrome Dino
                </Link>
              </li>
              <li>
                <Link to="/t-rex-game" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  T-Rex Game
                </Link>
              </li>
              <li>
                <Link to="/free-online-games" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Free Games
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
            <h3 className="text-lg font-medium text-foreground">Game Variants</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/dino-run" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Dino Run
                </Link>
              </li>
              <li>
                <Link to="/chrome-dino-game" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Chrome Dino Game
                </Link>
              </li>
              <li>
                <Link to="/t-rex-game" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  T-Rex Game
                </Link>
              </li>
              <li>
                <Link to="/dinosaur-game" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Dinosaur Game
                </Link>
              </li>
              <li>
                <Link to="/dino-adventure" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Dino Adventure
                </Link>
              </li>
              <li>
                <Link to="/dino-jump" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Dino Jump
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-foreground">Contact</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Contact us if you have questions or suggestions.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <a href="mailto:contact@dinorunonline.com" className="hover:text-foreground transition-colors">contact@dinorunonline.com</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} DinoRunOnline.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
