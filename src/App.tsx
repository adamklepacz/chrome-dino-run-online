import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import DinoGame from "./pages/dino-game";
import GamePage from "./pages/GamePage";
import Index from "./pages/Index";
import History from "./pages/history";
import Faq from "./pages/Faq";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import WhoCreatedDinosaurGame from './pages/who-created-the-dinosaur-game';
import { useEffect } from "react";
import useAnalytics from "./hooks/use-posthog";


const queryClient = new QueryClient();

const AppRoutes = () => {
  const { trackEvent } = useAnalytics();
  
  useEffect(() => {
    trackEvent('app_loaded');
  }, [trackEvent]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/history/" element={<History />} />
        {/* Dino game variants - ranked by search volume */}
        <Route path="/chrome-dino/" element={<DinoGame />} /> {/* 10k-100k */}
        <Route path="/chromedino/" element={<DinoGame />} /> {/* 10k-100k */}
        <Route path="/dino-game/" element={<DinoGame />} /> {/* 10k-100k */}
        <Route path="/dino-run/" element={<DinoGame />} /> {/* 1k-10k */}
        <Route path="/google-dino/" element={<DinoGame />} /> {/* 1k-10k */}
        <Route path="/run-dino-run/" element={<DinoGame />} /> {/* 1k-10k */}
        <Route path="/t-rex-chrome/" element={<DinoGame />} /> {/* 100-1k */}
        <Route path="/offline-dinosaurus/" element={<DinoGame />} /> {/* 100-1k */}
        <Route path="/chrome-dino-game/" element={<DinoGame />} /> {/* 100-1k */}
        <Route path="/google-game-dino/" element={<DinoGame />} /> {/* 100-1k */}
        <Route path="/t-rex-chrome-dino-game/" element={<DinoGame />} /> {/* 10-100 */}
        <Route path="/dino-run-game/" element={<DinoGame />} /> {/* 10-100 */}
        
        {/* Content Pages */}
        <Route path="/who-created-the-dinosaur-game/" element={<WhoCreatedDinosaurGame />} />
        <Route path="/history/" element={<History />} />
        <Route path="/faq/" element={<Faq />} />
        <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service/" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppRoutes />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
