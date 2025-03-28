import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { PostHogProvider } from 'posthog-js/react';

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
};

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={options}
    >
      <App />
    </PostHogProvider>
  </React.StrictMode>
);
