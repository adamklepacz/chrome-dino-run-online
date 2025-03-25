import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GameCanvas } from '@/components/dino';
import { Link } from 'react-router-dom';
import SeoContent from '@/components/SeoContent';

const ChromeDino = () => {
  // SEO data for Chrome Dino page
  const seo = {
    title: 'Chrome Dino Game | Play T-Rex Runner Online',
    description: 'Play the original Chrome Dino game (T-Rex Runner) online without losing internet connection. Jump over cacti, dodge birds, and set new high scores!',
    keywords: ['chrome dino', 't-rex runner', 'dinosaur game', 'no internet game', 'browser game', 'offline game'],
    canonicalUrl: 'https://dinorunonline.com/chrome-dino',
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
      "name": "Chrome Dino",
      "description": "The original Chrome Dinosaur game (T-Rex Runner) that appears when you lose internet connection. Jump over cacti, dodge birds, and set new high scores!",
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
    title: 'Chrome Dino - The Original T-Rex Runner Game',
    subtitle: 'Play the classic dinosaur game online anytime',
    content: `Chrome Dino is the original dinosaur runner game that appears in the Google Chrome browser when you lose internet connection. This addictive endless runner features a pixelated T-Rex that must jump over cacti and dodge pterodactyls in a prehistoric landscape.

Originally created as an Easter egg in Chrome, the game has become incredibly popular worldwide. Our online version lets you enjoy this addictive gameplay anytime you want, without having to disconnect from the internet.

As you progress through the game, the speed increases and challenges become more difficult. Your skills and reflexes will be put to the test as you try to beat your best score. Play Chrome Dino on any device with a browser - desktop, tablet, or smartphone!`,
    keywords: ['chrome dino', 't-rex runner', 'dinosaur game', 'no internet game', 'browser game', 'arcade game'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Chrome Dino - Play the Original T-Rex Runner Game!</h1>
          <p className="page-subtitle">
            The classic arcade game that appears when you lose internet. Jump over obstacles and set new high scores in this addictive dinosaur game!
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
          <h2 className="text-2xl font-bold mb-4">How to Play Chrome Dino</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Controls</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>SPACE or UP ARROW:</strong> Jump over obstacles</li>
                <li><strong>DOWN ARROW:</strong> Duck under flying obstacles</li>
                <li><strong>SHIFT:</strong> Use special power (when available)</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Game Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Endless runner gameplay just like the Chrome browser game</li>
                <li>Increasing speed as you gain more points</li>
                <li>Day and night cycle for added challenge</li>
                <li>High score tracking and sharing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Other Dinosaur Game Variants</h2>
          <p className="text-muted-foreground mb-6">
            If you enjoy Chrome Dino, check out these other dinosaur game variants:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/dino-game" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Dino Game</h3>
              <p className="text-sm text-muted-foreground">Classic arcade game</p>
            </Link>
            <Link to="/dino-run" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Dino Run</h3>
              <p className="text-sm text-muted-foreground">Endless runner game</p>
            </Link>
          </div>
        </div>
      </section>
      
      <SeoContent {...seoContent} />
    </MainLayout>
  );
};

export default ChromeDino;
