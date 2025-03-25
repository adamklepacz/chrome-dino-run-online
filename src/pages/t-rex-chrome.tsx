import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GameCanvas } from '@/components/dino';
import { Link } from 'react-router-dom';
import SeoContent from '@/components/SeoContent';

const TRexChrome = () => {
  // SEO data for T-Rex Chrome page
  const seo = {
    title: 'T Rex Chrome | Play the Original Chrome Dinosaur Game Online',
    description: 'Play T Rex Chrome - the famous Google Chrome dinosaur game that appears when you have no internet connection. Jump over cacti, duck under pterodactyls and collect weapons!',
    keywords: ['t rex chrome', 't-rex game', 'chrome dinosaur', 'google t-rex', 'dino chrome game', 'no internet game', 'chrome t rex runner'],
    canonicalUrl: 'https://dinorunonline.com/t-rex-chrome',
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
      "name": "T Rex Chrome",
      "description": "Play the T Rex Chrome dinosaur game online - the famous running T-Rex from Google Chrome that appears when you lose internet connection. Jump over cacti, duck under flying obstacles, and collect weapons to shoot monsters!",
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
    title: 'T Rex Chrome - The Iconic Google Chrome Dinosaur Game',
    subtitle: 'Experience the original Chrome T-Rex runner game with all its features',
    content: `The T Rex Chrome game (also known as the Chrome Dinosaur) is the iconic pixelated game that appears in Google Chrome when you lose internet connection. Our online version faithfully recreates this classic with all the original features, allowing you to play anytime - no connection loss required!

In this endless runner, you control a pixelated T-Rex that runs through a prehistoric landscape, jumping over cacti and ducking under flying pterodactyls. As your score increases, the game speed increases as well, making it progressively more challenging.

What makes our T Rex Chrome version special is that we've included all the authentic features of the original game, including the day-night cycle, plus some enhancements like the weapon system. After reaching 100 points, you can collect a weapon that allows you to shoot down flying monsters for extra points. How high can you push your score?`,
    keywords: ['t rex chrome', 'chrome dinosaur', 't-rex runner', 'google chrome game', 'dinosaur game', 'no internet game', 'chrome offline game'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">T Rex Chrome - Play the Iconic Chrome Dinosaur Game!</h1>
          <p className="page-subtitle">
            Experience the famous Google Chrome T-Rex runner that appears when your internet goes down. Jump, duck, and even shoot monsters in this classic arcade game!
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
          <h2 className="text-2xl font-bold mb-4">How to Play T Rex Chrome</h2>
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
                <li>Classic T-Rex runner gameplay from Chrome</li>
                <li>Progressive difficulty with increasing speed</li>
                <li>Day and night cycle for visual variety</li>
                <li>Weapon system - collect a gun after 100 points</li>
                <li>Flying monsters that can be shot for extra points</li>
                <li>High score tracking to monitor your progress</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">T Rex Chrome Game Mechanics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Obstacle Types</h3>
              <p>The T Rex Chrome game features different obstacles to challenge you. Small and large cacti appear on the ground requiring well-timed jumps, while pterodactyls fly at various heights requiring you to either jump over or duck under them depending on their position.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Weapon System</h3>
              <p>A unique feature of our T Rex Chrome version is the weapon system. After reaching 100 points, a gun may appear that you can collect. With this weapon, you can shoot flying monsters to earn 20 extra points per hit, helping you achieve even higher scores.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">T Rex Chrome Game Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Master the Controls</h3>
              <p>The key to success in T Rex Chrome is mastering the timing of your jumps and ducks. For flying obstacles, quickly determine whether to jump or duck based on their height. Remember that once you jump, you can't change your trajectory, so time your jumps carefully.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Use Your Weapon Wisely</h3>
              <p>When you obtain a weapon after 100 points, use it strategically to shoot down flying monsters for extra points. This can significantly boost your score. Remember to press SHIFT to fire your weapon when flying monsters appear.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Other Dinosaur Games to Try</h2>
          <p className="text-muted-foreground mb-6">
            If you enjoy T Rex Chrome, check out these other dinosaur games on our site:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/chrome-dino" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Chrome Dino</h3>
              <p className="text-sm text-muted-foreground">The classic browser game</p>
            </Link>
            <Link to="/google-dino" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Google Dino</h3>
              <p className="text-sm text-muted-foreground">Google's offline dinosaur game</p>
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

export default TRexChrome;
