import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import WebAplikacijeVodic from "./pages/WebAplikacijeVodic.tsx";
import WebAplikacijeAppVodic from "./pages/WebAplikacijeAppVodic.tsx";
import BrendingVodic from "./pages/BrendingVodic.tsx";
import AIRjesenjaVodic from "./pages/AIRjesenjaVodic.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/web-aplikacije-vodic" element={<WebAplikacijeVodic />} />
            <Route path="/web-aplikacije-app-vodic" element={<WebAplikacijeAppVodic />} />
            <Route path="/brending-vodic" element={<BrendingVodic />} />
            <Route path="/ai-rjesenja-vodic" element={<AIRjesenjaVodic />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
