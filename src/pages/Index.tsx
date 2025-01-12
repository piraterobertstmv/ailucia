import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Navbar } from "@/components/Navbar";
import { useSession } from "@supabase/auth-helpers-react";
import { AuthenticatedContent } from "@/components/AuthenticatedContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const session = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate('/dashboard');
    }
  }, [session, navigate]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        {session ? (
          <AuthenticatedContent />
        ) : (
          <>
            <Hero />
            <Features />
            <Pricing />
          </>
        )}
      </div>
    </div>
  );
};

export default Index;