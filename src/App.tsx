import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";
import DinoGame from "./pages/DinoGame";
import GamePage from "./pages/GamePage";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Dino game variants */}
          <Route path="/dino-game" element={<DinoGame />} />
          <Route path="/dino-run" element={<DinoGame />} />
          <Route path="/dino-adventure" element={<DinoGame />} />
          <Route path="/dino-jump" element={<DinoGame />} />
          <Route path="/chrome-dino-game" element={<DinoGame />} />
          <Route path="/t-rex-game" element={<DinoGame />} />
          <Route path="/dinosaur-game" element={<DinoGame />} />
          
          {/* Game categories */}
          <Route path="/arcade-games" element={<GamePage />} />
          <Route path="/logic-games" element={<GamePage />} />
          <Route path="/strategy-games" element={<GamePage />} />
          <Route path="/free-online-games" element={<GamePage />} />
          <Route path="/browser-games" element={<GamePage />} />
          
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
