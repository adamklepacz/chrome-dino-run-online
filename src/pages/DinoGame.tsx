import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GameCanvas } from '@/components/dino';
import { Link } from 'react-router-dom';

const DinoGame = () => {
  return (
    <MainLayout seo={{
      title: 'Play Dino Run Online - Free Chrome Dinosaur Game',
      description: 'Play the classic Chrome Dinosaur Game online for free. Jump over cacti, dodge obstacles, and set new high scores in this T-Rex running adventure!',
      keywords: ['dino game', 'chrome dinosaur game', 't-rex game', 'chrome dino', 'dinosaur game', 'free online games', 'browser games', 'jumping dino'],
      canonicalUrl: 'https://dinorunonline.com/dino-game',
      ogImage: 'https://dinorunonline.com/images/dino-game-screenshot.jpg',
      ogType: 'website'
    }}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Chrome Dino Game - T-Rex Runner Adventure</h1>
          <p className="page-subtitle">
            Play the famous Chrome Dinosaur Game online! Help your T-Rex jump over cacti, dodge birds, and collect points to set new high scores. 
            No internet connection or Chrome browser required - play this classic runner game free in your browser anytime!
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
          <h2 className="text-2xl font-bold mb-4">How to Play The Chrome Dino Game</h2>
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
          <h2 className="text-2xl font-bold mb-6">More Dino Game Variants</h2>
          <p className="text-muted-foreground mb-6">If you enjoy the Chrome Dino Game, try our other variants with the same gameplay:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/chrome-dino-game" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Chrome Dino Game</h3>
              <p className="text-sm text-muted-foreground">The classic offline browser game</p>
            </Link>
            <Link to="/t-rex-game" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">T-Rex Game</h3>
              <p className="text-sm text-muted-foreground">Jump and dodge as a dinosaur</p>
            </Link>
            <Link to="/dino-run" className="p-4 border rounded-lg hover:bg-accent transition-colors text-center">
              <h3 className="font-semibold mb-2">Dino Run</h3>
              <p className="text-sm text-muted-foreground">Endless runner adventure</p>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">About the Chrome Dinosaur Game</h2>
          <div className="prose prose-sm max-w-none text-foreground/90">
            <p>The Chrome Dinosaur Game (also known as the T-Rex Game, Dino Runner, or the No Internet Game) was created as an Easter egg in the Google Chrome browser. It appears automatically when you try to visit a website while disconnected from the Internet.</p>
            <p>Our free online version brings this classic game to life with enhanced graphics and additional features, while maintaining the addictive simplicity of the original Chrome Dino runner. Play as the pixel T-Rex, jumping over cacti and dodging obstacles to achieve the highest score possible!</p>
            <p>This browser game works on all devices including desktops, laptops, tablets, and mobile phones. No download required - just load the page and start playing instantly!</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DinoGame; 