import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';
import SeoContent from '@/components/SeoContent';

const History = () => {
  // SEO data for History page
  const seo = {
    title: 'The History of Chrome Dino Game | T-Rex Runner Origins',
    description: 'Learn about the history of the famous Chrome Dino game (T-Rex Runner). Discover how Google created this iconic offline dinosaur game that entertains millions worldwide.',
    keywords: ['chrome dino history', 'dino game origin', 't-rex runner history', 'google dinosaur game', 'chrome offline game history', 'project bolan'],
    canonicalUrl: 'https://dinorunonline.com/history',
    ogImage: 'https://dinorunonline.com/images/dino-history.jpg',
    ogType: "article" as "website" | "article"
  };

  // SEO Content for the page
  const seoContent = {
    title: 'The Fascinating History of the Chrome Dino Game',
    subtitle: 'How a simple offline dinosaur runner became an internet phenomenon',
    content: `The Chrome Dino game has an interesting history that begins in early 2014. Originally codenamed "Project Bolan" (a reference to T. Rex frontman Marc Bolan), the game was created by Google Chrome designers Sebastien Gabriel and Edward Jung, along with Chrome UX engineer Alan Bettes.

The team's goal was simple: transform the frustration of losing internet connection into a moment of fun. As Edward Jung explained, "There's nothing fun about getting kicked offline—unless you have a friendly T-Rex to keep you company." The dinosaur theme was chosen as a humorous nod to going "prehistoric" when your internet is down.

After months of development, the running T-Rex made its debut in Chrome in September 2014, hiding as an Easter egg on the "you are offline" page. The game was designed with a deliberately minimalist pixel-art style, maintaining rigid motion reminiscent of vintage video games of the 90s.

Since its launch, the Chrome Dino game has become phenomenally popular, with Google reporting approximately 270 million games played every month as of 2018. The game is especially popular in regions with unreliable or expensive mobile data, such as India, Brazil, Mexico, and Indonesia. The game has become so addictive that Google eventually had to provide enterprise administrators with an option to disable it, as students and even working adults were getting too distracted!

Over the years, the game received several updates, including the addition of pterodactyls, a night mode, and special themed editions for events like Chrome's anniversaries. For Chrome's 10th birthday in 2018, the team released a special edition featuring cake, balloons, and a birthday hat for the dinosaur.

Today, the Chrome Dino game has transcended its original purpose to become a cultural icon and Google Chrome's unofficial mascot. It's an excellent example of how a simple, well-executed idea can capture the hearts of millions worldwide.`,
    keywords: ['chrome dino history', 'project bolan', 'sebastien gabriel', 'edward jung', 'chrome dinosaur origin', 'google t-rex game', 'offline dinosaur history'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">The History of the Chrome Dino Game</h1>
          <p className="page-subtitle">
            From "Project Bolan" to a global phenomenon - the story behind Google's famous T-Rex runner
          </p>
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6">The Origins (2014)</h2>
            <p className="mb-6">
              The Chrome Dino game began in early 2014 as an internal project at Google, codenamed "Project Bolan" - a reference to Marc Bolan, the frontman of the band T. Rex. The game was designed by Chrome team members Sebastien Gabriel and Edward Jung, along with Alan Bettes from the Chrome UX team.
            </p>
            <p className="mb-6">
              According to Edward Jung, the inspiration behind the game was simple: "There's nothing fun about getting kicked offline—unless you have a friendly T-Rex to keep you company." The dinosaur theme was a clever nod to being thrown back to the "prehistoric age" when you lose internet connectivity.
            </p>
            <p className="mb-6">
              The original design went through several iterations, with the team initially considering features like a roaring animation or a cute kick animation similar to a "90's hedgehog" (a reference to Sonic). However, they ultimately settled on the basics of any good runner game: run, duck, and jump.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6">The Launch</h2>
            <p className="mb-6">
              The hidden game was officially submitted to Chrome's codebase in September 2014, disguised as a simple page redesign. Initially, the game had performance issues on older Android devices, which required Edward Jung to completely rewrite it. By December 2014, the game had successfully scaled to all platforms.
            </p>
            <p className="mb-6">
              The game was intentionally designed with a minimalist pixel-art style, maintaining rigid motion reminiscent of vintage video games. This aesthetic choice became one of the game's most recognizable and beloved features.
            </p>
            <p className="mb-6">
              What makes the game special is its perfectly balanced difficulty curve - as you progress, the game speed increases gradually, creating a challenging experience that keeps players engaged without becoming frustratingly difficult too quickly.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6">Explosive Popularity</h2>
            <p className="mb-6">
              According to Google's official blog, by 2018, the Chrome Dino game was being played approximately 270 million times every month. The game proved especially popular in regions with unreliable or expensive mobile internet, including India, Brazil, Mexico, and Indonesia.
            </p>
            <p className="mb-6">
              The game became so addictive that Google eventually had to provide enterprise administrators with an option to disable it, as students and even working adults were getting too distracted by the simple yet compelling gameplay.
            </p>
            <p className="mb-6">
              For those who wanted to play without going offline, Google also created a dedicated URL (chrome://dino) where players could access the game anytime, complete with an "arcade mode" for a full-window experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6">Evolution and Special Editions</h2>
            <p className="mb-6">
              Over the years, the game received several updates and improvements. The team added pterodactyls as flying obstacles and introduced a night mode to add visual variety and increase the challenge.
            </p>
            <p className="mb-6">
              For Chrome's 10th birthday in September 2018, the team released a special "birthday edition" featuring cake, balloons, and a birthday hat for the dinosaur. According to Alan Bettes, they chose a classic vanilla cake flavor, as Edward Jung (who is an amateur baker) decided that "if our dino is going to be eating this millions of times over, it should taste good!"
            </p>
            <p className="mb-6">
              When asked how long it takes to beat the game, Edward Jung humorously replied that they built it to max out at approximately 17 million years - the same amount of time the T-Rex existed on Earth - but warned that "your spacebar may not be the same afterwards."
            </p>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6">Cultural Impact</h2>
            <p className="mb-6">
              The Chrome Dino has transcended its original purpose to become a cultural icon and Chrome's unofficial mascot. Google's offices are filled with Dino-themed merchandise and decorations, reflecting the character's beloved status within the company.
            </p>
            <p className="mb-6">
              The game has inspired countless clones, adaptations, and tributes across various platforms. Its simple yet addictive gameplay has made it one of the most widely played video games in history, proving that sometimes the simplest ideas can have the biggest impact.
            </p>
            <p className="mb-6">
              Today, the Chrome Dino game stands as a testament to thoughtful design and the power of turning a negative experience (losing internet connection) into a moment of joy - a perfect example of Google's design philosophy.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Link to="/" className="bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-6 rounded-lg text-lg font-medium transition-colors inline-block">
            Play Dino Game Now →
          </Link>
        </div>
      </section>
      
      <SeoContent {...seoContent} />
    </MainLayout>
  );
};

export default History;
