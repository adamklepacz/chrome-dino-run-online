import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GameCanvas } from '@/components/dino';
import { Link } from 'react-router-dom';
import SeoContent from '@/components/SeoContent';

const TRexChromeDinoGame = () => {
  // SEO data for T-Rex Chrome Dino Game page
  const seo = {
    title: 'T-Rex Chrome Dino Game | Play the Official Google Dinosaur Runner',
    description: 'Play T-Rex Chrome Dino Game online - the iconic dinosaur runner from Google Chrome browser. Jump over cacti, duck under pterodactyls, and collect weapons in this classic arcade game!',
    keywords: ['t-rex chrome dino game', 't rex runner', 'chrome dinosaur', 'google dinosaur game', 'no internet dinosaur', 'chrome t-rex game', 'browser dino runner'],
    canonicalUrl: 'https://dinorunonline.com/t-rex-chrome-dino-game',
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
      "name": "T-Rex Chrome Dino Game",
      "description": "The T-Rex Chrome Dino Game is the famous dinosaur runner that appears in Google Chrome when you have no internet connection. Jump over cacti, duck under pterodactyls, and collect weapons to shoot flying monsters!",
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
    title: 'T-Rex Chrome Dino Game - The Ultimate Dinosaur Runner',
    subtitle: 'Experience the complete T-Rex runner from Chrome browser without internet disruptions',
    content: `The T-Rex Chrome Dino Game is the quintessential browser-based arcade game that has entertained millions during internet outages. This pixelated dinosaur runner is built into Google Chrome and appears whenever you attempt to browse without an internet connection, featuring a running T-Rex that must navigate a prehistoric landscape filled with obstacles.

Our complete online version of the T-Rex Chrome Dino Game lets you enjoy this addictive runner anytime, with no need to disconnect from the internet. We've preserved all the elements that made the original T-Rex runner a global phenomenon while enhancing the gameplay experience.

The T-Rex Chrome Dino Game combines simplicity with challenging gameplay that progressively increases in difficulty. As your score grows, the game speed increases, and after reaching 100 points, you may discover a weapon that lets you shoot flying monsters for bonus points. This combination of accessibility and depth has made the T-Rex Chrome Dino Game one of the most widely played video games in history.`,
    keywords: ['t-rex chrome dino game', 'chrome dinosaur runner', 't-rex runner', 'google chrome game', 'dinosaur arcade game', 'browser runner game', 'offline chrome game'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">T-Rex Chrome Dino Game - The Ultimate Browser Runner!</h1>
          <p className="page-subtitle">
            Experience the complete version of Google's iconic T-Rex runner from Chrome. Jump, duck, and shoot in this classic arcade game that's entertained millions worldwide!
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
          <h2 className="text-2xl font-bold mb-4">How to Play T-Rex Chrome Dino Game</h2>
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
                <li>Authentic T-Rex Chrome Dino Game experience</li>
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
          <h2 className="text-2xl font-bold mb-6">What Makes the T-Rex Chrome Dino Game Special</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="mb-4">
              The T-Rex Chrome Dino Game stands out as one of the most widely played video games in history, despite its simple premise. What makes this running dinosaur game special is its perfect accessibility - it appears right when you need a distraction from internet connectivity issues, requiring no download or installation.
            </p>
            <p className="mb-4">
              The game's minimalist pixel art style creates an instantly recognizable aesthetic that has become iconic in internet culture. The simple monochrome graphics belie a surprisingly challenging gameplay experience that tests your reflexes and timing.
            </p>
            <p>
              Our version of the T-Rex Chrome Dino Game maintains this signature minimalist style while adding subtle enhancements that expand the gameplay without compromising the original charm. The weapon system adds a strategic element to what remains an elegantly simple endless runner at its core.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">T-Rex Chrome Dino Game World Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Record Scores</h3>
              <p>The current world record for the T-Rex Chrome Dino Game stands at an incredible 99,999 points - the maximum score the game's counter can display. This feat requires playing for hours with perfect concentration and reflexes. The game's increasing speed makes achieving such scores a true test of gaming endurance and skill.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Competitive Scene</h3>
              <p>Despite being a simple browser game, the T-Rex Chrome Dino Game has developed a competitive community of players who share strategies and compete for high scores. Speed runners and gaming enthusiasts have embraced this minimalist dinosaur runner as a legitimate competitive challenge.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">T-Rex Chrome Dino Game Strategy Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Mastering Movement</h3>
              <p>In T-Rex Chrome Dino Game, perfect timing is essential. For beginners, focus on maintaining a rhythm with your jumps rather than reacting to each obstacle individually. As you progress to higher scores, you'll need to quickly identify obstacle patterns and adapt your jumping and ducking accordingly.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Advanced Techniques</h3>
              <p>For advanced T-Rex Chrome Dino Game players, minimize the height of your jumps by tapping the jump button briefly rather than holding it. This creates shorter jumps that help you land more quickly and prepare for subsequent obstacles. When you acquire the weapon, prioritize shooting flying obstacles that appear at awkward heights.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Evolution of the T-Rex Chrome Dino Game</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="mb-4">
              Since its introduction in 2014, the T-Rex Chrome Dino Game has undergone several subtle evolutions. Google has occasionally updated the game with special themed versions for events and milestones, such as adding a birthday cake on Chrome's anniversary or a space helmet during significant space launches.
            </p>
            <p className="mb-4">
              The game's core mechanics have remained largely unchanged, preserving the simple yet addictive gameplay that made it popular. The day-night cycle was added as one of the first updates to add visual variety and slightly increase the challenge during nighttime phases.
            </p>
            <p>
              Our version of the T-Rex Chrome Dino Game honors this evolution while adding our own contribution - the weapon system that appears after reaching 100 points. This enhancement adds a new strategic layer to the game while maintaining the classic feel that millions of players have come to love.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Similar Dinosaur Games to Explore</h2>
          <p className="text-muted-foreground mb-6">
            If you enjoy the T-Rex Chrome Dino Game, check out these other dinosaur games on our site:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/google-game-dino" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Google Game Dino</h3>
              <p className="text-sm text-muted-foreground">Google's famous dinosaur game</p>
            </Link>
            <Link to="/chrome-dino-game" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Chrome Dino Game</h3>
              <p className="text-sm text-muted-foreground">Classic browser dinosaur runner</p>
            </Link>
            <Link to="/offline-dinosaurus" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Offline Dinosaurus</h3>
              <p className="text-sm text-muted-foreground">The no-internet dinosaur game</p>
            </Link>
          </div>
        </div>
      </section>
      
      <SeoContent {...seoContent} />
    </MainLayout>
  );
};

export default TRexChromeDinoGame;
