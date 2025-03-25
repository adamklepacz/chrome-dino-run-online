import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GameCanvas } from '@/components/dino';
import { Link } from 'react-router-dom';
import SeoContent from '@/components/SeoContent';

const RunDinoRun = () => {
  // SEO data for Run Dino Run page
  const seo = {
    title: 'Run Dino Run | Endless Runner Dinosaur Game Online',
    description: 'Play Run Dino Run online - an action-packed endless runner game where your dinosaur races through prehistoric landscapes. Run, jump, and dodge obstacles!',
    keywords: ['run dino run', 'dinosaur runner', 'dino running game', 'endless running game', 'prehistoric runner', 'free dinosaur game', 'online dino game'],
    canonicalUrl: 'https://dinorunonline.com/run-dino-run',
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
      "name": "Run Dino Run",
      "description": "Run Dino Run is an action-packed endless runner game where you control a speedy dinosaur racing through prehistoric landscapes. Run as fast as you can, jump over obstacles, and dodge enemies to set new records!",
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
    title: 'Run Dino Run - The Ultimate Prehistoric Running Adventure',
    subtitle: 'Race through ancient landscapes in this high-speed dinosaur runner',
    content: `Run Dino Run is an exciting endless runner game that challenges you to guide your dinosaur through prehistoric landscapes filled with hazards and obstacles. Feel the rush as your dinosaur runs at increasing speed, jumping over cacti, ducking under flying creatures, and dodging other dangers.

Based on the classic Chrome dinosaur game concept, Run Dino Run offers a seamless gaming experience with the same addictive gameplay that has captivated millions. Your goal is simple - run as far as you can while avoiding all obstacles in your path.

Run Dino Run features progressive difficulty - the longer you run, the faster the game becomes, challenging even the most skilled players. With simple controls and engaging gameplay, this dinosaur running game is perfect for quick gaming sessions or extended play. How far can you run?`,
    keywords: ['run dino run', 'dinosaur runner', 'dino sprint game', 'endless running', 'prehistoric runner', 'running dinosaur game', 'speed runner game'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Run Dino Run - The Ultimate Dinosaur Running Game!</h1>
          <p className="page-subtitle">
            Sprint through prehistoric landscapes, leap over obstacles, and run as far as you can in this exhilarating endless runner adventure.
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
          <h2 className="text-2xl font-bold mb-4">How to Play Run Dino Run</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Game Controls</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>SPACE or UP ARROW:</strong> Jump over obstacles</li>
                <li><strong>DOWN ARROW:</strong> Duck under flying obstacles</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Game Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Classic endless running gameplay</li>
                <li>Increasing speed as you progress</li>
                <li>Day and night cycle for added challenge</li>
                <li>High score tracking to monitor your progress</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Why Run Dino Run is Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Focused Running Mechanics</h3>
              <p>Run Dino Run emphasizes the running experience with smooth movement and precise controls. Experience the thrill of guiding your dinosaur through challenging terrain at increasing speeds.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Challenging Progression</h3>
              <p>The further you run, the more challenging the game becomes. Test your reflexes and timing skills as obstacles appear more frequently and your dinosaur runs faster and faster.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Running Tips for Beginners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Master Your Timing</h3>
              <p>Success in Run Dino Run depends on precise timing. Learn to anticipate obstacles and time your jumps perfectly to maintain your running momentum throughout your adventure.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Stay Focused</h3>
              <p>As you run further, it becomes increasingly challenging to maintain concentration. Try to stay focused on the upcoming obstacles rather than your score to achieve the best running distance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Other Dinosaur Games to Try</h2>
          <p className="text-muted-foreground mb-6">
            If you enjoy Run Dino Run, check out these other dinosaur games on our site:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/dino-run" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Dino Run</h3>
              <p className="text-sm text-muted-foreground">Classic endless runner</p>
            </Link>
            <Link to="/google-dino" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Google Dino</h3>
              <p className="text-sm text-muted-foreground">The original browser game</p>
            </Link>
            <Link to="/chrome-dino" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Chrome Dino</h3>
              <p className="text-sm text-muted-foreground">T-Rex runner with dash</p>
            </Link>
          </div>
        </div>
      </section>
      
      <SeoContent {...seoContent} />
    </MainLayout>
  );
};

export default RunDinoRun;
