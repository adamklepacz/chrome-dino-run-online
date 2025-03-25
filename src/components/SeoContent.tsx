import React from 'react';
import { cn } from '@/lib/utils';

interface SeoContentProps {
  className?: string;
  title: string;
  subtitle?: string;
  content: string;
  keywords?: string[];
}

const SeoContent: React.FC<SeoContentProps> = ({
  className,
  title,
  subtitle,
  content,
  keywords = []
}) => {
  return (
    <section className={cn("section-container", className)} itemScope itemType="https://schema.org/Article">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl animate-fade-up opacity-0 delay-100 fill-forwards" itemProp="headline">
          {title}
        </h2>
        
        {subtitle && (
          <p className="mt-3 text-lg text-muted-foreground animate-fade-up opacity-0 delay-200 fill-forwards" itemProp="alternativeHeadline">
            {subtitle}
          </p>
        )}
        
        <div 
          className="mt-6 text-base leading-7 text-foreground/90 animate-fade-up opacity-0 delay-300 fill-forwards" 
          itemProp="articleBody"
        >
          <div className="whitespace-pre-line">{content}</div>
        </div>
        
        {keywords.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2 animate-fade-up opacity-0 delay-400 fill-forwards" itemProp="keywords">
            {keywords.map((keyword, index) => (
              <span 
                key={index}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
              >
                {keyword}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SeoContent;
