import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GameCanvas } from '@/components/dino';
import { Link } from 'react-router-dom';
import SeoContent from '@/components/SeoContent';

const DinoRunGame = () => {
  // SEO data for Dino Run Game page
  const seo = {
    title: 'Dino Run Game | Play the Exciting Dinosaur Runner Online',
    description: 'Play Dino Run Game online - the addictive dinosaur running game that lets you jump, duck, and collect weapons. Enjoy this classic arcade-style runner anytime!',
    keywords: ['dino run game', 'dinosaur running game', 'dino runner', 't-rex game', 'dinosaur arcade game', 'endless runner game', 'free dino game'],
    canonicalUrl: 'https://dinorunonline.com/dino-run-game',
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
      "name": "Dino Run Game",
      "description": "Dino Run Game is an exciting endless runner featuring a dinosaur that must navigate through a prehistoric landscape. Jump over cacti, duck under flying obstacles, and collect weapons to shoot monsters!",
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
    title: 'Dino Run Game - The Thrilling Dinosaur Running Adventure',
    subtitle: 'A fast-paced endless runner featuring a prehistoric hero',
    content: `Dino Run Game is an action-packed endless runner that puts you in control of a nimble dinosaur racing through an ever-changing prehistoric landscape. This addictive running game challenges your reflexes as you guide your dinosaur over, under, and through increasingly difficult obstacles.

Inspired by the classic browser dinosaur game but evolved into a more complete gaming experience, Dino Run Game features smooth controls and progressive difficulty that keeps the gameplay fresh and challenging. The longer you run, the faster the game becomes, testing your timing and reflexes to their limits.

What makes Dino Run Game special is the perfect balance of accessibility and depth. Anyone can pick up and play this running game within seconds, but mastering it takes practice and skill. After reaching 100 points, you may discover a weapon that allows you to shoot flying monsters for bonus points, adding a strategic layer to this thrilling dinosaur running adventure.`,
    keywords: ['dino run game', 'dinosaur runner', 'running game', 'endless runner', 'arcade game', 'prehistoric game', 'dinosaur adventure'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Dino Run Game - The Ultimate Dinosaur Running Adventure!</h1>
          <p className="page-subtitle">
            Guide your dinosaur through a prehistoric obstacle course in this thrilling endless runner. Jump, duck, and shoot in this exciting arcade game!
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
          <h2 className="text-2xl font-bold mb-4">How to Play Dino Run Game</h2>
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
                <li>Exciting dinosaur running gameplay</li>
                <li>Progressive difficulty with increasing speed</li>
                <li>Day and night cycle for visual variety</li>
                <li>Weapon system - collect a gun after reaching 100 points</li>
                <li>Flying monsters that can be shot for 20 bonus points</li>
                <li>High score tracking system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">The Popularity of Dino Run Games</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="mb-4">
              Dinosaur running games have captured the imagination of players worldwide with their simple yet challenging gameplay. What started as a hidden Easter egg in a popular browser has evolved into its own gaming genre, with Dino Run Game being one of the most popular variants.
            </p>
            <p className="mb-4">
              The appeal of dinosaur running games lies in their perfect balance of simplicity and challenge. The basic mechanics are intuitive enough for anyone to understand immediately, but the progressively increasing difficulty creates a skill ceiling that keeps players engaged for hours.
            </p>
            <p>
              Dino Run Game builds on this foundation with refined controls and additional gameplay elements like the weapon system, creating a more complete gaming experience while maintaining the addictive core that made dinosaur runners so popular in the first place.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Why Dino Run Games Are So Addictive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">The Flow State</h3>
              <p>Dino Run Game and similar running games are masterful at inducing what psychologists call a "flow state" - that perfect zone where challenge and skill are balanced. As you play, the game's difficulty increases in sync with your improving skills, keeping you in this highly engaging mental state.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">The "Just One More Try" Factor</h3>
              <p>The quick restart and immediate gameplay of Dino Run Game creates a powerful "just one more try" effect. When your run ends, you're just one button press away from starting again, making it easy to fall into the cycle of continuous play that's the hallmark of truly addictive games.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Dino Run Game Through the Years</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="mb-4">
              The concept of dinosaur running games first gained mainstream popularity in 2014 when it was introduced as a hidden feature in a popular browser. Originally designed as a simple distraction during internet connectivity issues, these games quickly developed a dedicated following.
            </p>
            <p className="mb-4">
              Over the years, the basic dino runner concept has inspired numerous variants and spin-offs across multiple platforms. Mobile versions, enhanced web versions, and even standalone applications have emerged, each putting their own spin on the dinosaur running genre.
            </p>
            <p>
              Our Dino Run Game preserves the nostalgic feel of the original while introducing enhancements like the weapon system and visual improvements. These additions respect the core gameplay loop while providing a fresh experience for both new players and veterans of dinosaur running games.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Mastering Dino Run Game: Advanced Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Obstacle Pattern Recognition</h3>
              <p>Dino Run Game features certain repeating patterns of obstacles. Learning to recognize these patterns and developing muscle memory for the appropriate responses will significantly improve your performance. Look for telltale signs of upcoming obstacle sequences and prepare accordingly.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Weapon Management</h3>
              <p>When you obtain the weapon in Dino Run Game after reaching 100 points, use it strategically rather than firing randomly. Each successful hit on a flying monster earns you 20 bonus points, so prioritize targets that would be difficult to avoid by jumping or ducking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Similar Games You Might Enjoy</h2>
          <p className="text-muted-foreground mb-6">
            If you like Dino Run Game, check out these other dinosaur games on our site:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/t-rex-chrome-dino-game" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">T-Rex Chrome Dino Game</h3>
              <p className="text-sm text-muted-foreground">The ultimate browser runner</p>
            </Link>
            <Link to="/dino-run" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Dino Run</h3>
              <p className="text-sm text-muted-foreground">Classic dinosaur endless runner</p>
            </Link>
            <Link to="/google-game-dino" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Google Game Dino</h3>
              <p className="text-sm text-muted-foreground">Google's famous dinosaur game</p>
            </Link>
          </div>
        </div>
      </section>
      
      <SeoContent {...seoContent} />
    </MainLayout>
  );
};

export default DinoRunGame;
