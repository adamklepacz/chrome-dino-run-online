import { useState, useEffect, useCallback } from 'react';

export const useScrollLock = () => {
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleScrollLock = useCallback(() => {
    if (!isScrollLocked) {
      // Save current scroll position before locking
      setScrollPosition(window.scrollY);
    }
    setIsScrollLocked(prev => !prev);
  }, [isScrollLocked]);

  useEffect(() => {
    if (isScrollLocked) {
      // Lock scroll while preserving position
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollPosition}px`;
    } else {
      // Unlock scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      
      // Restore exact scroll position
      window.scrollTo(0, scrollPosition);
    }
  }, [isScrollLocked, scrollPosition]);

  return { isScrollLocked, toggleScrollLock };
};

export default useScrollLock; 