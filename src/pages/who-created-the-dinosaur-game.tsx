import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import SeoContent from '@/components/SeoContent';
import { Link } from 'react-router-dom'; // Import Link if needed for internal links

const WhoCreatedDinosaurGame = () => {
  // SEO data for the page
  const seo = {
    title: 'Who Created the Dinosaur Game? Meet the Creators of Chrome\'s T-Rex Runner',
    description: 'Discover who created the famous Chrome Dinosaur Game, also known as the T-Rex Runner. Learn about its origin, creators, and fun facts behind this iconic offline game.',
    keywords: ['who created dinosaur game', 'chrome dino creators', 't-rex runner origin', 'sebastien gabriel', 'google chrome easter egg', 'dinosaur game history'],
    canonicalUrl: 'https://dinorunonline.com/who-created-the-dinosaur-game',
    ogImage: 'https://dinorunonline.com/images/chrome-dino-screenshot.jpg', // Replace with a relevant image URL
    ogType: "article" as "website" | "article"
  };

  // Add structured data for rich results (Article schema)
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Who Created the Dinosaur Game?",
      "description": "Learn about the creators and the story behind the iconic Google Chrome Dinosaur Game (T-Rex Runner).",
      "image": seo.ogImage, // Use the same image as og:image
      "author": {
        "@type": "Organization",
        "name": "DinoRunOnline"
      },
      "publisher": {
        "@type": "Organization",
        "name": "DinoRunOnline",
        "logo": {
          "@type": "ImageObject",
          "url": "https://dinorunonline.com/logo.png" // Replace with your actual logo URL
        }
      },
      "datePublished": "2024-07-27", // Set the publication date
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": seo.canonicalUrl
      }
    });
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // SEO Content component data (optional, if using SeoContent component)
  const seoContentData = {
    title: 'Unveiling the Creators Behind the Chrome Dino',
    subtitle: 'The Story of the T-Rex Runner Game',
    content: `The famous Dinosaur Game, a beloved Easter egg in Google Chrome, wasn't just a happy accident. It was intentionally designed by a specific team at Google to provide a bit of fun during frustrating moments of lost internet connectivity. The lead UX designer, Sebastien Gabriel, along with developers Edward Jung and Alan Bettes, brought the pixelated T-Rex to life in 2014.
  
  The choice of a T-Rex was symbolic, representing the 'prehistoric' era of being offline. This simple yet addictive game has since become a cultural phenomenon, proving that great ideas can come from addressing small user frustrations.`,
    keywords: ['dinosaur game creators', 'google chrome game origin', 'sebastien gabriel chrome', 't-rex game history', 'offline game development'],
  };

  return (
    <MainLayout seo={seo}>
      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="page-header">Who Created the Dinosaur Game?</h1>
          <p className="page-subtitle mb-6">
            Meet the minds behind the iconic Chrome T-Rex Runner.
          </p>

          <div className="prose prose-lg max-w-none dark:prose-invert bg-card p-6 rounded-lg shadow-sm">
            <p>
              The Chrome Dinosaur Game — also known as the T-Rex Runner — is a nostalgic hidden game inside the Google Chrome browser.
              It appears when users lose internet connection, offering a fun and pixelated way to pass the time.
              But who came up with this clever offline distraction?
            </p>

            <h2>The Origin of the Chrome Dino Game</h2>
            <p>
              The Dinosaur Game was created by a team at Google in 2014. The project was led by <strong>Sebastien Gabriel</strong>,
              a UX designer on the Chrome team, alongside developers Edward Jung and Alan Bettes.
              The idea behind the game was to give users a small Easter egg during internet outages — a moment of play in frustration.
            </p>

            {/* Consider adding a relevant image here */}
            <figure className="my-6">
              <img src="/public/dino-assets/dino-game.png" alt="Chrome Dinosaur Game screenshot showing the T-Rex running" className="rounded-lg mx-auto" />
              <figcaption className="text-center text-sm text-muted-foreground mt-2">Screenshot of the Chrome Dinosaur Game in action</figcaption>
            </figure>

            <h2>Why a Dinosaur?</h2>
            <p>
              According to the creators, the T-Rex symbolizes the "prehistoric age" — a metaphor for being offline,
              disconnected from the internet. The minimalist, pixel-style graphics were inspired by early arcade games.
            </p>

            <h2>Fun Facts About the Game</h2>
            <ul>
              <li>The game becomes faster the longer you play.</li>
              <li>There are hidden animations for milestones like 700 points.</li>
              <li>It's available by visiting <code>chrome://dino</code> directly — even if you're online (though our version <Link to="/">here</Link> is more fun!).</li>
            </ul>

            <h2>Who Created the Dinosaur Game? – In Summary</h2>
            <p>
              The Chrome Dinosaur Game was developed by a small team at Google Chrome,
              with Sebastien Gabriel credited as the visual designer.
              Since its launch in 2014, it has become an internet icon, played by millions worldwide. You can enjoy our enhanced version of this classic game right here on DinoRunOnline!
            </p>
          </div>
        </div>
      </section>

      {/* Optional: Include the SeoContent component if you want that formatted section */}
      <SeoContent {...seoContentData} />

       <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Play the Game Now!</h2>
          <div className="text-center">
             <Link to="/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Play Chrome Dino Online
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default WhoCreatedDinosaurGame;
