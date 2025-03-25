import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GameCanvas } from '@/components/dino';
import { Link } from 'react-router-dom';
import SeoContent from '@/components/SeoContent';

const GoogleGameDino = () => {
  // SEO data for Google Game Dino page
  const seo = {
    title: 'Google Game Dino | Play Google\'s T-Rex Runner Online',
    description: 'Play Google Game Dino online - the famous dinosaur game created by Google for Chrome browser. Jump, duck, and collect weapons in this classic T-Rex runner game!',
    keywords: ['google game dino', 'google dinosaur game', 'google t-rex', 'chrome dinosaur game', 'google offline game', 'google browser game', 't-rex runner'],
    canonicalUrl: 'https://dinorunonline.com/google-game-dino',
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
      "name": "Google Game Dino",
      "description": "Play the Google Game Dino online - the famous T-Rex runner created by Google that appears in Chrome when you lose internet connection. Jump over cacti, duck under pterodactyls, and collect weapons!",
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
    title: 'Google Game Dino - The Original Dinosaur Game by Google',
    subtitle: 'Experience Google\'s famous T-Rex runner game without losing connection',
    content: `Google Game Dino is the beloved dinosaur game created by Google as an Easter egg for Chrome browser users. This simple yet addictive runner game featuring a pixelated T-Rex appears whenever you attempt to browse the web without an internet connection, making it Google's clever way of turning connectivity issues into entertainment.

Our online version of Google's famous dinosaur game lets you play anytime, with no need to disconnect from the internet. We've faithfully recreated the game that millions of Google users have enjoyed, maintaining the same pixelated charm and progressively challenging gameplay that made the original so popular.

What sets our Google Game Dino version apart is that we've included all the authentic features from Google's creation while adding some exciting enhancements. After reaching 100 points, you may discover a weapon that allows you to shoot down flying monsters for extra points, adding a new layer of strategy to Google's classic dinosaur runner.`,
    keywords: ['google game dino', 'google dinosaur', 'google t-rex game', 'chrome dino', 'google browser game', 'offline dinosaur game', 'google easter egg'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Google Game Dino - Play Google's Famous Dinosaur Game!</h1>
          <p className="page-subtitle">
            Enjoy the iconic T-Rex runner created by Google that appears when you lose internet connection. Jump, duck, and shoot in this addictive arcade game!
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
          <h2 className="text-2xl font-bold mb-4">How to Play Google Game Dino</h2>
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
                <li>Original Google dinosaur game experience</li>
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
          <h2 className="text-2xl font-bold mb-6">The Story Behind Google Game Dino</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="mb-4">
              Google Game Dino was created in 2014 by Google Chrome designers Sebastien Gabriel and Edward Jung as a playful Easter egg for Chrome users experiencing connectivity issues. The dinosaur was chosen as a humorous nod to the idea of going "offline" - back to the prehistoric era before the internet.
            </p>
            <p className="mb-4">
              Originally codenamed "Project Bolan" (after T. Rex frontman Marc Bolan), this simple game hidden within Google's browser has become one of the most played video games in the world, with over 270 million games played each month during internet outages.
            </p>
            <p>
              Google's dinosaur game has become such a cultural icon that Google has included special versions for various events, including a birthday cake on Chrome's anniversary and a space helmet during the SpaceX launch. Our version captures the original charm that made Google's creation so beloved worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Google Game Dino Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Ground Obstacles</h3>
              <p>In Google Game Dino, the primary challenge comes from navigating cacti obstacles. These appear in various configurations - single small cacti, clusters of small cacti, and large cacti, each requiring precisely timed jumps. The obstacle patterns become more challenging as your score increases.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Aerial Challenges</h3>
              <p>After your score reaches a certain threshold in Google Game Dino, flying pterodactyls begin to appear. These aerial obstacles fly at different heights, requiring quick decisions to either jump over them or duck under them depending on their position, adding another layer of challenge to Google's game.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Google Game Dino Advanced Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Weapon System</h3>
              <p>In our version of Google Game Dino, we've added an exciting weapon system. After reaching 100 points, watch for a gun that may appear - collect it to gain shooting abilities. Press SHIFT to fire at flying monsters, earning 20 extra points with each successful hit and creating new strategic possibilities.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Visual Evolution</h3>
              <p>Like in the original Google creation, our Google Game Dino features a dynamic environment that shifts between day and night. This visual cycle not only adds variety to the gaming experience but also increases challenge during night phases when obstacles may be slightly harder to spot.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Pro Tips for Google Game Dino</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Anticipate, Don't React</h3>
              <p>The key to mastering Google Game Dino is to focus ahead of your dinosaur rather than directly on it. By anticipating obstacles rather than reacting to them, you'll give yourself more time to prepare jumps and ducks, significantly improving your ability to navigate challenging obstacle sequences.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Weapon Efficiency</h3>
              <p>When you collect a weapon in Google Game Dino, use it wisely. Since you can only fire one bullet at a time, time your shots carefully to hit flying pterodactyls that would be difficult to avoid by jumping or ducking. Each hit earns valuable extra points that can boost your final score.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Other Dinosaur Games to Explore</h2>
          <p className="text-muted-foreground mb-6">
            If you enjoy Google Game Dino, check out these other dinosaur games on our site:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/chrome-dino-game" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Chrome Dino Game</h3>
              <p className="text-sm text-muted-foreground">Classic Chrome browser game</p>
            </Link>
            <Link to="/t-rex-chrome" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">T-Rex Chrome</h3>
              <p className="text-sm text-muted-foreground">The original T-Rex runner</p>
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

export default GoogleGameDino;
