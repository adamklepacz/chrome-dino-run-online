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
      { path: '/dino-game', title: 'Dino Game', description: 'Classic T-Rex runner' },
      { path: '/chrome-dino-game', title: 'Chrome Dino Game', description: 'The famous offline game' },
      { path: '/t-rex-game', title: 'T-Rex Game', description: 'Jump and dodge obstacles' }
    ]
  };
  
  // Data for specific game pages
  const gamesData: Record<string, typeof defaultData> = {
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
    'dino-run': {
      header: 'Dino Run Online',
      subheader: 'The classic endless runner featuring a prehistoric hero',
      gameTitle: 'Dino Run',
      seo: {
        title: 'Dino Run Online - Play the Classic T-Rex Runner Game',
        description: 'Play Dino Run online, the famous endless runner game featuring a jumping dinosaur. No internet connection required to enjoy this classic.',
        keywords: ['dino run', 'dinosaur game', 't-rex runner', 'chrome dino game', 'jumping dinosaur'],
        canonicalUrl: 'https://dinorunonline.com/dino-run',
      },
      seoContent: {
        title: 'Dino Run Online',
        subtitle: 'The addictive T-Rex jumping game that never ends',
        content: `Dino Run is the popular endless runner game featuring a pixelated T-Rex jumping over cacti and dodging obstacles. Originally appearing as an Easter egg in the Chrome browser when you have no internet connection, our version brings the classic gameplay to life with enhanced features and constant availability.

The game is deceptively simple yet incredibly addictive. Just press space to jump over obstacles and duck to avoid flying pterodactyls. As your score increases, the game speeds up, making each successive jump more challenging than the last.

Our version of Dino Run works on all devices including desktops, laptops, tablets, and mobile phones. No download required - just load the page and start playing instantly!`,
        keywords: ['dino run', 'dinosaur game', 't-rex runner', 'chrome dino game', 'jumping dinosaur'],
      },
      relatedGames: [
        { path: '/chrome-dino-game', title: 'Chrome Dino Game', description: 'The famous offline game' },
        { path: '/t-rex-game', title: 'T-Rex Game', description: 'Jump and dodge obstacles' },
        { path: '/dinosaur-game', title: 'Dinosaur Game', description: 'Classic endless runner' }
      ]
    }
  };
  
  // Add aliases for similar routes
  gamesData['chrome-dino-game'] = gamesData['dino-run'];
  gamesData['t-rex-game'] = gamesData['dino-run'];
  gamesData['dinosaur-game'] = gamesData['dino-run'];
  gamesData['dino-adventure'] = gamesData['dino-run'];
  gamesData['dino-jump'] = gamesData['dino-run'];
  
  return gamesData[path] || defaultData;
}

export default GamePage;
