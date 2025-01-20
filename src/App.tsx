import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSession, SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import Index from "@/pages/Index";
import Dashboard from "@/pages/Dashboard";
import PricingPage from "@/pages/PricingPage";
import AssistantsPage from "@/pages/AssistantsPage";
import { PageTransition } from "@/components/PageTransition";
import "./App.css";

function AppRoutes() {
  const session = useSession();
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            session ? (
              <PageTransition>
                <Dashboard />
              </PageTransition>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        <Route 
          path="/pricing" 
          element={
            session ? (
              <PageTransition>
                <PricingPage />
              </PageTransition>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        <Route 
          path="/assistants" 
          element={
            session ? (
              <PageTransition>
                <AssistantsPage />
              </PageTransition>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider supabaseClient={supabase}>
        <Router>
          <AppRoutes />
        </Router>
      </SessionContextProvider>
    </QueryClientProvider>
  );
}

export default App;