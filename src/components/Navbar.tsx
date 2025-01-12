import { Link } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { AuthButtons } from "./navbar/AuthButtons";
import { UserMenu } from "./navbar/UserMenu";

export const Navbar = () => {
  const session = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        navigate('/dashboard');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary font-orbitron tracking-wider">
              Luc-ia
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {session ? <UserMenu /> : <AuthButtons />}
          </div>
        </div>
      </div>
    </nav>
  );
};