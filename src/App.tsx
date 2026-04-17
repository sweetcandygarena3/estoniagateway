import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LangProvider } from "@/lib/i18n";
import { BottomNav } from "@/components/BottomNav";
import Index from "./pages/Index.tsx";

// Lazy-load heavy/secondary routes to keep initial bundle lean.
const ScholarshipStrategy = lazy(() => import("./pages/ScholarshipStrategy.tsx"));
const VisaLogistics = lazy(() => import("./pages/VisaLogistics.tsx"));
const DiscoverEstonia = lazy(() => import("./pages/DiscoverEstonia.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center text-muted-foreground">
    <div className="animate-pulse">Loading…</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LangProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/discover-estonia" element={<DiscoverEstonia />} />
              <Route path="/scholarship-strategy" element={<ScholarshipStrategy />} />
              <Route path="/visa-logistics" element={<VisaLogistics />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <BottomNav />
        </BrowserRouter>
      </LangProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
