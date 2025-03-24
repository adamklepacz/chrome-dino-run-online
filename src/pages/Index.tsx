
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import GamePlaceholder from '@/components/GamePlaceholder';
import SeoContent from '@/components/SeoContent';

const Index = () => {
  const seo = {
    title: 'Najlepsze Darmowe Gry Online',
    description: 'Odkryj najlepsze darmowe gry online na GameTime. Graj w gry logiczne, zręcznościowe i strategiczne bez pobierania. Zabij nudę i spędź czas w przyjemny sposób.',
    keywords: ['darmowe gry online', 'gry przeglądarkowe', 'gry bez pobierania', 'gry logiczne', 'gry zręcznościowe'],
    canonicalUrl: 'https://gametime.example.com',
  };

  const seoContent = {
    title: 'Najlepsze Darmowe Gry Online',
    subtitle: 'Zabij nudę grając w nasze wciągające gry przeglądarkowe',
    content: `GameTime to najlepsze miejsce dla tych, którzy szukają szybkiej i wciągającej rozrywki. Nasze gry przeglądarkowe nie wymagają pobierania ani instalacji - wystarczy otworzyć stronę i zacząć grać!

Oferujemy szeroki wybór gier logicznych, zręcznościowych i strategicznych, które pomogą Ci zabić nudę i spędzić czas w przyjemny sposób. Wszystkie nasze gry są darmowe i dostępne 24/7.

Dzięki intuicyjnemu interfejsowi i prostym zasadom, nasze gry są odpowiednie zarówno dla początkujących, jak i zaawansowanych graczy. Nie czekaj - zacznij grać już teraz!`,
    keywords: ['darmowe gry online', 'gry przeglądarkowe', 'gry bez pobierania', 'gry logiczne', 'gry zręcznościowe', 'zabij nudę'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Witaj w świecie darmowych gier online</h1>
          <p className="page-subtitle">Zagraj w nasze wciągające gry bez pobierania i ciesz się rozrywką w każdej chwili.</p>
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4">
          <GamePlaceholder title="Wybrana Gra" />
        </div>
      </section>
      
      <SeoContent {...seoContent} />
    </MainLayout>
  );
};

export default Index;
