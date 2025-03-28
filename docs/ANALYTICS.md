# PostHog Analytics Integration

This application uses [PostHog](https://posthog.com/) for analytics tracking. PostHog is an open-source product analytics platform that helps you track user behavior and understand how people use your product.

## Setup

PostHog has been integrated with the following environment variables:

```
VITE_PUBLIC_POSTHOG_KEY=phc_SHFO6TmhXPl5xdo0oDErQjixfg2sacUuFWhanAVJLj1
VITE_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
```

## Usage

### Using the Analytics Hook

A custom hook `useAnalytics` has been created to simplify analytics usage throughout the application. Import and use it in your components:

```tsx
import useAnalytics from '@/hooks/use-posthog';

function MyComponent() {
  const { trackEvent, identify, reset, posthog } = useAnalytics();
  
  // Track a custom event
  const handleButtonClick = () => {
    trackEvent('button_clicked', { 
      button_name: 'sign_up',
      page: 'homepage'
    });
  };
  
  // Identify a user
  const identifyUser = (userId: string) => {
    identify(userId, {
      name: 'John Doe',
      email: 'john@example.com'
    });
  };
  
  // Reset user identity (e.g., on logout)
  const handleLogout = () => {
    reset();
  };
  
  return (
    <div>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
}
```

### Tracking Events

Events in this application follow a standard convention:

- **Page views**: `page_view` with page details
- **Game actions**: `game_start`, `game_over`, etc.
- **User actions**: `button_click`, `form_submit`, etc.

### Example Event Properties

Include relevant properties with events for better analysis:

- **Page views**: Include `page`, `path`, `title`
- **Game events**: Include `score`, `game_type`, `variant`
- **User actions**: Include `action_source`, `category`, `value`

## Viewing Analytics Data

Access your PostHog dashboard at https://eu.i.posthog.com to view:

- User sessions
- Event trends
- Conversion funnels
- User cohorts
- Feature usage

## Privacy Considerations

- Ensure GDPR compliance by using PostHog's opt-in/opt-out functionality
- Make sure your privacy policy mentions the use of PostHog analytics
- Be transparent about what data you're collecting

## Debugging

You can enable PostHog debug mode to see events in the console:

```tsx
// In your component
posthog.debug();
``` 