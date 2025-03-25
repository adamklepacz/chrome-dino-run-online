import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GameCanvas } from '@/components/dino';
import { Link } from 'react-router-dom';
import SeoContent from '@/components/SeoContent';

const GoogleDino = () => {
  // SEO data for Google Dino page
  const seo = {
    title: 'Google Dino Game | Play the Famous T-Rex Runner Online',
    description: 'Play the Google Dino game online - the famous T-Rex runner from Google Chrome that appears when you have no internet. Jump over cacti and dodge obstacles!',
    keywords: ['google dino', 'google dinosaur game', 'chrome t-rex', 'no internet game', 'google chrome dino', 'offline dinosaur game', 't-rex runner'],
    canonicalUrl: 'https://dinorunonline.com/google-dino',
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
      "name": "Google Dino",
      "description": "Play the Google Dinosaur Game online - the famous T-Rex runner that appears in Google Chrome when you have no internet connection. Jump over cacti, dodge pterodactyls, and set high scores!",
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
    title: 'Google Dino - The Famous Dinosaur Game from Google Chrome',
    subtitle: 'Play the original T-Rex runner game from Google anytime you want',
    content: `Google Dino is the popular name for the hidden dinosaur game that appears in the Google Chrome browser when you lose internet connection. Created by Google's developers, this simple yet addictive game features a pixelated T-Rex that must jump over cacti and dodge flying pterodactyls in an endless runner format.

Since its introduction, the Google Dino game has become an iconic part of the Chrome browser experience. Millions of people worldwide have played this game during internet outages, making it one of the most recognized browser Easter eggs ever created.

Our online version lets you play the Google Dino game anytime, without having to disconnect from the internet. Experience the same addictive gameplay with the familiar monochrome graphics and progressive difficulty. As you achieve higher scores, the game speed increases, putting your reflexes to the test in this beloved Google creation.`,
    keywords: ['google dino', 'google dinosaur', 'chrome t-rex', 'google browser game', 't-rex runner', 'no internet dinosaur', 'google offline game'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Google Dino - Play the Famous Chrome Dinosaur Game!</h1>
          <p className="page-subtitle">
            Enjoy Google's popular T-Rex runner game that appears when you lose internet connection. Jump, duck, and dodge to achieve high scores!
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
          <h2 className="text-2xl font-bold mb-4">How to Play Google Dino</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Game Controls</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>SPACE or UP ARROW:</strong> Jump over cacti and obstacles</li>
                <li><strong>DOWN ARROW:</strong> Duck under flying pterodactyls</li>
                <li><strong>REFRESH PAGE:</strong> Restart game if you want to start over</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Game Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Authentic Google Chrome dinosaur game experience</li>
                <li>Increasing speed as your score grows higher</li>
                <li>Day and night cycle just like in the original</li>
                <li>High score tracking to monitor your progress</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">The Story of Google Dino</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Origin</h3>
              <p>Google Dino was created by Google developers as an Easter egg for Chrome in 2014. The game was designed to entertain users when they couldn't access the internet, showing a pixelated T-Rex that comes to life when you press the spacebar.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Cultural Impact</h3>
              <p>This simple runner game has become an internet phenomenon, with billions of plays worldwide. The Google Dino has evolved into a recognizable character and symbol of internet culture, represented in merchandise and referenced in other media.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Other Versions You Might Enjoy</h2>
          <p className="text-muted-foreground mb-6">
            If you like Google Dino, try these other dinosaur game variants on our site:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/chrome-dino" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Chrome Dino</h3>
              <p className="text-sm text-muted-foreground">The classic browser game with dash</p>
            </Link>
            <Link to="/dino-run" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Dino Run</h3>
              <p className="text-sm text-muted-foreground">Enhanced runner with special abilities</p>
            </Link>
            <Link to="/dino-game" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Dino Game</h3>
              <p className="text-sm text-muted-foreground">Classic arcade version</p>
            </Link>
          </div>
        </div>
      </section>
      
      <SeoContent {...seoContent} />
    </MainLayout>
  );
};

export default GoogleDino;
