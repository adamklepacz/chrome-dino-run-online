import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GameCanvas } from '@/components/dino';
import { Link } from 'react-router-dom';
import SeoContent from '@/components/SeoContent';

const ChromeDinoGame = () => {
  // SEO data for Chrome Dino Game page
  const seo = {
    title: 'Chrome Dino Game | Play the Official Google T-Rex Runner Online',
    description: 'Play Chrome Dino Game online - the iconic T-Rex runner from Google Chrome that appears during internet outages. Jump over cacti, duck under pterodactyls and collect weapons!',
    keywords: ['chrome dino game', 'chrome dinosaur game', 'google dino game', 't-rex runner', 'no internet dinosaur', 'chrome offline game', 'browser dino game'],
    canonicalUrl: 'https://dinorunonline.com/chrome-dino-game',
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
      "name": "Chrome Dino Game",
      "description": "The Chrome Dino Game is the famous dinosaur runner from Google Chrome that appears when you lose internet connection. Jump over cacti, duck under pterodactyls, and collect weapons to shoot monsters!",
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
    title: 'Chrome Dino Game - The Iconic Google Chrome Dinosaur Runner',
    subtitle: 'Play the famous offline browser game without losing connection',
    content: `The Chrome Dino Game is one of the most played video games in the world, hidden as an Easter egg in Google's Chrome browser. This simple endless runner featuring a pixelated T-Rex appears whenever you try to visit a website without an internet connection, providing entertainment during connectivity issues.

Our online version of the Chrome Dino Game lets you enjoy this addictive runner anytime, without having to disconnect from the internet. Experience the same classic gameplay that has made this hidden gem a global phenomenon, with the familiar monochrome graphics and progressively increasing difficulty.

What makes our Chrome Dino Game special is that we've faithfully recreated all the original features while adding some exciting enhancements. After reaching 100 points, you may find a weapon that allows you to shoot flying monsters for extra points, adding a new dimension to the classic gameplay experience.`,
    keywords: ['chrome dino game', 'google dinosaur game', 't-rex runner', 'no internet game', 'chrome offline game', 'browser dino game', 'endless runner'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Chrome Dino Game - Play the Famous T-Rex Runner Online!</h1>
          <p className="page-subtitle">
            Enjoy Google's iconic dinosaur game that appears during internet outages. No connection loss required to play this classic Chrome browser game!
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
          <h2 className="text-2xl font-bold mb-4">How to Play Chrome Dino Game</h2>
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
                <li>Authentic Chrome dinosaur game experience</li>
                <li>Increasing difficulty and speed as you progress</li>
                <li>Day-night cycle for added visual variety</li>
                <li>Weapon system - collect a gun after reaching 100 points</li>
                <li>Flying monsters that can be shot for 20 extra points</li>
                <li>High score tracking to challenge yourself</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Chrome Dino Game Obstacles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Cacti Obstacles</h3>
              <p>The Chrome Dino Game features different types of cacti obstacles. Small cacti require a standard jump to clear, while clusters of large cacti present a greater challenge, requiring perfectly timed jumps. As your score increases, these obstacles appear more frequently.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Flying Pterodactyls</h3>
              <p>After you reach a certain score in the Chrome Dino Game, flying pterodactyls begin to appear. These aerial obstacles fly at different heights, requiring you to either jump over them or duck under them depending on their position. They add an extra layer of challenge to the game.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Chrome Dino Game Secrets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Weapon System</h3>
              <p>A secret feature of our Chrome Dino Game is the weapon system. After reaching 100 points, a gun may appear that you can collect by running into it. With this weapon, you can press SHIFT to shoot at flying monsters, earning 20 extra points for each successful hit.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Day-Night Cycle</h3>
              <p>As you progress through the Chrome Dino Game, you'll notice the background changing from day to night and back again. This visual change adds variety to your gameplay experience and slightly increases the difficulty as obstacles can be harder to spot in the night phase.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Chrome Dino Game Tips & Tricks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Master the Jump</h3>
              <p>In Chrome Dino Game, the key to achieving high scores is perfecting your jump timing. Don't jump too early or too late - wait until obstacles are at the right distance. Remember that you can't change your trajectory once you're in the air.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Prioritize Targets</h3>
              <p>When you have a weapon in Chrome Dino Game, be strategic about which flying monsters you shoot. Prioritize those that are most difficult to avoid by jumping or ducking. Each successful hit earns 20 extra points, which can significantly improve your score.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Other Dinosaur Games to Try</h2>
          <p className="text-muted-foreground mb-6">
            If you enjoy Chrome Dino Game, check out these other dinosaur games on our site:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/offline-dinosaurus" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Offline Dinosaurus</h3>
              <p className="text-sm text-muted-foreground">The no-internet dinosaur game</p>
            </Link>
            <Link to="/t-rex-chrome" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">T-Rex Chrome</h3>
              <p className="text-sm text-muted-foreground">Classic T-Rex runner</p>
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

export default ChromeDinoGame;
