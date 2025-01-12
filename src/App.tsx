import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSession, SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import Index from "@/pages/Index";
import Dashboard from "@/pages/Dashboard";
import PricingPage from "@/pages/PricingPage";
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
    </Routes>
  );
}

function App() {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Router>
        <AppRoutes />
      </Router>
    </SessionContextProvider>
  );
}

export default App;