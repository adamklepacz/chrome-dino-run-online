import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GameCanvas } from '@/components/dino';
import { Link } from 'react-router-dom';
import SeoContent from '@/components/SeoContent';

const ChromeDino = () => {
  // SEO data for ChromeDino page
  const seo = {
    title: 'ChromeDino | Free Online T-Rex Runner Game',
    description: 'Play ChromeDino online - the popular T-Rex runner game from Google Chrome. No internet connection needed to enjoy this endless runner dinosaur game!',
    keywords: ['chromedino', 'chrome dino', 't-rex runner', 'dinosaur game', 'no internet game', 'browser game', 'google dinosaur'],
    canonicalUrl: 'https://dinorunonline.com/chromedino',
    ogImage: 'https://dinorunonline.com/images/dino-game-screenshot.jpg',
    ogType: "website" as "website" | "article"
  };

  // Add structured data for rich results
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "VideoGame",
      "name": "ChromeDino",
      "description": "Play the famous ChromeDino game online for free. This is the T-Rex dinosaur game from Google Chrome that appears when you have no internet connection.",
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

  // SEO Content for the page
  const seoContent = {
    title: 'ChromeDino - The Famous T-Rex Runner Game Online',
    subtitle: 'Play the no-internet dinosaur game anytime you want',
    content: `ChromeDino is the popular name for the endless runner game featuring a T-Rex that appears in Google Chrome when you lose internet connection. Now available online with no disconnection required!

This addictive browser game has captured the hearts of millions with its simple yet challenging gameplay. Guide your pixelated dinosaur through a prehistoric landscape, jumping over cacti and dodging pterodactyls to achieve the highest score possible.

Our ChromeDino version preserves the original game's charm while making it accessible anytime, anywhere. The longer you play, the faster the game becomes, testing your reflexes and timing skills. Enjoy this classic browser game on any device - desktop, tablet, or smartphone!`,
    keywords: ['chromedino', 'chrome dinosaur', 't-rex game', 'google dino', 'browser game', 'endless runner', 'offline game', 'dinosaur game'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">ChromeDino - Play the Famous T-Rex Game Online!</h1>
          <p className="page-subtitle">
            Enjoy the popular Google Chrome dinosaur game anytime! Jump over cacti, dodge flying obstacles, and set new high scores in this addictive runner game.
          </p>
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4">
          <GameCanvas />
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">How to Play ChromeDino</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Game Controls</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>SPACE or UP ARROW:</strong> Jump over cacti and obstacles</li>
                <li><strong>DOWN ARROW:</strong> Duck under flying pterodactyls</li>
                <li><strong>SHIFT:</strong> Activate special abilities (when available)</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Game Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Authentic gameplay like the original Google Chrome game</li>
                <li>Progressive difficulty with increasing speed</li>
                <li>Day and night cycle for additional challenge</li>
                <li>Track and share your high scores with friends</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Why Play ChromeDino Online?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Play Anytime</h3>
              <p>No need to disconnect your internet or wait for connection issues. Play the famous dinosaur game whenever you want, with all the features of the original.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Works Everywhere</h3>
              <p>Our ChromeDino works on all devices and browsers - not just Google Chrome. Enjoy the game on your phone, tablet, or computer with any modern browser.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Other Game Variants to Try</h2>
          <p className="text-muted-foreground mb-6">
            If you enjoy ChromeDino, check out these other dinosaur game variants:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/chrome-dino" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Chrome Dino</h3>
              <p className="text-sm text-muted-foreground">Original T-Rex runner with dash</p>
            </Link>
            <Link to="/dino-game" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Dino Game</h3>
              <p className="text-sm text-muted-foreground">Classic arcade version</p>
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

export default ChromeDino;
