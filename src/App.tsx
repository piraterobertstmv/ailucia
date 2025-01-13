import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PricingPage from "./pages/PricingPage";
import Dashboard from "./pages/Dashboard";
import AssistantSettings from "./components/dashboard/AssistantSettings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/assistant/settings" element={<AssistantSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
