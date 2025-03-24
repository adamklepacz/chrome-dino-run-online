
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import GamePlaceholder from '@/components/GamePlaceholder';
import SeoContent from '@/components/SeoContent';
import { useParams } from 'react-router-dom';

// This component will be used as a template for different game landing pages
const GamePage = () => {
  const { gameSlug } = useParams<{ gameSlug: string }>();
  
  // Based on the URL slug, we'll show different content
  const gameData = getGameData(gameSlug);
  
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
          <GamePlaceholder title={gameData.gameTitle} />
        </div>
      </section>
      
      <SeoContent {...gameData.seoContent} />
    </MainLayout>
  );
};

// Helper function to get the page data based on the URL slug
function getGameData(slug: string | undefined) {
  // Default data if slug doesn't match
  const defaultData = {
    header: 'Gra Przeglądarkowa',
    subheader: 'Ciesz się rozrywką online bez ograniczeń',
    gameTitle: 'Gra',
    seo: {
      title: 'Gra Przeglądarkowa',
      description: 'Zagraj w wciągającą grę przeglądarkową bez pobierania. Zabij nudę i spędź czas w przyjemny sposób.',
      keywords: ['gra przeglądarkowa', 'gra online', 'gra bez pobierania'],
      canonicalUrl: 'https://gametime.example.com/gra',
    },
    seoContent: {
      title: 'Wciągająca Gra Przeglądarkowa',
      subtitle: 'Zagraj bez pobierania i ciesz się rozrywką',
      content: 'Treść SEO dla tej gry przeglądarkowej...',
      keywords: ['gra przeglądarkowa', 'gra online', 'gra bez pobierania'],
    }
  };
  
  // Data for specific game pages
  const gamesData: Record<string, typeof defaultData> = {
    'gra-logiczna': {
      header: 'Gra Logiczna Online',
      subheader: 'Rozwiąż zagadki i ćwicz umysł z naszą grą logiczną',
      gameTitle: 'Gra Logiczna',
      seo: {
        title: 'Gra Logiczna Online - Rozwiąż Zagadki i Ćwicz Umysł',
        description: 'Zagraj w naszą darmową grę logiczną online. Rozwiązuj zagadki, ćwicz umysł i baw się dobrze bez pobierania.',
        keywords: ['gra logiczna', 'łamigłówki online', 'zagadki', 'gry na myślenie', 'trening umysłu'],
        canonicalUrl: 'https://gametime.example.com/gra-logiczna',
      },
      seoContent: {
        title: 'Gra Logiczna Online',
        subtitle: 'Rozwijaj swój umysł rozwiązując ciekawe zagadki',
        content: `Nasza gra logiczna online to idealne rozwiązanie dla każdego, kto lubi wyzwania intelektualne. Gra oferuje szereg różnorodnych zagadek, które wymagają logicznego myślenia, analizy i kreatywności.

Badania naukowe dowodzą, że regularne rozwiązywanie zagadek i łamigłówek pomaga utrzymać umysł w dobrej kondycji, poprawia pamięć i koncentrację oraz może opóźnić procesy starzenia się mózgu.

Zacznij grać już teraz i przekonaj się, jak wciągająca może być nasza gra logiczna. Nie wymaga pobierania, działa bezpośrednio w przeglądarce i jest całkowicie darmowa!`,
        keywords: ['gra logiczna', 'łamigłówki online', 'zagadki', 'gry na myślenie', 'trening umysłu'],
      }
    },
    'gra-zrecznosciowa': {
      header: 'Gra Zręcznościowa Online',
      subheader: 'Sprawdź swój refleks i koordynację w naszej grze zręcznościowej',
      gameTitle: 'Gra Zręcznościowa',
      seo: {
        title: 'Gra Zręcznościowa Online - Sprawdź Swój Refleks',
        description: 'Zagraj w naszą darmową grę zręcznościową online. Sprawdź swój refleks, koordynację i precyzję bez pobierania gry.',
        keywords: ['gra zręcznościowa', 'gra na refleks', 'szybkie gry', 'gry akcji online', 'gry na koordynację'],
        canonicalUrl: 'https://gametime.example.com/gra-zrecznosciowa',
      },
      seoContent: {
        title: 'Gra Zręcznościowa Online',
        subtitle: 'Sprawdź swoje umiejętności w dynamicznej grze akcji',
        content: `Nasza gra zręcznościowa online to doskonały sposób na sprawdzenie swoich umiejętności i dobrą zabawę. Wymaga szybkiego podejmowania decyzji, precyzji i doskonałego refleksu. To idealna rozrywka dla tych, którzy lubią dynamiczną akcję i wyzwania.

Gra zręcznościowa to nie tylko świetna zabawa, ale także doskonały sposób na poprawę koordynacji ręka-oko, refleksu i koncentracji. Regularne granie może pomóc w rozwijaniu tych umiejętności, które przydają się nie tylko w grach, ale także w codziennym życiu.

Nie czekaj, zagraj już teraz bezpośrednio w przeglądarce, bez pobierania i rejestracji. Nasza gra zręcznościowa jest całkowicie darmowa i dostępna 24/7!`,
        keywords: ['gra zręcznościowa', 'gra na refleks', 'szybkie gry', 'gry akcji online', 'gry na koordynację'],
      }
    },
    'gra-strategiczna': {
      header: 'Gra Strategiczna Online',
      subheader: 'Planuj, buduj i podbijaj w naszej wciągającej grze strategicznej',
      gameTitle: 'Gra Strategiczna',
      seo: {
        title: 'Gra Strategiczna Online - Planuj, Buduj i Podbijaj',
        description: 'Zagraj w naszą darmową grę strategiczną online. Planuj taktyki, buduj imperium i podbijaj nowe terytoria bez pobierania gry.',
        keywords: ['gra strategiczna', 'strategia online', 'gry taktyczne', 'budowanie imperium', 'gry planistyczne'],
        canonicalUrl: 'https://gametime.example.com/gra-strategiczna',
      },
      seoContent: {
        title: 'Gra Strategiczna Online',
        subtitle: 'Buduj, planuj i zarządzaj swoim wirtualnym imperium',
        content: `Nasza gra strategiczna online to wyjątkowe doświadczenie dla graczy, którzy lubią planować, myśleć z wyprzedzeniem i podejmować decyzje o długofalowych konsekwencjach. W tej grze liczy się nie tylko szybkość reakcji, ale przede wszystkim umiejętność przewidywania, planowania i adaptacji do zmieniających się warunków.

Gry strategiczne to doskonały sposób na rozwijanie umiejętności analitycznego myślenia, planowania i zarządzania zasobami. Badania pokazują, że regularne granie w gry strategiczne może poprawić umiejętność rozwiązywania problemów i podejmowania decyzji.

Zacznij swoją przygodę z naszą grą strategiczną już teraz. Gra działa bezpośrednio w przeglądarce, nie wymaga pobierania ani instalacji i jest całkowicie darmowa. Buduj swoje imperium, twórz sojusze i podbijaj nowe terytoria!`,
        keywords: ['gra strategiczna', 'strategia online', 'gry taktyczne', 'budowanie imperium', 'gry planistyczne'],
      }
    }
  };
  
  return gamesData[slug || ''] || defaultData;
}

export default GamePage;
