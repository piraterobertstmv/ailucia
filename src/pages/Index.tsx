import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Navbar } from "@/components/Navbar";
import { useSession } from "@supabase/auth-helpers-react";
import { Navigate } from "react-router-dom";

const Index = () => {
  const session = useSession();

  if (session) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />
        <Pricing />
      </div>
    </div>
  );
};

export default Index;