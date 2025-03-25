import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GameCanvas } from '@/components/dino';
import { Link, useLocation } from 'react-router-dom';
import SeoContent from '@/components/SeoContent';

// Define the SEO type to match the expectations of MainLayout
interface SeoType {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
}

const DinoGame = () => {
  const location = useLocation();
  const path = location.pathname.substring(1); // Remove leading slash
  
  // SEO data based on the current path
  const seoData = getSeoDataForPath(path);
  
  // Add structured data for rich results
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "VideoGame",
      "name": seoData.structuredData.name,
      "description": seoData.structuredData.description,
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
  }, [path, seoData.structuredData]);

  return (
    <MainLayout seo={seoData.seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">{seoData.header}</h1>
          <p className="page-subtitle">{seoData.subheader}</p>
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4">
          <GameCanvas />
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">{seoData.howToPlayTitle}</h2>
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
                <li>Endless runner gameplay like the Chrome browser game</li>
                <li>Increasing speed as your score grows</li>
                <li>Day and night cycle for extra challenge</li>
                <li>Track and share your high score</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">{seoData.variantsTitle}</h2>
          <p className="text-muted-foreground mb-6">{seoData.variantsSubtitle}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {seoData.relatedGames.map((game, index) => (
              <Link key={index} to={game.path} className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
                <h3 className="font-semibold mb-2">{game.title}</h3>
                <p className="text-sm text-muted-foreground">{game.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <SeoContent {...seoData.seoContent} />
    </MainLayout>
  );
};

// Helper function to get SEO data based on the current path
function getSeoDataForPath(path: string) {
  // Default SEO data for the main chrome-dino page
  const defaultData = {
    header: "Chrome Dino Game - T-Rex Runner Adventure",
    subheader: "Play the famous Chrome Dinosaur Game online! Jump over cacti, dodge birds, and collect points to set new high scores.",
    howToPlayTitle: "How to Play The Chrome Dino Game",
    variantsTitle: "More Dino Game Variants",
    variantsSubtitle: "If you enjoy the Chrome Dino Game, try our other variants with the same gameplay:",
    seo: {
      title: "Chrome Dino - Play the Original T-Rex Runner Game Online",
      description: "Play the famous Chrome Dinosaur Game online for free. Jump over cacti, dodge obstacles, and set high scores in this T-Rex running adventure!",
      keywords: ["chrome dino", "dino game", "t-rex runner", "dinosaur game", "chrome offline game", "jumping dinosaur"],
      canonicalUrl: `https://dinorunonline.com/${path || 'chrome-dino'}`,
      ogImage: "https://dinorunonline.com/images/dino-game-screenshot.jpg",
      ogType: "website"
    } as SeoType,
    seoContent: {
      title: "About the Chrome Dinosaur Game",
      subtitle: "The popular T-Rex runner from Google Chrome",
      content: `The Chrome Dinosaur Game (also known as the T-Rex Game, Dino Runner, or the No Internet Game) was created as an Easter egg in the Google Chrome browser. It appears automatically when you try to visit a website while disconnected from the Internet.

Our free online version brings this classic game to life with enhanced graphics and additional features, while maintaining the addictive simplicity of the original Chrome Dino runner. Play as the pixel T-Rex, jumping over cacti and dodging obstacles to achieve the highest score possible!

This browser game works on all devices including desktops, laptops, tablets, and mobile phones. No download required - just load the page and start playing instantly!`,
      keywords: ["chrome dino", "t-rex runner", "dinosaur game", "chrome offline game", "jumping dino", "no internet game"],
    },
    structuredData: {
      name: "Chrome Dino Game",
      description: "Play the famous Chrome Dinosaur Game online for free. Jump over cacti, dodge obstacles, and set high scores in this T-Rex running adventure!"
    },
    relatedGames: [
      { path: "/dino-game", title: "Dino Game", description: "Classic endless runner" },
      { path: "/dino-run", title: "Dino Run", description: "Dinosaur running adventure" },
      { path: "/chrome-dino", title: "Chrome Dino", description: "Original T-Rex game" }
    ]
  };

  // Path-specific SEO data
  const pathData: Record<string, typeof defaultData> = {
    'chrome-dino': {
      header: "Chrome Dino - The Original T-Rex Runner",
      subheader: "Play the famous Chrome browser dinosaur game online anytime - no internet disconnection required!",
      howToPlayTitle: "How to Play Chrome Dino",
      variantsTitle: "Other Chrome Dino Variants",
      variantsSubtitle: "Try these other versions of the Chrome dinosaur game:",
      seo: {
        title: "Chrome Dino - Play the Original T-Rex Runner Game Online",
        description: "Play Chrome Dino, the famous T-Rex runner from Google Chrome browser, online for free. No internet disconnection required!",
        keywords: ["chrome dino", "t-rex runner", "dinosaur game", "chrome offline game", "jumping dinosaur"],
        canonicalUrl: "https://dinorunonline.com/chrome-dino",
        ogImage: "https://dinorunonline.com/images/dino-game-screenshot.jpg",
        ogType: "website"
      } as SeoType,
      seoContent: {
        title: "Chrome Dino - The Original No Internet Dinosaur Game",
        subtitle: "The famous offline dinosaur game from Google Chrome",
        content: `Chrome Dino is Google Chrome's hidden dinosaur game that appears when you have no internet connection. Our online version lets you play this beloved T-Rex runner anytime, not just when your internet is down!

This pixelated dinosaur runner has become one of the most played games in the world. The concept is simple - press space to make your T-Rex jump over cacti and duck under pterodactyls. As you progress, the game speeds up, making each jump increasingly challenging.

Our Chrome Dino version stays true to the original while enhancing the experience with smoother animations and additional features. Play directly in your browser on any device - no downloads required!`,
        keywords: ["chrome dino", "t-rex runner", "chrome dinosaur", "offline game", "no internet game"],
      },
      structuredData: {
        name: "Chrome Dino",
        description: "Play the famous Chrome Dinosaur Game online for free. No internet disconnection required to enjoy this T-Rex runner!"
      },
      relatedGames: [
        { path: "/chromedino", title: "ChromeDino", description: "Alternative version" },
        { path: "/dino-game", title: "Dino Game", description: "Classic dinosaur game" },
        { path: "/google-dino", title: "Google Dino", description: "T-Rex running game" }
      ]
    },
    'dino-game': {
      header: "Dino Game - T-Rex Runner Adventure",
      subheader: "Play the classic endless runner featuring a jumping dinosaur!",
      howToPlayTitle: "How to Play Dino Game",
      variantsTitle: "More Dinosaur Games",
      variantsSubtitle: "If you enjoy this game, check out these similar dinosaur games:",
      seo: {
        title: "Dino Game - Play the Classic T-Rex Runner Online",
        description: "Play the Dino Game online for free. Jump over cacti, dodge obstacles, and set high scores in this classic T-Rex runner!",
        keywords: ["dino game", "t-rex runner", "dinosaur game", "chrome dino", "jumping dinosaur"],
        canonicalUrl: "https://dinorunonline.com/dino-game",
        ogImage: "https://dinorunonline.com/images/dino-game-screenshot.jpg",
        ogType: "website"
      } as SeoType,
      seoContent: {
        title: "About the Dino Game",
        subtitle: "The classic dinosaur running game",
        content: `Dino Game is a simple yet addictive runner featuring a prehistoric T-Rex that must navigate through an endless desert landscape. Originally appearing as an offline Easter egg in the Chrome browser, this game has gained immense popularity for its simple mechanics and challenging gameplay.

The controls are straightforward - press space or tap to make your dinosaur jump over cacti, and duck to avoid flying pterodactyls. As you progress, the game gradually increases in speed, testing your reflexes and timing.

Our version of the Dino Game works on all devices and is available to play anytime, with or without an internet connection. No downloads required - just load the page and start your dinosaur adventure!`,
        keywords: ["dino game", "dinosaur runner", "t-rex jumper", "chrome offline game", "endless runner"],
      },
      structuredData: {
        name: "Dino Game",
        description: "Play the classic Dino Game online for free. Jump over cacti and dodge obstacles in this T-Rex running adventure!"
      },
      relatedGames: [
        { path: "/chrome-dino", title: "Chrome Dino", description: "Original browser game" },
        { path: "/dino-run", title: "Dino Run", description: "Endless runner version" },
        { path: "/t-rex-chrome", title: "T-Rex Chrome", description: "Chrome browser game" }
      ]
    },
    'dino-run': {
      header: "Dino Run - Endless Runner Game",
      subheader: "Help your dinosaur run, jump, and survive in this addictive endless runner!",
      howToPlayTitle: "How to Play Dino Run",
      variantsTitle: "More Running Games",
      variantsSubtitle: "If you enjoy Dino Run, check out these similar games:",
      seo: {
        title: "Dino Run - Play the Classic Dinosaur Running Game Online",
        description: "Play Dino Run online for free. Control a jumping T-Rex, avoid obstacles, and achieve high scores in this addictive endless runner!",
        keywords: ["dino run", "t-rex runner", "dinosaur game", "chrome dino", "endless runner"],
        canonicalUrl: "https://dinorunonline.com/dino-run",
        ogImage: "https://dinorunonline.com/images/dino-game-screenshot.jpg",
        ogType: "website"
      } as SeoType,
      seoContent: {
        title: "About Dino Run",
        subtitle: "The addictive dinosaur endless runner",
        content: `Dino Run brings the excitement of controlling a prehistoric T-Rex as it races through an endless landscape filled with obstacles. This runner game combines simple gameplay mechanics with increasing difficulty for an addictive gaming experience.

Originally inspired by Chrome's dinosaur game, Dino Run features improved graphics and gameplay while maintaining the core challenge - jump over cacti, dodge pterodactyls, and survive as long as possible. The game gradually speeds up as your score increases, testing your reflexes and timing.

Play Dino Run on any device with a web browser - no downloads or installations required. Perfect for quick gaming sessions during breaks or whenever you need some quick entertainment!`,
        keywords: ["dino run", "dinosaur runner", "t-rex game", "endless runner", "jumping dino"],
      },
      structuredData: {
        name: "Dino Run",
        description: "Play Dino Run online for free. Control a jumping T-Rex, avoid obstacles, and achieve high scores in this addictive endless runner!"
      },
      relatedGames: [
        { path: "/chrome-dino", title: "Chrome Dino", description: "Original browser game" },
        { path: "/dino-game", title: "Dino Game", description: "Classic dinosaur game" },
        { path: "/run-dino-run", title: "Run Dino Run", description: "Extended runner game" }
      ]
    },
    'chromedino': {
      header: "ChromeDino - Play The Classic T-Rex Runner",
      subheader: "Experience the iconic offline dinosaur game from Chrome browser - now playable online anytime!",
      howToPlayTitle: "How to Play ChromeDino",
      variantsTitle: "Other ChromeDino Variants",
      variantsSubtitle: "Explore these other versions of the classic Chrome dinosaur game:",
      seo: {
        title: "ChromeDino - Play The No-Internet Dinosaur Game Online",
        description: "Play ChromeDino online - the famous T-Rex runner from Chrome browser. Jump over cacti, dodge pterodactyls, and set new high scores!",
        keywords: ["chromedino", "chrome dinosaur", "t-rex runner", "dino game", "chrome offline game"],
        canonicalUrl: "https://dinorunonline.com/chromedino",
        ogImage: "https://dinorunonline.com/images/dino-game-screenshot.jpg",
        ogType: "website"
      } as SeoType,
      seoContent: {
        title: "About ChromeDino",
        subtitle: "The classic Chrome browser dinosaur game",
        content: `ChromeDino is the addictive dinosaur runner game that appears in Google Chrome when you lose internet connection. Our online version brings the same exciting gameplay to your browser anytime!

The concept is simple yet challenging - control your pixelated T-Rex by pressing space to jump over cacti and duck to avoid pterodactyls. As you progress, the game speeds up, testing your reflexes and timing with each new obstacle.

Play ChromeDino on any device with a web browser - no downloads or plugins required. Perfect for quick gaming sessions during breaks or whenever you need a fun distraction!`,
        keywords: ["chromedino", "chrome dino", "t-rex game", "jumping dinosaur", "chrome offline game"],
      },
      structuredData: {
        name: "ChromeDino",
        description: "Play ChromeDino online - the famous T-Rex runner from Chrome browser. Jump over cacti, dodge pterodactyls, and set new high scores!"
      },
      relatedGames: [
        { path: "/chrome-dino", title: "Chrome Dino", description: "Original browser game" },
        { path: "/dino-game", title: "Dino Game", description: "Classic T-Rex runner" },
        { path: "/google-dino", title: "Google Dino", description: "Chrome browser game" }
      ]
    },
    'google-dino': {
      header: "Google Dino - The Chrome T-Rex Runner Game",
      subheader: "Play Google's hidden dinosaur game online anytime - no internet disconnection required!",
      howToPlayTitle: "How to Play Google Dino",
      variantsTitle: "More Google Dinosaur Games",
      variantsSubtitle: "If you enjoy Google Dino, check out these similar games:",
      seo: {
        title: "Google Dino - Play the Chrome Dinosaur Game Online",
        description: "Play Google Dino - the famous Chrome browser T-Rex runner game online. Jump over cacti, dodge obstacles, and set high scores!",
        keywords: ["google dino", "chrome dinosaur", "t-rex runner", "dino game", "chrome offline game"],
        canonicalUrl: "https://dinorunonline.com/google-dino",
        ogImage: "https://dinorunonline.com/images/dino-game-screenshot.jpg",
        ogType: "website"
      } as SeoType,
      seoContent: {
        title: "Google Dino - The Hidden Chrome Game",
        subtitle: "The famous dinosaur game from Google Chrome",
        content: `Google Dino is the hidden gem in Chrome browsers that appears when your internet connection drops. This pixelated T-Rex runner has become one of the most recognized mini-games in the world, and now you can play it anytime!

Our online version brings all the fun of Google's dinosaur game to your browser with the same simple controls - press space to jump over cacti and use the down arrow to duck under flying pterodactyls. The game gradually increases in speed as your score climbs.

Play Google Dino on any device with a browser - no need to disconnect from the internet or use Chrome specifically. Just load the page and start jumping!`,
        keywords: ["google dino", "chrome dinosaur", "t-rex game", "no internet game", "browser game"],
      },
      structuredData: {
        name: "Google Dino",
        description: "Play Google Dino - the famous Chrome browser T-Rex runner game online. Jump over cacti, dodge obstacles, and set high scores!"
      },
      relatedGames: [
        { path: "/chrome-dino", title: "Chrome Dino", description: "Original offline game" },
        { path: "/google-game-dino", title: "Google Game Dino", description: "Alternative version" },
        { path: "/chromedino", title: "ChromeDino", description: "Classic dinosaur runner" }
      ]
    },
    'run-dino-run': {
      header: "Run Dino Run - Endless Dinosaur Runner",
      subheader: "Help your T-Rex jump, duck, and dash through an endless prehistoric landscape!",
      howToPlayTitle: "How to Play Run Dino Run",
      variantsTitle: "More Running Games",
      variantsSubtitle: "Enjoy these other endless runner dinosaur games:",
      seo: {
        title: "Run Dino Run - Play the Endless T-Rex Runner Game Online",
        description: "Play Run Dino Run online, the addictive endless dinosaur runner. Jump over obstacles, dodge flying dangers, and see how far you can go!",
        keywords: ["run dino run", "endless runner", "dinosaur game", "jumping t-rex", "chrome dino"],
        canonicalUrl: "https://dinorunonline.com/run-dino-run",
        ogImage: "https://dinorunonline.com/images/dino-game-screenshot.jpg",
        ogType: "website"
      } as SeoType,
      seoContent: {
        title: "Run Dino Run - Endless Runner Game",
        subtitle: "The exciting dinosaur running adventure",
        content: `Run Dino Run brings the thrill of controlling a prehistoric T-Rex in a challenging endless runner format! Originally inspired by Chrome's famous offline dinosaur game, our enhanced version adds more excitement and features.

Your dinosaur automatically runs forward through a desert landscape filled with obstacles. Press space or up arrow to jump over cacti, down arrow to duck under flying pterodactyls, and try to survive as long as possible. The game gradually speeds up as your score increases.

Run Dino Run works perfectly on all devices from desktop computers to smartphones. No downloads required - just load the page and start running through the prehistoric world!`,
        keywords: ["run dino run", "t-rex runner", "endless runner game", "jumping dinosaur", "prehistoric game"],
      },
      structuredData: {
        name: "Run Dino Run",
        description: "Play Run Dino Run online, the addictive endless dinosaur runner. Jump over obstacles, dodge flying dangers, and see how far you can go!"
      },
      relatedGames: [
        { path: "/dino-run", title: "Dino Run", description: "Classic runner game" },
        { path: "/dino-run-game", title: "Dino Run Game", description: "Extended version" },
        { path: "/chrome-dino", title: "Chrome Dino", description: "Original T-Rex game" }
      ]
    },
    't-rex-chrome': {
      header: "T-Rex Chrome - The Dinosaur Running Game",
      subheader: "Play the famous Chrome browser dinosaur game that appears when you're offline!",
      howToPlayTitle: "How to Play T-Rex Chrome",
      variantsTitle: "Other T-Rex Games",
      variantsSubtitle: "If you enjoy T-Rex Chrome, try these similar dinosaur games:",
      seo: {
        title: "T-Rex Chrome - Play the Famous Chrome Dinosaur Game Online",
        description: "Play T-Rex Chrome, the iconic dinosaur running game from Google Chrome browser. Jump over cacti, dodge obstacles, and set new high scores!",
        keywords: ["t-rex chrome", "chrome dinosaur", "offline game", "jumping dinosaur", "browser game"],
        canonicalUrl: "https://dinorunonline.com/t-rex-chrome",
        ogImage: "https://dinorunonline.com/images/dino-game-screenshot.jpg",
        ogType: "website"
      } as SeoType,
      seoContent: {
        title: "T-Rex Chrome - The Offline Dinosaur Game",
        subtitle: "Google Chrome's famous T-Rex runner now available online",
        content: `T-Rex Chrome is the iconic pixelated dinosaur game that appears in Google Chrome browsers when you have no internet connection. Our online version lets you play this addictive runner anytime, no internet problems required!

Control your T-Rex dinosaur as it runs through a barren landscape, jumping over cacti and ducking under pterodactyls. The longer you survive, the faster the game becomes, creating an increasingly challenging experience that tests your reflexes.

Play T-Rex Chrome on any device with a web browser - no downloads or special requirements needed. Experience the game that has entertained millions during internet outages, now available whenever you want!`,
        keywords: ["t-rex chrome", "chrome dinosaur", "offline game", "jumping t-rex", "browser game"],
      },
      structuredData: {
        name: "T-Rex Chrome",
        description: "Play T-Rex Chrome, the iconic dinosaur running game from Google Chrome browser. Jump over cacti, dodge obstacles, and set new high scores!"
      },
      relatedGames: [
        { path: "/chrome-dino", title: "Chrome Dino", description: "Original browser game" },
        { path: "/t-rex-chrome-dino", title: "T-Rex Chrome Dino", description: "Extended version" },
        { path: "/t-rex-chrome-dino-game", title: "T-Rex Chrome Dino Game", description: "Full game experience" }
      ]
    },
    'offline-dinosaurus': {
      header: "Offline Dinosaurus - The No-Internet Game",
      subheader: "Play the famous Chrome offline dinosaur game anytime - no connection issues needed!",
      howToPlayTitle: "How to Play Offline Dinosaurus",
      variantsTitle: "More Offline Games",
      variantsSubtitle: "Enjoy these other versions of the offline dinosaur game:",
      seo: {
        title: "Offline Dinosaurus - Play the Chrome No-Internet Game Online",
        description: "Play Offline Dinosaurus, the famous Chrome browser game that appears when you have no internet. Jump, duck, and dodge in this addictive runner!",
        keywords: ["offline dinosaurus", "no internet game", "chrome dinosaur", "t-rex runner", "browser game"],
        canonicalUrl: "https://dinorunonline.com/offline-dinosaurus",
        ogImage: "https://dinorunonline.com/images/dino-game-screenshot.jpg",
        ogType: "website"
      } as SeoType,
      seoContent: {
        title: "Offline Dinosaurus - No Internet Required",
        subtitle: "The famous Chrome browser dinosaur game for no-internet situations",
        content: `Offline Dinosaurus brings Chrome's famous no-internet dinosaur game to your browser, available to play online anytime! Originally appearing only when your internet connection fails, you can now enjoy this addictive game whenever you want.

Control your pixelated dinosaur as it runs through a prehistoric landscape, jumping over cacti and ducking under flying obstacles. The game gets progressively faster as your score increases, making each run a unique challenge.

Play Offline Dinosaurus on any device - desktop computers, laptops, tablets, or smartphones. No downloads needed, and most importantly, no need to disconnect from the internet!`,
        keywords: ["offline dinosaurus", "no internet game", "offline chrome game", "t-rex runner", "jumping dinosaur"],
      },
      structuredData: {
        name: "Offline Dinosaurus",
        description: "Play Offline Dinosaurus, the famous Chrome browser game that appears when you have no internet. Jump, duck, and dodge in this addictive runner!"
      },
      relatedGames: [
        { path: "/chrome-dino", title: "Chrome Dino", description: "Original browser game" },
        { path: "/google-dino", title: "Google Dino", description: "T-Rex runner game" },
        { path: "/chromedino", title: "ChromeDino", description: "Classic dinosaur game" }
      ]
    },
    'chrome-dino-game': {
      header: "Chrome Dino Game - The Classic T-Rex Runner",
      subheader: "Play Google Chrome's famous offline dinosaur game online anytime!",
      howToPlayTitle: "How to Play Chrome Dino Game",
      variantsTitle: "More Chrome Dinosaur Games",
      variantsSubtitle: "Try these other versions of the Chrome dinosaur game:",
      seo: {
        title: "Chrome Dino Game - Play the T-Rex Runner Online",
        description: "Play the Chrome Dino Game online - the famous dinosaur runner from Google Chrome that appears when you have no internet connection.",
        keywords: ["chrome dino game", "t-rex runner", "dinosaur game", "chrome offline game", "jumping t-rex"],
        canonicalUrl: "https://dinorunonline.com/chrome-dino-game",
        ogImage: "https://dinorunonline.com/images/dino-game-screenshot.jpg",
        ogType: "website"
      } as SeoType,
      seoContent: {
        title: "Chrome Dino Game - T-Rex Runner Adventure",
        subtitle: "Google Chrome's famous offline dinosaur running game",
        content: `Chrome Dino Game is the popular mini-game from Google Chrome that appears when you're offline. Our online version brings this addictive T-Rex runner to your browser anytime, no internet disconnection required!

Help your pixelated dinosaur navigate through a desert landscape, jumping over cacti and avoiding pterodactyls. With simple controls - just space or up arrow to jump, and down arrow to duck - the game is easy to learn but challenging to master.

As your score increases, the game speeds up, making each jump more precise and the timing more critical. See how far you can go in this endless runner that has entertained millions of people during internet outages!`,
        keywords: ["chrome dino game", "t-rex runner", "offline dinosaur", "jumping game", "browser game"],
      },
      structuredData: {
        name: "Chrome Dino Game",
        description: "Play the Chrome Dino Game online - the famous dinosaur runner from Google Chrome that appears when you have no internet connection."
      },
      relatedGames: [
        { path: "/chrome-dino", title: "Chrome Dino", description: "Original version" },
        { path: "/t-rex-chrome", title: "T-Rex Chrome", description: "Classic runner game" },
        { path: "/offline-dinosaurus", title: "Offline Dinosaurus", description: "No-internet game" }
      ]
    },
    'google-game-dino': {
      header: "Google Game Dino - The Hidden Chrome Game",
      subheader: "Play Google's secret dinosaur game that appears when you lose internet!",
      howToPlayTitle: "How to Play Google Game Dino",
      variantsTitle: "Other Google Dinosaur Games",
      variantsSubtitle: "Explore these other versions of Google's dinosaur game:",
      seo: {
        title: "Google Game Dino - Play the Hidden Chrome Dinosaur Game",
        description: "Play Google Game Dino online - the hidden dinosaur game from Chrome browser. Jump over cacti, dodge pterodactyls, and set high scores!",
        keywords: ["google game dino", "chrome t-rex", "hidden game", "offline dinosaur", "jumping game"],
        canonicalUrl: "https://dinorunonline.com/google-game-dino",
        ogImage: "https://dinorunonline.com/images/dino-game-screenshot.jpg",
        ogType: "website"
      } as SeoType,
      seoContent: {
        title: "Google Game Dino - The Hidden Browser Game",
        subtitle: "The secret dinosaur game in Google Chrome",
        content: `Google Game Dino is Chrome browser's famous hidden game that appears when you have no internet connection. Now you can play this addictive T-Rex runner online anytime!

This simple yet challenging game features a pixelated dinosaur that must navigate through an endless desert landscape. Press space to jump over cacti and down arrow to duck under flying pterodactyls. The game gradually increases in speed as your score grows.

What started as a secret Easter egg in Chrome has become one of the most played casual games in the world. Our version brings all the fun of the original with enhanced visuals and smoother gameplay!`,
        keywords: ["google game dino", "chrome hidden game", "t-rex runner", "dinosaur game", "browser game"],
      },
      structuredData: {
        name: "Google Game Dino",
        description: "Play Google Game Dino online - the hidden dinosaur game from Chrome browser. Jump over cacti, dodge pterodactyls, and set high scores!"
      },
      relatedGames: [
        { path: "/google-dino", title: "Google Dino", description: "Classic version" },
        { path: "/chrome-dino", title: "Chrome Dino", description: "Original T-Rex game" },
        { path: "/chromedino", title: "ChromeDino", description: "Alternative version" }
      ]
    },
    't-rex-chrome-dino-game': {
      header: "T-Rex Chrome Dino Game - The Classic Runner",
      subheader: "Play Google Chrome's offline dinosaur game anytime - jump, duck, and dodge obstacles!",
      howToPlayTitle: "How to Play T-Rex Chrome Dino Game",
      variantsTitle: "More Dinosaur Runner Games",
      variantsSubtitle: "Check out these other T-Rex runner games:",
      seo: {
        title: "T-Rex Chrome Dino Game - Play the Classic Runner Online",
        description: "Play T-Rex Chrome Dino Game online! The famous dinosaur runner from Google Chrome, available anytime with no internet disconnection required.",
        keywords: ["t-rex chrome dino game", "chrome dinosaur", "offline game", "jumping t-rex", "browser game"],
        canonicalUrl: "https://dinorunonline.com/t-rex-chrome-dino-game",
        ogImage: "https://dinorunonline.com/images/dino-game-screenshot.jpg",
        ogType: "website"
      } as SeoType,
      seoContent: {
        title: "T-Rex Chrome Dino Game - The Complete Experience",
        subtitle: "The full version of Chrome's famous offline dinosaur game",
        content: `T-Rex Chrome Dino Game brings the complete experience of Google Chrome's hidden dinosaur runner to your browser anytime! Originally appearing only when you lose internet connection, our version lets you enjoy this addictive game whenever you want.

Control your pixelated T-Rex through an endless desert landscape, jumping over cacti and ducking under flying pterodactyls. The game progressively speeds up as your score increases, creating an ever-growing challenge.

With simple controls and addictive gameplay, it's no wonder this game has become a cultural phenomenon. Play on any device with a web browser - no downloads needed and no internet disconnection required!`,
        keywords: ["t-rex chrome dino game", "dinosaur runner", "chrome offline game", "jumping t-rex", "browser game"],
      },
      structuredData: {
        name: "T-Rex Chrome Dino Game",
        description: "Play T-Rex Chrome Dino Game online! The famous dinosaur runner from Google Chrome, available anytime with no internet disconnection required."
      },
      relatedGames: [
        { path: "/chrome-dino", title: "Chrome Dino", description: "Original version" },
        { path: "/t-rex-chrome", title: "T-Rex Chrome", description: "Classic dinosaur game" },
        { path: "/t-rex-chrome-dino", title: "T-Rex Chrome Dino", description: "Alternative version" }
      ]
    },
    'dino-run-game': {
      header: "Dino Run Game - Endless T-Rex Runner",
      subheader: "Control your dinosaur as it jumps, ducks, and runs through a prehistoric world!",
      howToPlayTitle: "How to Play Dino Run Game",
      variantsTitle: "More Dinosaur Running Games",
      variantsSubtitle: "Try these other exciting dinosaur runner games:",
      seo: {
        title: "Dino Run Game - Play the Classic T-Rex Runner Online",
        description: "Play Dino Run Game online for free. Control a jumping T-Rex, avoid obstacles, and achieve high scores in this endless runner adventure!",
        keywords: ["dino run game", "dinosaur runner", "t-rex game", "jumping dino", "endless runner"],
        canonicalUrl: "https://dinorunonline.com/dino-run-game",
        ogImage: "https://dinorunonline.com/images/dino-game-screenshot.jpg",
        ogType: "website"
      } as SeoType,
      seoContent: {
        title: "Dino Run Game - The Complete Dinosaur Runner",
        subtitle: "The full dinosaur running adventure",
        content: `Dino Run Game brings all the excitement of controlling a prehistoric T-Rex in a challenging endless runner format! Inspired by Chrome's famous offline dinosaur game, our enhanced version adds more features and improved graphics.

Navigate your dinosaur through a desert landscape filled with obstacles. Jump over cacti with the space bar or up arrow, and duck under pterodactyls with the down arrow. The game progressively speeds up as your score increases, testing your reflexes and timing.

This addictive runner works on all devices from desktop computers to smartphones. No downloads or plugins needed - just load the page and start your dinosaur adventure!`,
        keywords: ["dino run game", "t-rex runner", "dinosaur game", "endless runner", "jumping game"],
      },
      structuredData: {
        name: "Dino Run Game",
        description: "Play Dino Run Game online for free. Control a jumping T-Rex, avoid obstacles, and achieve high scores in this endless runner adventure!"
      },
      relatedGames: [
        { path: "/dino-run", title: "Dino Run", description: "Classic runner version" },
        { path: "/run-dino-run", title: "Run Dino Run", description: "Extended runner game" },
        { path: "/chrome-dino", title: "Chrome Dino", description: "Original Chrome game" }
      ]
    },
    't-rex-chrome-dino': {
      header: "T-Rex Chrome Dino - The Offline Runner",
      subheader: "Play the famous Chrome no-internet dinosaur game online anytime!",
      howToPlayTitle: "How to Play T-Rex Chrome Dino",
      variantsTitle: "More Chrome Dinosaur Games",
      variantsSubtitle: "Explore these other versions of the T-Rex runner game:",
      seo: {
        title: "T-Rex Chrome Dino - Play the Offline Dinosaur Game Online",
        description: "Play T-Rex Chrome Dino online - the famous offline game from Google Chrome. Jump over cacti, dodge pterodactyls, and set new high scores!",
        keywords: ["t-rex chrome dino", "chrome dinosaur", "offline game", "jumping t-rex", "browser game"],
        canonicalUrl: "https://dinorunonline.com/t-rex-chrome-dino",
        ogImage: "https://dinorunonline.com/images/dino-game-screenshot.jpg",
        ogType: "website"
      } as SeoType,
      seoContent: {
        title: "T-Rex Chrome Dino - The No-Internet Dinosaur",
        subtitle: "Google Chrome's famous offline dinosaur runner",
        content: `T-Rex Chrome Dino brings Chrome browser's iconic offline dinosaur game to life in your browser anytime! This beloved pixelated runner normally only appears when you have no internet connection, but our version lets you play whenever you want.

Control your T-Rex dinosaur as it runs through an endless desert landscape, jumping over cacti with the space bar and ducking under flying obstacles with the down arrow. The game gradually increases in speed, making each jump more challenging.

What started as a simple Easter egg in Chrome has become one of the most recognized casual games worldwide. Play T-Rex Chrome Dino on any device with a web browser - no downloads needed!`,
        keywords: ["t-rex chrome dino", "chrome offline game", "dinosaur runner", "jumping game", "browser game"],
      },
      structuredData: {
        name: "T-Rex Chrome Dino",
        description: "Play T-Rex Chrome Dino online - the famous offline game from Google Chrome. Jump over cacti, dodge pterodactyls, and set new high scores!"
      },
      relatedGames: [
        { path: "/chrome-dino", title: "Chrome Dino", description: "Original version" },
        { path: "/t-rex-chrome", title: "T-Rex Chrome", description: "Classic game" },
        { path: "/t-rex-chrome-dino-game", title: "T-Rex Chrome Dino Game", description: "Full game experience" }
      ]
    }
  };

  // Add aliases for all other supported paths
  const aliasMap: Record<string, string> = {
    'chromedino': 'chromedino', // No longer an alias, has its own data
    'google-dino': 'google-dino', // No longer an alias, has its own data
    'google-game-dino': 'google-game-dino', // No longer an alias, has its own data
    'chrome-dino-game': 'chrome-dino-game', // No longer an alias, has its own data
    't-rex-chrome': 't-rex-chrome', // No longer an alias, has its own data
    't-rex-chrome-dino': 't-rex-chrome-dino', // No longer an alias, has its own data
    't-rex-chrome-dino-game': 't-rex-chrome-dino-game', // No longer an alias, has its own data
    'offline-dinosaurus': 'offline-dinosaurus', // No longer an alias, has its own data
    'run-dino-run': 'run-dino-run', // No longer an alias, has its own data
    'dino-run-game': 'dino-run-game' // No longer an alias, has its own data
  };

  // If the path is an alias, use the data from the target path
  const targetPath = aliasMap[path] || path;
  
  // Return the data for the specific path, or the default data if not found
  return pathData[targetPath] || defaultData;
}

export default DinoGame; 