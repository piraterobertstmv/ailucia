import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import PricingPage from "./pages/PricingPage";
import Dashboard from "./pages/Dashboard";
import AssistantSettings from "./components/dashboard/AssistantSettings";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/assistant/settings" element={<AssistantSettings />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;