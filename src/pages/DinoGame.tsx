import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GameCanvas } from '@/components/dino';

const DinoGame = () => {
  return (
    <MainLayout seo={{
      title: 'Dino Run - Embark on a Prehistoric Adventure',
      description: 'Play our thrilling browser-based Dino Run game - inspired by the Chrome Dino game. Jump, shoot, and collect weapons in this exciting prehistoric adventure!',
      keywords: ['dino game', 'jumping dino', 'chrome dino', 'browser game', 'free online game'],
      canonicalUrl: 'https://gametime.example.com/dino-game',
    }}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Jumping Dino - Embark on a Prehistoric Adventure</h1>
          <p className="page-subtitle">
            Help your friendly dinosaur leap over obstacles and collect points to beat your high score! 
            Inspired by the popular Chrome Dino game, our browser-based adventure promises quick and exciting fun—no installation needed.
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
          <h2 className="text-2xl font-bold mb-4">How to Play</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Controls</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>SPACE:</strong> Jump over obstacles</li>
                <li><strong>SHIFT:</strong> Shoot (when weapon collected)</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Game Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Collect weapons to shoot enemies</li>
                <li>Jump over cacti and obstacles</li>
                <li>Increasing difficulty as you progress</li>
                <li>Track your high score</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DinoGame; 