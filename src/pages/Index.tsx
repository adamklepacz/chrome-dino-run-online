import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import SeoContent from '@/components/SeoContent';
import { Link } from 'react-router-dom';
import { GameCanvas } from '@/components/dino';

const Index = () => {
  const seo = {
    title: 'Play Chrome Dino Game Online - Free T-Rex Runner Game',
    description: 'Play the famous Chrome Dinosaur Game online anytime. No internet connection needed to enjoy this classic T-Rex runner game on DinoRunOnline!',
    keywords: ['chrome dino game', 't-rex runner', 'dino run', 'dinosaur game', 'chrome offline game', 'no download games'],
    canonicalUrl: 'https://dinorunonline.com',
    ogImage: 'https://dinorunonline.com/images/dino-game-screenshot.jpg',
  };

  const seoContent = {
    title: 'Chrome Dinosaur Game - Play the T-Rex Runner Online',
    subtitle: 'The famous offline dinosaur game now available online anytime',
    content: `DinoRunOnline brings the classic Chrome Dinosaur Game to life, letting you play anytime - not just when your internet is down! Our version stays true to the original T-Rex runner while adding enhanced features and graphics. Jump over cacti, dodge pterodactyls, and set new high scores in this addictive endless runner game that works on any device with a web browser.`,
    keywords: ['chrome dinosaur game', 't-rex runner', 'dino run', 'chrome offline game', 'browser games', 'endless runner'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Play the Chrome Dinosaur Game Online!</h1>
          <p className="page-subtitle">Enjoy the famous T-Rex runner game with no internet connection required. Jump over cacti, dodge obstacles, and see how far you can go in this classic endless runner game.</p>
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Chrome Dino Game – T-Rex Runner Adventure</h2>
          <p className="text-lg text-center mb-8 text-muted-foreground">
            Help your pixelated T-Rex dodge obstacles and survive as long as possible in this classic game! Originally an Easter egg in the Chrome browser, our online version lets you play anytime, with the same addictive gameplay that's made this simple runner game a worldwide phenomenon.
          </p>
          <div className="mb-8 flex justify-center">
            <Link 
              to="/dino-game" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-6 rounded-lg text-lg font-medium transition-colors"
            >
              Play Dino Game Now →
            </Link>
          </div>
          <GameCanvas />
          <div className="mt-6 text-center">
            <Link to="/faq" className="text-primary hover:text-primary/80 transition-colors">
              Have questions? Check our FAQ →
            </Link>
          </div>
        </div>
      </section>
      
      <SeoContent {...seoContent} />
    </MainLayout>
  );
};

export default Index;
