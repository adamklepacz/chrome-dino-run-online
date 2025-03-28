import { usePostHog } from 'posthog-js/react';

/**
 * Custom hook for accessing PostHog analytics functionality
 */
export const useAnalytics = () => {
  const posthog = usePostHog();

  return {
    /**
     * Track a custom event
     */
    trackEvent: (eventName: string, properties?: Record<string, unknown>) => {
      posthog?.capture(eventName, properties);
    },

    /**
     * Identify a user
     */
    identify: (id: string, properties?: Record<string, unknown>) => {
      posthog?.identify(id, properties);
    },

    /**
     * Reset user identity (for logout)
     */
    reset: () => {
      posthog?.reset();
    },

    /**
     * Get the raw PostHog instance
     */
    posthog
  };
};

export default useAnalytics; 