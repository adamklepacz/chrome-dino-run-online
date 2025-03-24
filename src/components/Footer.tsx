
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
              Graj w nasze gry w dowolnym miejscu i czasie. Zabij nudę i spędź czas w przyjemny sposób.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-foreground">Nawigacja</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/gra-logiczna" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Gra Logiczna
                </Link>
              </li>
              <li>
                <Link to="/gra-zrecznosciowa" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Gra Zręcznościowa
                </Link>
              </li>
              <li>
                <Link to="/gra-strategiczna" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Gra Strategiczna
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-foreground">Gry</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">
                  Gry Logiczne
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Gry Zręcznościowe
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Gry Strategiczne
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-foreground">Kontakt</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Skontaktuj się z nami, jeśli masz pytania lub sugestie.
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} GameTime. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
