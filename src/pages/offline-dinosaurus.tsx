import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GameCanvas } from '@/components/dino';
import { Link } from 'react-router-dom';
import SeoContent from '@/components/SeoContent';

const OfflineDinosaurus = () => {
  // SEO data for Offline Dinosaurus page
  const seo = {
    title: 'Offline Dinosaurus | Play the No-Internet Dinosaur Game Online',
    description: 'Play Offline Dinosaurus online - the famous dinosaur game that appears when you have no internet. Enjoy the classic Google Chrome T-Rex runner anytime!',
    keywords: ['offline dinosaurus', 'no internet dinosaur', 'chrome dinosaur game', 'dinosaurus game', 't-rex runner', 'browser dino game', 'offline dino'],
    canonicalUrl: 'https://dinorunonline.com/offline-dinosaurus',
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
      "name": "Offline Dinosaurus",
      "description": "Play the Offline Dinosaurus game online - the famous dinosaur game that appears in Google Chrome when you have no internet connection. Jump over cacti, duck under pterodactyls, and collect weapons!",
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
    title: 'Offline Dinosaurus - The Famous No-Internet Chrome Game',
    subtitle: 'Play the beloved offline dinosaur game without losing connection',
    content: `Offline Dinosaurus is the popular name for the dinosaur game that appears in Google Chrome browsers when you lose internet connection. This pixelated game featuring a running T-Rex has become an iconic part of internet culture, entertaining millions during connectivity issues.

Our online version of Offline Dinosaurus lets you enjoy this addictive game anytime, without having to disconnect from the internet. Experience the same classic gameplay with the familiar monochrome graphics and progressive difficulty that made the original so compelling.

What many players love about our Offline Dinosaurus version is that we've maintained all the authentic features of the original game while adding some exciting enhancements. After reaching 100 points, you may find a weapon that allows you to shoot flying monsters for bonus points, adding a new dimension to this classic runner game.`,
    keywords: ['offline dinosaurus', 'no internet game', 'chrome dino', 'dinosaur runner', 'browser game', 't-rex game', 'offline game'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Offline Dinosaurus - Play the No-Internet Game Online!</h1>
          <p className="page-subtitle">
            Enjoy the famous dinosaur game that appears when your internet goes down. No connection loss required to play this iconic Chrome easter egg!
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
          <h2 className="text-2xl font-bold mb-4">How to Play Offline Dinosaurus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Game Controls</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>SPACE or UP ARROW:</strong> Jump over cacti and obstacles</li>
                <li><strong>DOWN ARROW:</strong> Duck under flying pterodactyls</li>
                <li><strong>SHIFT:</strong> Shoot (when you have a weapon)</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Game Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Classic offline dinosaur gameplay from Chrome</li>
                <li>Progressive difficulty with increasing speed</li>
                <li>Day and night cycle for visual variety</li>
                <li>Weapon system - collect a gun after 100 points</li>
                <li>Flying monsters that can be shot for 20 extra points</li>
                <li>High score tracking system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Why Play Offline Dinosaurus Online?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Available Anytime</h3>
              <p>Our version of Offline Dinosaurus is available whenever you want to play, without having to disconnect your internet or wait for connectivity issues. Enjoy this beloved game on demand with all its original charm.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Enhanced Gameplay</h3>
              <p>While maintaining the authentic feel of the original no-internet game, our Offline Dinosaurus adds exciting features like the weapon system that lets you shoot pterodactyls for bonus points after reaching 100 points in your run.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">The History of Offline Dinosaurus</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="mb-4">
              The Offline Dinosaurus game (or Chrome Dino game) was created by Google developers in 2014 as an Easter egg for the Chrome browser. The game was designed to entertain users when they couldn't access the internet, featuring a pixelated T-Rex that comes to life when you press the spacebar.
            </p>
            <p className="mb-4">
              Over the years, this simple endless runner has become one of the most played games in the world, with millions of people enjoying it during internet outages. The game's popularity has made the dinosaur character an unofficial mascot for connectivity issues.
            </p>
            <p>
              The name "Offline Dinosaurus" has become one of many affectionate nicknames for this game, alongside others like "Chrome Dino," "T-Rex Runner," and "No Internet Game." Its simple yet addictive gameplay continues to entertain players of all ages worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Offline Dinosaurus Game Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Focus on Patterns</h3>
              <p>In Offline Dinosaurus, obstacles appear in patterns. Learning to recognize these patterns helps you anticipate jumps and ducks, especially as the game speed increases at higher scores.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Weapon Strategy</h3>
              <p>When you collect a weapon after reaching 100 points, use it strategically to shoot flying pterodactyls. Each hit earns you 20 extra points, which can significantly boost your score. Press SHIFT to fire your weapon.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Similar Dinosaur Games to Explore</h2>
          <p className="text-muted-foreground mb-6">
            If you enjoy Offline Dinosaurus, check out these other dinosaur games on our site:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/t-rex-chrome" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">T-Rex Chrome</h3>
              <p className="text-sm text-muted-foreground">The classic Chrome browser game</p>
            </Link>
            <Link to="/chrome-dino" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Chrome Dino</h3>
              <p className="text-sm text-muted-foreground">Original dinosaur runner</p>
            </Link>
            <Link to="/dino-run" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Dino Run</h3>
              <p className="text-sm text-muted-foreground">Enhanced running adventure</p>
            </Link>
          </div>
        </div>
      </section>
      
      <SeoContent {...seoContent} />
    </MainLayout>
  );
};

export default OfflineDinosaurus;
