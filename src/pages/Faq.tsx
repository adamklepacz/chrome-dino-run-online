
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faq = () => {
  const seo = {
    title: 'Frequently Asked Questions | Jumping Dino Game',
    description: 'Find answers to common questions about our free online Jumping Dino game. Learn how to play, device compatibility, and more!',
    keywords: ['Jumping Dino FAQ', 'free game questions', 'online game help', 'browser game support'],
    canonicalUrl: 'https://gametime.example.com/faq',
  };

  const faqs = [
    {
      question: "How do I start playing Jumping Dino?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies ex quis risus pharetra, non fermentum libero pulvinar."
    },
    {
      question: "Do I need to register an account?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan semper tortor, sed blandit nunc tincidunt et."
    },
    {
      question: "Which devices are compatible with Jumping Dino?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin lectus in felis cursus bibendum."
    },
    {
      question: "Can I play offline?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat tortor non egestas gravida."
    },
    {
      question: "Is the game completely free to play?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor velit vel ante dignissim placerat."
    }
  ];

  return (
    <MainLayout seo={seo}>
      <section className="section-container">
        <div className="mx-auto max-w-3xl">
          <h1 className="page-header">Frequently Asked Questions (FAQ)</h1>
          <p className="page-subtitle">Find answers to the most common questions about Jumping Dino and our other free online games.</p>
          
          <div className="mt-10 animate-fade-up opacity-0 delay-300 fill-forwards">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/10 animate-fade-up opacity-0 delay-400 fill-forwards">
            <h3 className="text-xl font-medium mb-2">Still have questions?</h3>
            <p className="text-muted-foreground">
              If you couldn't find the answer to your question, feel free to contact us. We're here to help!
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Faq;
