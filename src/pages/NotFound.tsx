import React from 'react';
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
    title: 'Page Not Found | DinoRunOnline',
    description: 'The page you are looking for could not be found. But don\'t worry, you can still play our Chrome Dino Game and other variants!',
    keywords: ['404', 'page not found', 'chrome dino game', 'dino run', 'dinosaur game'],
    canonicalUrl: 'https://dinorunonline.com/404',
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">404 - Page Not Found</h1>
          <p className="page-subtitle">
            Oops! The page you are looking for seems to have run away like a dinosaur from a meteor.
          </p>
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-lg mb-8 text-muted-foreground">
            But don't worry, you can still play our Chrome Dino Game and other exciting variants! 
            Choose one of the games below to start playing:
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            <Link to="/chrome-dino" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold">Chrome Dino</h3>
              <p className="text-sm text-muted-foreground">Original T-Rex game</p>
            </Link>
            <Link to="/chromedino" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold">ChromeDino</h3>
              <p className="text-sm text-muted-foreground">Alternative version</p>
            </Link>
            <Link to="/dino-game" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold">Dino Game</h3>
              <p className="text-sm text-muted-foreground">Classic dinosaur game</p>
            </Link>
            <Link to="/dino-run" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold">Dino Run</h3>
              <p className="text-sm text-muted-foreground">Endless runner version</p>
            </Link>
            <Link to="/google-dino" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold">Google Dino</h3>
              <p className="text-sm text-muted-foreground">Chrome browser game</p>
            </Link>
            <Link to="/run-dino-run" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold">Run Dino Run</h3>
              <p className="text-sm text-muted-foreground">Extended runner game</p>
            </Link>
            <Link to="/t-rex-chrome" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold">T-Rex Chrome</h3>
              <p className="text-sm text-muted-foreground">Chrome browser game</p>
            </Link>
            <Link to="/chrome-dino-game" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold">Chrome Dino Game</h3>
              <p className="text-sm text-muted-foreground">Full game experience</p>
            </Link>
          </div>
          
          <h2 className="text-xl font-bold mb-4">Game Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            <Link to="/free-online-game" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold">Free Online Game</h3>
              <p className="text-sm text-muted-foreground">No download required</p>
            </Link>
            <Link to="/simple-web-game" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold">Simple Web Game</h3>
              <p className="text-sm text-muted-foreground">Easy to play</p>
            </Link>
            <Link to="/arcade-games" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold">Arcade Games</h3>
              <p className="text-sm text-muted-foreground">Test your reflexes</p>
            </Link>
          </div>
          
          <div className="mt-8">
            <Link to="/" className="bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-6 rounded-lg text-lg font-medium transition-colors">
              Go to Homepage
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default NotFound;
