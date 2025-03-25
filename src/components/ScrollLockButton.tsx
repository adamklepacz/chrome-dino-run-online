import React from 'react';
import useScrollLock from '@/hooks/useScrollLock';

interface ScrollLockButtonProps {
  disabled?: boolean;
}

const ScrollLockButton: React.FC<ScrollLockButtonProps> = ({ disabled = false }) => {
  const { isScrollLocked, toggleScrollLock } = useScrollLock();

  return (
    <div className="flex flex-col items-center">
      <button 
        className={`btn w-20 h-20 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow ${
          !disabled 
            ? "bg-primary text-primary-foreground hover:bg-primary/90" 
            : "bg-muted text-muted-foreground cursor-not-allowed"
        }`}
        onClick={toggleScrollLock}
        disabled={disabled}
        aria-label={isScrollLocked ? "Unlock page scrolling" : "Lock page scrolling"}
      >
        <div className="flex flex-col items-center">
          <span className="text-xl" role="img" aria-hidden="true">
            {isScrollLocked ? '🔒' : '🔓'}
          </span>
          <kbd className="bg-primary-foreground/20 px-1 rounded text-xs mt-1">L</kbd>
        </div>
      </button>
      <span className="text-sm mt-2">{isScrollLocked ? "Unlock Scroll" : "Lock Scroll"}</span>
    </div>
  );
};

export default ScrollLockButton; 