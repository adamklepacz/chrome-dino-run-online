import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import SeoContent from '@/components/SeoContent';
import { Link } from 'react-router-dom';
import { GameCanvas } from '@/components/dino';

const Index = () => {
  const seo = {
    title: 'Chrome Dino Game Online - Free T-Rex Runner Game',
    description: 'Play the famous Chrome Dinosaur Game online anytime. No internet connection needed to enjoy this classic T-Rex runner game on DinoRunOnline!',
    keywords: ['chrome dino', 'chromedino', 'dino game', 'dino run', 'google dino', 'chrome dinosaur game', 't-rex runner', 'dinosaur game', 'chrome offline game', 'no download games'],
    canonicalUrl: 'https://dinorunonline.com',
    ogImage: 'https://dinorunonline.com/images/dino-game-screenshot.jpg',
  };

  const seoContent = {
    title: 'Chrome Dino - Play the T-Rex Runner Online',
    subtitle: 'The famous offline dinosaur game now available online anytime',
    content: `DinoRunOnline brings the classic Chrome Dino game to life, letting you play anytime - not just when your internet is down! Our version stays true to the original T-Rex runner while adding enhanced features and graphics. 

Jump over cacti, dodge pterodactyls, and set new high scores in this addictive endless runner game. The longer you play, the faster it gets, challenging your reflexes and timing.

Play Chrome Dino on any device with a web browser - no download or installation required. Works perfectly on desktop, tablet, and mobile devices.`,
    keywords: ['chrome dino', 'chromedino', 'dino game', 'dino run', 'google dino', 't-rex runner', 'chrome offline game', 'browser games', 'endless runner'],
  };

  // Add structured data for rich results
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "VideoGame",
      "name": "Chrome Dino Game",
      "description": "Play the famous Chrome Dinosaur Game online for free. Jump over cacti, dodge obstacles, and set high scores in this T-Rex running adventure!",
      "genre": "Arcade",
      "gamePlatform": "Web Browser",
      "applicationCategory": "Game",
      "operatingSystem": "Any",
      "author": {
        "@type": "Organization",
        "name": "DinoRunOnline"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Play the Chrome Dino Game Online!</h1>
          <p className="page-subtitle">Enjoy the famous T-Rex runner game with no internet connection required. Jump over cacti, dodge obstacles, and see how far you can go in this classic endless runner game.</p>
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Chrome Dino – T-Rex Runner Adventure</h2>
          <p className="text-lg text-center mb-8 text-muted-foreground">
            Help your pixelated T-Rex dodge obstacles and survive as long as possible in this classic game! Originally an Easter egg in the Chrome browser, our online version lets you play anytime, with the same addictive gameplay that's made this simple runner game a worldwide phenomenon.
          </p>
          <div className="mb-8 flex justify-center">
            <Link 
              to="/chrome-dino" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-6 rounded-lg text-lg font-medium transition-colors"
            >
              Play Chrome Dino Now →
            </Link>
          </div>
          <GameCanvas />
          <div className="mt-6 text-center">
            <Link to="/faq" className="text-primary hover:text-primary/80 transition-colors">
              Have questions? Check our FAQ →
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Popular Chrome Dino Game Variants</h2>
          <p className="text-muted-foreground mb-6">Try these different versions of the Chrome Dinosaur Game:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/chrome-dino" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Chrome Dino</h3>
              <p className="text-sm text-muted-foreground">The original T-Rex runner</p>
            </Link>
            <Link to="/dino-game" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Dino Game</h3>
              <p className="text-sm text-muted-foreground">Classic dinosaur game</p>
            </Link>
            <Link to="/dino-run" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Dino Run</h3>
              <p className="text-sm text-muted-foreground">Endless runner adventure</p>
            </Link>
          </div>
        </div>
      </section>
      
      <SeoContent {...seoContent} />
    </MainLayout>
  );
};

export default Index;
