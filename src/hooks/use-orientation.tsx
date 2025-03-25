import * as React from "react"
import { useIsMobile } from "./use-mobile"

export function useOrientation() {
  const isMobile = useIsMobile()
  const [isPortrait, setIsPortrait] = React.useState<boolean>(false)
  
  React.useEffect(() => {
    // Only run this effect if we're on a mobile device
    if (!isMobile) return
    
    const checkOrientation = () => {
      // window.orientation is deprecated but still works in many mobile browsers
      // window.matchMedia is the modern approach
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches)
    }
    
    // Check orientation immediately
    checkOrientation()
    
    // Listen for orientation changes
    const mediaQuery = window.matchMedia("(orientation: portrait)")
    const handleOrientationChange = () => checkOrientation()
    
    // Add event listener (with compatibility for older browsers)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleOrientationChange)
    } else {
      // The addListener method is deprecated but needed for older browsers
      mediaQuery.addListener?.(handleOrientationChange)
    }
    
    // Clean up
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleOrientationChange)
      } else {
        // The removeListener method is deprecated but needed for older browsers
        mediaQuery.removeListener?.(handleOrientationChange)
      }
    }
  }, [isMobile])
  
  return { isPortrait, isLandscape: !isPortrait }
} 