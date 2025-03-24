import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from '@/layouts/MainLayout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const seo = {
    title: '404 - Page Not Found',
    description: 'Oops! The page you are looking for cannot be found. Play the Chrome Dino Game while you are here!',
    canonicalUrl: 'https://dinorunonline.com/404',
  };

  return (
    <MainLayout seo={seo}>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-6xl font-bold mb-6">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Oops! The page you are looking for cannot be found.</p>
          <p className="mb-8 text-muted-foreground">But since you're here, why not play a round of the Chrome Dino Game?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-6 rounded-lg font-medium transition-colors">
              Return to Home
            </Link>
            <Link to="/dino-game" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 px-6 rounded-lg font-medium transition-colors">
              Play Dino Game
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
