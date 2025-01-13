import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSession, SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "@/pages/Index";
import Dashboard from "@/pages/Dashboard";
import PricingPage from "@/pages/PricingPage";
import AssistantsPage from "@/pages/AssistantsPage";
import "./App.css";

function AppRoutes() {
  const session = useSession();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route 
        path="/dashboard" 
        element={session ? <Dashboard /> : <Navigate to="/" />} 
      />
      <Route 
        path="/pricing" 
        element={session ? <PricingPage /> : <Navigate to="/" />} 
      />
      <Route 
        path="/assistants" 
        element={session ? <AssistantsPage /> : <Navigate to="/" />} 
      />
    </Routes>
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