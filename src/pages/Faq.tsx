import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const Faq = () => {
  const seo = {
    title: 'Frequently Asked Questions | Chrome Dino Game Online',
    description: 'Get answers to common questions about our free online Chrome Dinosaur Game. Learn how to play, tips & tricks, device compatibility, and game features.',
    keywords: ['Chrome Dino Game FAQ', 'T-Rex Game help', 'Dino Run questions', 'dinosaur game instructions', 'free online games FAQ'],
    canonicalUrl: 'https://dinorunonline.com/faq',
  };

  const faqs = [
    {
      question: "What is the Chrome Dinosaur Game?",
      answer: "The Chrome Dinosaur Game (also known as the T-Rex Game, Chrome Dino, or the No Internet Game) is an endless runner game built into the Google Chrome web browser. It appears when you try to visit a website but don't have an internet connection. Our online version lets you play this addictive game anytime, with enhanced features and without needing to disconnect from the internet."
    },
    {
      question: "How do I play the Dino Game?",
      answer: "Playing is simple! Press SPACE or the UP ARROW key to make your dinosaur jump over obstacles like cacti. On mobile devices, tap the screen to jump. As you progress, you'll need to duck under flying pterodactyls by pressing the DOWN ARROW key. The game speeds up as your score increases, making it progressively more challenging."
    },
    {
      question: "What are the game controls?",
      answer: "The controls are straightforward: SPACE or UP ARROW to jump, DOWN ARROW to duck under flying obstacles, and SHIFT for special actions when available. On mobile devices, you can tap the screen to jump and swipe down to duck."
    },
    {
      question: "What different versions of the game do you offer?",
      answer: "We offer multiple versions of the game, each optimized for specific keywords that people search for. These include Chrome Dino, ChromeDino, Dino Game, Dino Run, Google Dino, Run Dino Run, T-Rex Chrome, and more. While the core gameplay is similar across all versions, each has unique content and presentation tailored to different preferences."
    },
    {
      question: "Is this exactly like the Chrome browser game?",
      answer: "Our game captures the essence of the original Chrome Dinosaur Game but offers enhanced graphics, additional features, and a better overall experience. We've kept the classic pixel art style and core gameplay that made the original so popular while adding some new elements to make it even more enjoyable."
    },
    {
      question: "Can I play on my smartphone or tablet?",
      answer: "Yes! Our Dino Game is fully responsive and works on all devices including smartphones, tablets, laptops, and desktop computers. On mobile devices, simply tap the screen to make your dinosaur jump. The game adapts to your screen size for the best playing experience."
    },
    {
      question: "Do I need to install anything to play?",
      answer: "No installation required! This is a browser-based game that runs directly in your web browser. Just visit our website and start playing instantly. This makes it perfect for quick gaming sessions during breaks or when you're looking for some quick entertainment."
    },
    {
      question: "Is the game completely free to play?",
      answer: "Yes, all our game variants (Chrome Dino, Dino Game, Dino Run, etc.) are 100% free to play with no hidden costs. We don't require any account registration or payment information. Just visit our site and enjoy playing immediately!"
    },
    {
      question: "Do my scores get saved?",
      answer: "Yes, your high score is saved locally in your browser. This means you can challenge yourself to beat your personal best each time you play. However, if you clear your browser data, your high score will be reset."
    },
    {
      question: "Why does the game get faster as I play?",
      answer: "The increasing speed is a core feature of the game designed to make it progressively more challenging. As your score increases, the game speeds up, requiring quicker reactions and better timing. This gradual difficulty increase keeps the gameplay exciting and ensures there's always a new challenge."
    },
    {
      question: "What's the difference between Chrome Dino, Dino Run, and Google Dino?",
      answer: "While all versions feature the iconic T-Rex runner gameplay, each version has slightly different content and presentation. Chrome Dino focuses on the classic Chrome browser experience, Dino Run emphasizes the endless runner aspect of the game, and Google Dino highlights its connection to Google's browser. Feel free to try each version and see which one you prefer!"
    },
    {
      question: "Who created DinoRunOnline?",
      answer: "DinoRunOnline was created by a team of web developers and gaming enthusiasts who wanted to make the Chrome Dinosaur Game available to everyone, anytime - not just when your internet is down. We've implemented this game using modern web technologies to provide a smooth and enjoyable experience across all devices."
    }
  ];

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Frequently Asked Questions</h1>
          <p className="page-subtitle">
            Find answers to common questions about our free online Chrome Dinosaur Game and how to play it.
          </p>
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
      <section className="section-container py-8 md:py-12 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Play?</h2>
          <p className="text-muted-foreground mb-6">
            Now that you know more about our game, why not try out one of our many versions? Click any of the links below to start playing:
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
            <Link to="/chrome-dino" className="btn btn-primary">Chrome Dino</Link>
            <Link to="/chromedino" className="btn btn-outline">ChromeDino</Link>
            <Link to="/dino-game" className="btn btn-outline">Dino Game</Link>
            <Link to="/dino-run" className="btn btn-outline">Dino Run</Link>
            <Link to="/google-dino" className="btn btn-outline">Google Dino</Link>
            <Link to="/run-dino-run" className="btn btn-outline">Run Dino Run</Link>
            <Link to="/t-rex-chrome" className="btn btn-outline">T-Rex Chrome</Link>
            <Link to="/chrome-dino-game" className="btn btn-outline">Chrome Dino Game</Link>
          </div>
          
          <p className="mt-6 text-muted-foreground">
            Looking for more game options? Check out our <Link to="/free-online-game" className="text-primary hover:text-primary/80">free online games</Link> or <Link to="/simple-web-game" className="text-primary hover:text-primary/80">simple web games</Link>.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Faq;
