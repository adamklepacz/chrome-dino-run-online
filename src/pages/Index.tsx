import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import GamePlaceholder from '@/components/GamePlaceholder';
import SeoContent from '@/components/SeoContent';
import { Link } from 'react-router-dom';
import { GameCanvas } from '@/components/dino';

const Index = () => {
  const seo = {
    title: 'Play Jumping Dino – Free Online Game',
    description: 'Discover our addictive Jumping Dino adventure. Play free online games with no download on GameTime—fun, fast, and accessible on any device!',
    keywords: ['free online games', 'Jumping Dino', 'Chrome Dino alternative', 'adventure browser game', 'no download games'],
    canonicalUrl: 'https://gametime.example.com',
  };

  const seoContent = {
    title: 'Best Free Online Games – Entertainment at Your Fingertips',
    subtitle: 'Your go-to destination for simple yet highly engaging browser games',
    content: `GameTime is your go-to destination for simple yet highly engaging browser games. Our library of free online games is constantly growing, offering titles for every taste—from action-packed adventures to relaxing puzzles. Every game is accessible without downloading any software, so you can jump right into the action on your computer, tablet, or smartphone.`,
    keywords: ['free online games', 'browser games', 'no download', 'adventure games', 'puzzle games', 'action games'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Welcome to the World of Free Online Games!</h1>
          <p className="page-subtitle">Play our thrilling adventure game "Jumping Dino" with no downloads required—experience nonstop fun wherever you are. Easy mechanics, addictive gameplay, and free access make it the perfect way to spend a few spare minutes.</p>
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Jumping Dino – Embark on a Prehistoric Adventure</h2>
          <p className="text-lg text-center mb-8 text-muted-foreground">
            Help your friendly dinosaur leap over obstacles and collect points to beat your high score! Inspired by the popular Chrome Dino game, our browser-based adventure promises quick and exciting fun—no installation needed. All you need is a web browser and quick reflexes to immerse yourself in this prehistoric world.
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
