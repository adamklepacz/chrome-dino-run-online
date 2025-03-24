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
      answer: "The Chrome Dinosaur Game (also known as the T-Rex Game) is an endless runner game built into the Google Chrome web browser. It appears when you try to visit a website but don't have an internet connection. Our online version lets you play this addictive game anytime, with enhanced features and without needing to disconnect from the internet."
    },
    {
      question: "How do I play the Dino Game?",
      answer: "Playing is simple! Press SPACE or the UP ARROW key to make your dinosaur jump over obstacles like cacti. On mobile devices, tap the screen to jump. As you progress, you'll need to duck under flying pterodactyls by pressing the DOWN ARROW key. The game speeds up as your score increases, making it progressively more challenging."
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
      answer: "Yes, the Dino Game is 100% free to play with no hidden costs. We don't require any account registration or payment information. Just visit our site and enjoy playing immediately!"
    },
    {
      question: "What's the highest score ever achieved?",
      answer: "While we don't maintain official records, some players have reported scores exceeding 20,000 points in the original Chrome Dinosaur Game. The game becomes extremely fast at high scores, requiring perfect timing and reflexes. Can you beat this record? Give it a try and share your highest score with us!"
    },
    {
      question: "Are there any secret features or Easter eggs?",
      answer: "Yes! Try playing at different times or look for special power-ups that occasionally appear. We've added some hidden features for players to discover. Keep playing to find them all!"
    }
  ];

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-header">Frequently Asked Questions</h1>
          <p className="page-subtitle">
            Find answers to common questions about our free online Chrome Dinosaur Game and other browser games.
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
            Now that you know more about our games, why not try them out? Click any of the links below to start playing:
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dino-game" className="btn btn-primary">Play Dino Game</Link>
            <Link to="/chrome-dino-game" className="btn btn-outline">Chrome Dino Game</Link>
            <Link to="/t-rex-game" className="btn btn-outline">T-Rex Runner</Link>
            <Link to="/dino-adventure" className="btn btn-outline">Dino Adventure</Link>
            <Link to="/dino-jump" className="btn btn-outline">Dino Jump</Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Faq;
