import React from 'react';
import { useOrientation } from '@/hooks/use-orientation';
import { useIsMobile } from '@/hooks/use-mobile';

const RotationMessage: React.FC = () => {
  const isMobile = useIsMobile();
  const { isPortrait } = useOrientation();
  
  // Only show this message on mobile devices in portrait mode
  if (!isMobile || !isPortrait) {
    return null;
  }
  
  return (
    <div className="bg-primary/10 backdrop-blur-sm text-foreground p-4 rounded-lg mb-3 flex items-center justify-center gap-2 border border-primary/20 shadow-sm">
      <span className="text-xl animate-spin">🔄</span>
      <span className="font-medium">Rotate the screen for better experience</span>
    </div>
  );
};

export default RotationMessage; 