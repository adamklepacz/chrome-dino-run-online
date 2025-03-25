import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GameCanvas } from '@/components/dino';
import { Link } from 'react-router-dom';
import SeoContent from '@/components/SeoContent';

const DinoRun = () => {
  // SEO data for Dino Run page
  const seo = {
    title: 'Dino Run | Play Free Endless Runner Dinosaur Game Online',
    description: 'Play Dino Run online - the exciting endless runner game featuring a dinosaur racing through prehistoric landscapes. Jump, dodge, and run as far as you can!',
    keywords: ['dino run', 'dinosaur runner', 'dino runner game', 'endless runner', 't-rex running game', 'free dinosaur game', 'online runner game'],
    canonicalUrl: 'https://dinorunonline.com/dino-run',
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
      "name": "Dino Run",
      "description": "Dino Run is an exciting endless runner game where you control a dinosaur racing through prehistoric landscapes. Jump over obstacles, dodge enemies, and run as far as you can!",
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
    title: 'Dino Run - The Ultimate Dinosaur Running Adventure',
    subtitle: 'Race through prehistoric landscapes in this exciting endless runner',
    content: `Dino Run is an exhilarating endless runner game that puts you in control of a nimble dinosaur racing through ancient landscapes. This fast-paced adventure challenges you to jump over obstacles, duck under flying creatures, and run as far as possible to achieve the highest score.

Unlike the original Chrome dinosaur game, Dino Run offers enhanced graphics, smoother animations, and additional game mechanics to create a more immersive running experience. Your prehistoric hero will dash through varied environments, facing increasingly difficult challenges as your score grows.

Dino Run is perfect for quick gaming sessions or extended play. The simple controls make it accessible to players of all ages, while the progressive difficulty ensures the game remains challenging even for experienced players. Test your reflexes and timing in this addictive dinosaur running adventure!`,
    keywords: ['dino run', 'dinosaur runner', 'dino running game', 'endless runner', 't-rex run', 'prehistoric runner', 'dinosaur game online'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Dino Run - The Ultimate Dinosaur Running Game!</h1>
          <p className="page-subtitle">
            Race through prehistoric landscapes, jump over obstacles, and run as far as you can in this exciting endless runner adventure.
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
          <h2 className="text-2xl font-bold mb-4">How to Play Dino Run</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Game Controls</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>SPACE or UP ARROW:</strong> Jump over obstacles</li>
                <li><strong>DOWN ARROW:</strong> Duck under flying creatures</li>
                <li><strong>DOUBLE TAP SPACE:</strong> Double jump (special ability)</li>
                <li><strong>SHIFT:</strong> Sprint (limited use)</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Game Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Endless running gameplay with increasing difficulty</li>
                <li>Special abilities like double jump and sprint</li>
                <li>Varied environments and obstacle types</li>
                <li>High score tracking and global leaderboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">What Makes Dino Run Special?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Enhanced Gameplay</h3>
              <p>Dino Run takes the basic concept of a dinosaur runner game and enhances it with special abilities, varied environments, and smoother controls for a more engaging gaming experience.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Perfect for Any Device</h3>
              <p>Dino Run is optimized for all devices - play on your desktop with keyboard controls or on mobile with touch gestures. The game adapts perfectly to any screen size.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Similar Games You Might Enjoy</h2>
          <p className="text-muted-foreground mb-6">
            If you like Dino Run, check out these other dinosaur games on our site:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/chrome-dino" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Chrome Dino</h3>
              <p className="text-sm text-muted-foreground">The classic browser game</p>
            </Link>
            <Link to="/chromedino" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">ChromeDino</h3>
              <p className="text-sm text-muted-foreground">No-spaces version of the game</p>
            </Link>
            <Link to="/dino-game" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Dino Game</h3>
              <p className="text-sm text-muted-foreground">Classic arcade experience</p>
            </Link>
          </div>
        </div>
      </section>
      
      <SeoContent {...seoContent} />
    </MainLayout>
  );
};

export default DinoRun;
