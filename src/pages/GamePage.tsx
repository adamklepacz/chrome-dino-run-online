import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GameCanvas } from '@/components/dino';
import SeoContent from '@/components/SeoContent';
import { useLocation, Link } from 'react-router-dom';

// This component will be used as a template for different game landing pages
const GamePage = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(1); // Remove leading slash
  
  // Based on the URL path, we'll show different content
  const gameData = getGameData(currentPath);
  
  return (
    <MainLayout seo={gameData.seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">{gameData.header}</h1>
          <p className="page-subtitle">{gameData.subheader}</p>
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4">
          <GameCanvas />
        </div>
      </section>
      
      <SeoContent {...gameData.seoContent} />
      
      <section className="section-container py-8 md:py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Try Other Dino Game Variants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gameData.relatedGames.map((game, index) => (
              <Link key={index} to={game.path} className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
                <h3 className="font-semibold mb-2">{game.title}</h3>
                <p className="text-sm text-muted-foreground">{game.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

// Helper function to get the page data based on the URL path
function getGameData(path: string) {
  // Default data if path doesn't match
  const defaultData = {
    header: 'Free Online Games',
    subheader: 'Enjoy unlimited online entertainment',
    gameTitle: 'Browser Game',
    seo: {
      title: 'Free Online Games - Play Without Download',
      description: 'Play engaging browser games without downloading. Kill boredom and have fun with our collection of free online games.',
      keywords: ['free online games', 'browser games', 'no download games', 'free games'],
      canonicalUrl: 'https://dinorunonline.com/free-online-games',
    },
    seoContent: {
      title: 'Free Browser Games',
      subtitle: 'Play without downloading and enjoy quality entertainment',
      content: 'Our collection of free online games offers something for everyone. All games can be played directly in your browser without downloads or installations. Whether you have a few minutes or hours to spare, our games are perfect for quick entertainment or longer gaming sessions.',
      keywords: ['free online games', 'browser games', 'no download games', 'instant play games'],
    },
    relatedGames: [
      { path: '/chrome-dino', title: 'Chrome Dino', description: 'Classic T-Rex runner' },
      { path: '/dino-game', title: 'Dino Game', description: 'Jump over obstacles' },
      { path: '/dino-run', title: 'Dino Run', description: 'Endless runner adventure' }
    ]
  };
  
  // Data for specific game pages
  const gamesData: Record<string, typeof defaultData> = {
    'chrome-dino': {
      header: 'Chrome Dino Game Online',
      subheader: 'Play the famous T-Rex runner from Chrome browser',
      gameTitle: 'Chrome Dino',
      seo: {
        title: 'Chrome Dino - Play the Original Chrome Dinosaur Game Online',
        description: 'Play the Chrome Dino game online anytime without losing internet connection. Jump over cacti, dodge pterodactyls in this classic T-Rex runner game.',
        keywords: ['chrome dino', 'chrome dinosaur game', 't-rex runner', 'dino game', 'chrome offline game'],
        canonicalUrl: 'https://dinorunonline.com/chrome-dino',
      },
      seoContent: {
        title: 'Chrome Dino Game',
        subtitle: 'The famous offline dinosaur game now available online',
        content: `The Chrome Dino game (also known as the T-Rex Runner) is Google Chrome's hidden easter egg that appears when you have no internet connection. Our version brings this beloved game online, letting you play anytime - not just when your internet is down!

Jump over cacti, dodge flying pterodactyls, and try to survive as long as possible in this classic endless runner game. The longer you play, the faster the game becomes, challenging your reflexes and timing.

Play Chrome Dino right in your browser without any downloads or plugins. Works perfectly on desktop, tablet, and mobile devices.`,
        keywords: ['chrome dino', 't-rex runner', 'dinosaur game', 'chrome browser game', 'offline dinosaur'],
      },
      relatedGames: [
        { path: '/chromedino', title: 'ChromeDino', description: 'Alternative version' },
        { path: '/dino-game', title: 'Dino Game', description: 'Classic game variant' },
        { path: '/t-rex-chrome', title: 'T-Rex Chrome', description: 'Dinosaur runner game' }
      ]
    },
    'chromedino': {
      header: 'ChromeDino - T-Rex Runner Game',
      subheader: 'Play the famous dinosaur game from Chrome browser',
      gameTitle: 'ChromeDino',
      seo: {
        title: 'ChromeDino - Play the T-Rex Runner Game Online',
        description: 'Play ChromeDino, the popular dinosaur runner game from Chrome browser. Jump over cacti, dodge obstacles, and set new high scores!',
        keywords: ['chromedino', 'chrome dino game', 't-rex runner', 'dinosaur game', 'chrome offline game'],
        canonicalUrl: 'https://dinorunonline.com/chromedino',
      },
      seoContent: {
        title: 'ChromeDino Game Online',
        subtitle: 'The popular T-Rex runner game from Chrome browser',
        content: `ChromeDino brings the beloved dinosaur runner game from Google Chrome to your browser, available anytime whether you're online or offline. Originally designed as an easter egg for Chrome's offline screen, this addictive game has gained worldwide popularity.

Help your pixelated T-Rex jump over cacti and dodge pterodactyls in this endless runner adventure. The game progressively increases in speed as you achieve higher scores, making each run a unique challenge that tests your reflexes.

No downloads needed - simply load the page and start playing on any device with a browser.`,
        keywords: ['chromedino', 'dino runner', 't-rex game', 'chrome dinosaur', 'jumping dinosaur'],
      },
      relatedGames: [
        { path: '/chrome-dino', title: 'Chrome Dino', description: 'Original dinosaur game' },
        { path: '/dino-game', title: 'Dino Game', description: 'Classic jumping game' },
        { path: '/chrome-dino-game', title: 'Chrome Dino Game', description: 'Full game experience' }
      ]
    },
    'dino-game': {
      header: 'Dino Game - T-Rex Runner Adventure',
      subheader: 'Jump, duck, and dodge obstacles in this classic game',
      gameTitle: 'Dino Game',
      seo: {
        title: 'Dino Game - Play the Classic T-Rex Runner Online',
        description: 'Play the Dino Game online for free. Jump over cacti, dodge obstacles, and set new high scores in this classic dinosaur running adventure!',
        keywords: ['dino game', 'dinosaur game', 't-rex runner', 'chrome dino', 'jumping dinosaur'],
        canonicalUrl: 'https://dinorunonline.com/dino-game',
      },
      seoContent: {
        title: 'Dino Game Online',
        subtitle: 'The classic dinosaur runner game available anytime',
        content: `Dino Game brings the beloved T-Rex runner to life online! This simple yet addictive game features a pixelated dinosaur that must jump over cacti and duck under flying obstacles to survive in a prehistoric landscape.

What started as a hidden feature in the Chrome browser has become a worldwide gaming phenomenon. Our version stays true to the original while adding enhanced graphics and features that make the game even more enjoyable.

Play Dino Game on any device with a web browser - no downloads required. Simply press space to jump (or tap on mobile devices) and see how far you can go!`,
        keywords: ['dino game', 't-rex runner', 'jumping dinosaur', 'chrome offline game', 'prehistoric runner'],
      },
      relatedGames: [
        { path: '/chrome-dino', title: 'Chrome Dino', description: 'Original browser game' },
        { path: '/dino-run', title: 'Dino Run', description: 'Endless runner version' },
        { path: '/t-rex-chrome', title: 'T-Rex Chrome', description: 'Classic dinosaur adventure' }
      ]
    },
    'dino-run': {
      header: 'Dino Run - Endless Runner Game',
      subheader: 'Help your dinosaur run, jump, and survive as long as possible',
      gameTitle: 'Dino Run',
      seo: {
        title: 'Dino Run - Play the Classic Dinosaur Running Game Online',
        description: 'Play Dino Run online, the famous endless runner game featuring a jumping T-Rex. Avoid obstacles and set high scores in this addictive game!',
        keywords: ['dino run', 'dinosaur game', 't-rex runner', 'chrome dino', 'jumping dinosaur'],
        canonicalUrl: 'https://dinorunonline.com/dino-run',
      },
      seoContent: {
        title: 'Dino Run Online',
        subtitle: 'The addictive T-Rex jumping game that never ends',
        content: `Dino Run brings the popular dinosaur endless runner game to your browser! Control a prehistoric T-Rex as it runs through a barren landscape, jumping over cacti and dodging flying pterodactyls.

This deceptively simple game becomes increasingly challenging as your score grows, with faster obstacles and changing day/night cycles that test your reflexes and concentration. Originally an offline easter egg in Chrome, our version lets you play anytime.

Dino Run works perfectly on all devices including desktops, laptops, tablets, and mobile phones. No download required - just load the page and start running!`,
        keywords: ['dino run', 'dinosaur runner', 't-rex game', 'endless runner', 'jumping dino'],
      },
      relatedGames: [
        { path: '/chrome-dino', title: 'Chrome Dino', description: 'Original browser game' },
        { path: '/dino-game', title: 'Dino Game', description: 'Classic dinosaur game' },
        { path: '/run-dino-run', title: 'Run Dino Run', description: 'Extended runner game' }
      ]
    },
    'google-dino': {
      header: 'Google Dino Game Online',
      subheader: 'Play the famous dinosaur game from Google Chrome',
      gameTitle: 'Google Dino',
      seo: {
        title: 'Google Dino - Play the Chrome T-Rex Game Online',
        description: 'Play the Google Dino game online anytime. No internet disconnection needed to enjoy this classic Chrome dinosaur runner game!',
        keywords: ['google dino', 'chrome dinosaur', 't-rex runner', 'dino game', 'chrome offline game'],
        canonicalUrl: 'https://dinorunonline.com/google-dino',
      },
      seoContent: {
        title: 'Google Dino Game',
        subtitle: 'The famous Chrome browser dinosaur game',
        content: `The Google Dino game (also known as the T-Rex Runner or the No Internet Game) is a hidden game in the Chrome browser that appears when you have no internet connection. Now you can play this addictive dinosaur runner anytime!

Our online version brings all the fun of the original Google Chrome dinosaur game, letting you jump over cacti, dodge pterodactyls, and achieve high scores in this endless runner adventure.

Play Google Dino on any device - no downloads or Chrome browser required. Just load the page and start jumping!`,
        keywords: ['google dino', 'chrome dinosaur', 't-rex runner', 'no internet game', 'browser game'],
      },
      relatedGames: [
        { path: '/chrome-dino', title: 'Chrome Dino', description: 'Original T-Rex game' },
        { path: '/dino-game', title: 'Dino Game', description: 'Classic dinosaur game' },
        { path: '/google-game-dino', title: 'Google Game Dino', description: 'Alternative version' }
      ]
    },
    'run-dino-run': {
      header: 'Run Dino Run - T-Rex Runner Game',
      subheader: 'The classic dinosaur endless runner game',
      gameTitle: 'Run Dino Run',
      seo: {
        title: 'Run Dino Run - Play the Classic T-Rex Runner Game Online',
        description: 'Play Run Dino Run online, the exciting dinosaur runner game. Jump over obstacles, dodge pterodactyls, and set new high scores!',
        keywords: ['run dino run', 'dinosaur game', 't-rex runner', 'chrome dino', 'endless runner'],
        canonicalUrl: 'https://dinorunonline.com/run-dino-run',
      },
      seoContent: {
        title: 'Run Dino Run Game',
        subtitle: 'The addictive dinosaur endless runner',
        content: `Run Dino Run brings the classic Chrome dinosaur game to life in your browser! Control a prehistoric T-Rex as it runs through a desert landscape, jumping over cacti and avoiding flying obstacles.

This exciting endless runner gets progressively faster and more challenging as your score increases, testing your reflexes and concentration. What started as a simple offline game in Chrome has become a worldwide phenomenon.

Run Dino Run works on all devices including desktop computers, laptops, tablets, and smartphones. No download necessary - just open the page and start running!`,
        keywords: ['run dino run', 't-rex jumper', 'dinosaur runner', 'chrome offline game', 'endless runner'],
      },
      relatedGames: [
        { path: '/chrome-dino', title: 'Chrome Dino', description: 'Original browser game' },
        { path: '/dino-run', title: 'Dino Run', description: 'Classic endless runner' },
        { path: '/dino-game', title: 'Dino Game', description: 'T-Rex jumping game' }
      ]
    },
    't-rex-chrome': {
      header: 'T-Rex Chrome - Dinosaur Runner Game',
      subheader: 'The classic Chrome browser dinosaur game',
      gameTitle: 'T-Rex Chrome',
      seo: {
        title: 'T-Rex Chrome - Play the Dinosaur Runner Game Online',
        description: 'Play T-Rex Chrome, the famous dinosaur game from Chrome browser. Jump over cacti and dodge flying obstacles in this classic runner!',
        keywords: ['t-rex chrome', 'chrome dinosaur', 'dino game', 'chrome runner', 'jumping t-rex'],
        canonicalUrl: 'https://dinorunonline.com/t-rex-chrome',
      },
      seoContent: {
        title: 'T-Rex Chrome Game',
        subtitle: 'The iconic dinosaur runner from Chrome browser',
        content: `T-Rex Chrome brings the beloved dinosaur runner game from Google Chrome to your browser, available anytime without needing an internet disconnection. This iconic game features a pixelated T-Rex that must jump over cacti and dodge pterodactyls in an endless desert landscape.

Originally created as an easter egg for Chrome's offline page, this simple yet addictive game has captured the hearts of millions of players worldwide. Our version stays true to the original while adding enhanced features.

Play T-Rex Chrome on any device with a web browser - no downloads needed. Just press space (or tap on mobile) and see how far your dinosaur can run!`,
        keywords: ['t-rex chrome', 'chrome dinosaur', 'dino runner', 'jumping t-rex', 'chrome offline game'],
      },
      relatedGames: [
        { path: '/chrome-dino', title: 'Chrome Dino', description: 'Original browser game' },
        { path: '/t-rex-chrome-dino', title: 'T-Rex Chrome Dino', description: 'Extended version' },
        { path: '/dino-game', title: 'Dino Game', description: 'Classic dinosaur game' }
      ]
    },
    'offline-dinosaurus': {
      header: 'Offline Dinosaurus Game',
      subheader: 'Play the famous Chrome offline dinosaur game anytime',
      gameTitle: 'Offline Dinosaurus',
      seo: {
        title: 'Offline Dinosaurus - Play Chrome\'s Famous No-Internet Game Online',
        description: 'Play the Offline Dinosaurus game from Chrome browser anytime, without losing internet connection. Jump and dodge in this classic T-Rex runner!',
        keywords: ['offline dinosaurus', 'chrome dinosaur', 'no internet game', 'dinosaur runner', 't-rex game'],
        canonicalUrl: 'https://dinorunonline.com/offline-dinosaurus',
      },
      seoContent: {
        title: 'Offline Dinosaurus Game',
        subtitle: 'Chrome\'s hidden dinosaur game now available online',
        content: `Offline Dinosaurus brings Chrome's famous no-internet dinosaur game online! Originally appearing only when your internet connection fails, our version lets you play this addictive runner game anytime.

Control the pixelated T-Rex dinosaur as it runs through a desert landscape, jumping over cacti and ducking under flying pterodactyls. The game gradually increases in speed as your score grows, providing an ever-increasing challenge.

Play Offline Dinosaurus on desktop or mobile devices without needing to disconnect from the internet. No downloads required - just load the page and start jumping!`,
        keywords: ['offline dinosaurus', 'no internet game', 'chrome dinosaur', 't-rex runner', 'jumping dinosaur'],
      },
      relatedGames: [
        { path: '/chrome-dino', title: 'Chrome Dino', description: 'Original browser game' },
        { path: '/dino-game', title: 'Dino Game', description: 'Classic dinosaur game' },
        { path: '/t-rex-chrome', title: 'T-Rex Chrome', description: 'Chrome browser game' }
      ]
    },
    // Additional pages for other keywords
    'chrome-dino-game': {
      header: 'Chrome Dino Game - T-Rex Runner Adventure',
      subheader: 'Play the famous dinosaur game from Chrome browser',
      gameTitle: 'Chrome Dino Game',
      seo: {
        title: 'Chrome Dino Game - Play the Classic T-Rex Runner Online',
        description: 'Play the Chrome Dino Game online for free. Jump over cacti and dodge pterodactyls in this classic dinosaur runner from Google Chrome!',
        keywords: ['chrome dino game', 't-rex runner', 'dinosaur game', 'offline chrome game', 'jumping t-rex'],
        canonicalUrl: 'https://dinorunonline.com/chrome-dino-game',
      },
      seoContent: {
        title: 'Chrome Dino Game Online',
        subtitle: 'The classic T-Rex runner from Chrome browser',
        content: `Chrome Dino Game brings Google Chrome's famous dinosaur runner online! This beloved game, originally appearing only when you lost internet connection, can now be played anytime.

Control your pixelated T-Rex as it runs through a desert landscape, jumping over cacti and dodging pterodactyls. The game gets progressively faster and more challenging as your score increases, testing your reflexes and timing.

Our version of Chrome Dino Game works flawlessly on all devices from desktops to mobile phones. No downloads needed - just load the page and start running!`,
        keywords: ['chrome dino game', 't-rex runner', 'dinosaur game', 'offline chrome game', 'jumping dinosaur'],
      },
      relatedGames: [
        { path: '/chrome-dino', title: 'Chrome Dino', description: 'Original browser game' },
        { path: '/dino-game', title: 'Dino Game', description: 'Classic dinosaur game' },
        { path: '/t-rex-chrome-dino-game', title: 'T-Rex Chrome Dino Game', description: 'Extended version' }
      ]
    },
    // Continue with other keyword variations...
    'free-online-game': {
      header: 'Free Online Game - Play Without Download',
      subheader: 'Enjoy our collection of browser games that require no installation or download',
      gameTitle: 'Free Online Game',
      seo: {
        title: 'Free Online Game - Play Browser Games Without Download',
        description: 'Play our selection of free online games directly in your browser. No downloads, no installations - just pure gaming fun for everyone!',
        keywords: ['free online game', 'browser games', 'no download games', 'play for free', 'internet games', 'online gaming'],
        canonicalUrl: 'https://dinorunonline.com/free-online-game',
      },
      seoContent: {
        title: 'Free Online Game - Instant Entertainment',
        subtitle: 'Play amazing browser games without downloading anything',
        content: `Our free online game collection brings you immediate entertainment without the hassle of downloads, registrations, or hidden costs. Jump straight into the action with our selection of browser-based games that load instantly and run smoothly on any device.

The crown jewel of our collection is the Chrome Dino Game - the famous T-Rex runner that's usually only available when your internet connection is down. Now you can play this addictive game and many others anytime, directly in your browser!

From casual mini-games to more challenging adventures, our free online game selection has something for everyone. All games are optimized for both desktop and mobile play, ensuring a great gaming experience whether you're at home or on the go.`,
        keywords: ['free online game', 'browser games', 'no download games', 'play for free', 'instant games', 'chrome dino'],
      },
      relatedGames: [
        { path: '/chrome-dino', title: 'Chrome Dino', description: 'Classic T-Rex runner' },
        { path: '/dino-game', title: 'Dino Game', description: 'Dinosaur jumping game' },
        { path: '/simple-web-game', title: 'Simple Web Game', description: 'Easy to play browser game' }
      ]
    },
    'simple-web-game': {
      header: 'Simple Web Game - Easy to Learn, Fun to Master',
      subheader: 'Play straightforward browser games that are perfect for quick gaming sessions',
      gameTitle: 'Simple Web Game',
      seo: {
        title: 'Simple Web Game - Easy-to-Play Browser Games',
        description: 'Enjoy our simple web games that are easy to learn but challenging to master. Perfect for quick gaming sessions in your browser!',
        keywords: ['simple web game', 'easy browser games', 'quick online games', 'casual gaming', 'no download games'],
        canonicalUrl: 'https://dinorunonline.com/simple-web-game',
      },
      seoContent: {
        title: 'Simple Web Game - Quick Entertainment',
        subtitle: 'Easy-to-learn games that provide hours of fun',
        content: `Our simple web games offer the perfect balance between accessibility and challenge. These browser-based games can be learned in seconds but provide hours of entertainment as you try to beat your high scores and master the mechanics.

The Chrome Dino Game is a perfect example of a simple web game - just press space to jump over cacti and duck under pterodactyls, but mastering the timing and reflexes to achieve a high score takes practice and skill. This combination of simplicity and depth is what makes web games so addictive.

Our collection of simple web games works on any device with a browser, with no downloads or installations required. These games are perfect for quick gaming sessions during breaks, commutes, or whenever you have a few minutes to spare and need some quick entertainment!`,
        keywords: ['simple web game', 'easy browser games', 'quick online games', 'casual gaming', 'no download games'],
      },
      relatedGames: [
        { path: '/chrome-dino', title: 'Chrome Dino', description: 'Classic T-Rex runner' },
        { path: '/dino-game', title: 'Dino Game', description: 'Dinosaur jumping game' },
        { path: '/free-online-game', title: 'Free Online Game', description: 'No download required' }
      ]
    },
    // Remaining categories remain largely unchanged
    'logic-games': {
      header: 'Logic Games Online',
      subheader: 'Solve puzzles and exercise your mind with our collection of logic games',
      gameTitle: 'Logic Game',
      seo: {
        title: 'Logic Games Online - Solve Puzzles & Exercise Your Mind',
        description: 'Play our free online logic games. Solve puzzles, exercise your brain and have fun without downloading.',
        keywords: ['logic games', 'online puzzles', 'brain teasers', 'thinking games', 'mind training'],
        canonicalUrl: 'https://dinorunonline.com/logic-games',
      },
      seoContent: {
        title: 'Logic Games Online',
        subtitle: 'Develop your mind by solving interesting puzzles',
        content: `Our online logic games are perfect for anyone who enjoys intellectual challenges. These games offer a variety of puzzles that require logical thinking, analysis, and creativity.

Scientific research shows that regularly solving puzzles and brain teasers helps keep your mind in good condition, improves memory and concentration, and can delay brain aging processes.

Start playing now and discover how engaging our logic games can be. No download required, works directly in your browser, and is completely free!`,
        keywords: ['logic games', 'online puzzles', 'brain teasers', 'thinking games', 'mind training'],
      },
      relatedGames: [
        { path: '/dino-game', title: 'Dino Game', description: 'Classic T-Rex runner' },
        { path: '/chrome-dino-game', title: 'Chrome Dino Game', description: 'The famous offline game' },
        { path: '/t-rex-game', title: 'T-Rex Game', description: 'Jump and dodge obstacles' }
      ]
    },
    'arcade-games': {
      header: 'Arcade Games Online',
      subheader: 'Test your reflexes and coordination with our exciting arcade games',
      gameTitle: 'Arcade Game',
      seo: {
        title: 'Arcade Games Online - Test Your Reflexes',
        description: 'Play our free online arcade games. Test your reflexes, coordination, and precision without downloading.',
        keywords: ['arcade games', 'reflex games', 'fast games', 'action games online', 'coordination games'],
        canonicalUrl: 'https://dinorunonline.com/arcade-games',
      },
      seoContent: {
        title: 'Arcade Games Online',
        subtitle: 'Test your skills in dynamic action games',
        content: `Our online arcade games are an excellent way to test your skills and have fun. They require quick decision-making, precision, and excellent reflexes. Perfect entertainment for those who enjoy dynamic action and challenges.

Arcade games are not just great fun but also an excellent way to improve hand-eye coordination, reflexes, and concentration. Regular gaming can help develop these skills, which are useful not only in games but also in everyday life.

Don't wait, play now directly in your browser, without downloading or registration. Our arcade games are completely free and available 24/7!`,
        keywords: ['arcade games', 'reflex games', 'fast games', 'action games online', 'coordination games'],
      },
      relatedGames: [
        { path: '/dino-game', title: 'Dino Game', description: 'Classic T-Rex runner' },
        { path: '/t-rex-game', title: 'T-Rex Game', description: 'Jump and dodge obstacles' },
        { path: '/chrome-dino-game', title: 'Chrome Dino Game', description: 'The famous offline game' }
      ]
    },
    'strategy-games': {
      header: 'Strategy Games Online',
      subheader: 'Plan, build and conquer in our engaging strategy games',
      gameTitle: 'Strategy Game',
      seo: {
        title: 'Strategy Games Online - Plan, Build and Conquer',
        description: 'Play our free online strategy games. Plan tactics, build your empire, and conquer new territories without downloading.',
        keywords: ['strategy games', 'online strategy', 'tactical games', 'empire building', 'planning games'],
        canonicalUrl: 'https://dinorunonline.com/strategy-games',
      },
      seoContent: {
        title: 'Strategy Games Online',
        subtitle: 'Build, plan, and manage your virtual empire',
        content: `Our online strategy games offer a unique experience for players who like to plan ahead and make decisions with long-term consequences. These games value not just reaction speed but primarily the ability to anticipate, plan, and adapt to changing conditions.

Strategy games are an excellent way to develop analytical thinking, planning, and resource management skills. Studies show that regular strategy gaming can improve problem-solving abilities and decision-making.

Begin your adventure with our strategy games now. They work directly in your browser, require no download or installation, and are completely free. Build your empire, forge alliances, and conquer new territories!`,
        keywords: ['strategy games', 'online strategy', 'tactical games', 'empire building', 'planning games'],
      },
      relatedGames: [
        { path: '/dino-game', title: 'Dino Game', description: 'Classic T-Rex runner' },
        { path: '/chrome-dino-game', title: 'Chrome Dino Game', description: 'The famous offline game' },
        { path: '/t-rex-game', title: 'T-Rex Game', description: 'Jump and dodge obstacles' }
      ]
    },
    'browser-games': {
      header: 'Browser Games',
      subheader: 'Play instantly without downloads or installations',
      gameTitle: 'Browser Game',
      seo: {
        title: 'Browser Games - Play Instantly Without Downloads',
        description: 'Enjoy our collection of free browser games that you can play instantly without downloads, plugins, or installations.',
        keywords: ['browser games', 'no download games', 'instant play games', 'HTML5 games', 'free online games'],
        canonicalUrl: 'https://dinorunonline.com/browser-games',
      },
      seoContent: {
        title: 'Browser Games',
        subtitle: 'Instant entertainment at your fingertips',
        content: `Our browser games collection offers immediate entertainment without the hassle of downloads or installations. Using modern HTML5 technology, these games run smoothly in any modern browser on any device.

Browser games are perfect for quick gaming sessions during short breaks or when you're looking for instant entertainment. With no waiting for downloads or updates, you can jump right into the action and start having fun immediately.

Our collection includes a variety of genres, from action and arcade to puzzles and strategy. All games are optimized for both desktop and mobile play, ensuring a great gaming experience no matter where you are or what device you're using.`,
        keywords: ['browser games', 'no download games', 'instant play games', 'HTML5 games', 'free online games'],
      },
      relatedGames: [
        { path: '/dino-game', title: 'Dino Game', description: 'Classic T-Rex runner' },
        { path: '/chrome-dino-game', title: 'Chrome Dino Game', description: 'The famous offline game' },
        { path: '/t-rex-game', title: 'T-Rex Game', description: 'Jump and dodge obstacles' }
      ]
    },
    'free-online-games': {
      header: 'Free Online Games',
      subheader: 'The best collection of free games you can play in your browser',
      gameTitle: 'Free Online Game',
      seo: {
        title: 'Free Online Games - Play the Best Games Without Cost',
        description: 'Access our collection of completely free online games. No hidden costs, no subscriptions, just pure entertainment at zero cost.',
        keywords: ['free online games', 'free games', 'no cost games', 'play for free', 'browser games'],
        canonicalUrl: 'https://dinorunonline.com/free-online-games',
      },
      seoContent: {
        title: 'Free Online Games',
        subtitle: 'Entertainment that doesn\'t cost a penny',
        content: `Our collection of free online games proves that quality entertainment doesn't have to cost anything. We offer a wide variety of games across different genres, all completely free with no hidden costs or paywalls.

Whether you're looking for action, strategy, puzzles, or the classic Chrome Dino game, our collection has something for everyone. All games are designed to work flawlessly in your browser without requiring any downloads or installations.

We regularly update our library with new games to ensure there's always something fresh to try. Bookmark our site and check back often to discover new additions to our growing collection of free online games.`,
        keywords: ['free online games', 'free games', 'no cost games', 'play for free', 'browser games'],
      },
      relatedGames: [
        { path: '/dino-game', title: 'Dino Game', description: 'Classic T-Rex runner' },
        { path: '/chrome-dino-game', title: 'Chrome Dino Game', description: 'The famous offline game' },
        { path: '/t-rex-game', title: 'T-Rex Game', description: 'Jump and dodge obstacles' }
      ]
    },
  };
  
  // Add aliases for similar routes
  gamesData['google-game-dino'] = gamesData['google-dino'];
  gamesData['t-rex-chrome-dino-game'] = gamesData['t-rex-chrome'];
  gamesData['dino-run-game'] = gamesData['dino-run'];
  gamesData['t-rex-chrome-dino'] = gamesData['t-rex-chrome'];
  gamesData['simple-web-games'] = gamesData['simple-web-game'];
  
  return gamesData[path] || defaultData;
}

export default GamePage;
