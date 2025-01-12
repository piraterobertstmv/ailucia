import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import Index from "@/pages/Index";
import Dashboard from "@/pages/Dashboard";
import PricingPage from "@/pages/PricingPage";
import "./App.css";

function App() {
  const session = useSession();

  return (
    <Router>
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
    </Router>
  );
}

export default App;