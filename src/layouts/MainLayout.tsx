
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

interface MainLayoutProps {
  children: React.ReactNode;
  seo: {
    title: string;
    description: string;
    keywords?: string[];
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
  };
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, seo }) => {
  return (
    <>
      <SEO {...seo} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
