import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "@/integrations/supabase/client";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession } from "@supabase/auth-helpers-react";

export const Navbar = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const session = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setIsSignInOpen(false);
        setIsSignUpOpen(false);
        navigate('/dashboard');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

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
            <Link to="/pricing">
              <Button variant="ghost" className="group relative">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </Button>
            </Link>
            {session ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost" className="group relative">
                    Dashboard
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </Button>
                </Link>
                <Button 
                  onClick={handleSignOut}
                  className="bg-white hover:bg-[#9b87f5] text-[#9b87f5] hover:text-white border border-[#9b87f5] transition-colors"
                >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => setIsSignInOpen(true)}
                  className="bg-white hover:bg-[#9b87f5] text-[#9b87f5] hover:text-white border border-[#9b87f5] transition-colors"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => setIsSignUpOpen(true)}
                  className="bg-white hover:bg-[#9b87f5] text-[#9b87f5] hover:text-white border border-[#9b87f5] transition-colors"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Sign In Dialog */}
      <Dialog open={isSignInOpen} onOpenChange={setIsSignInOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle>Sign In</DialogTitle>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#9b87f5',
                    brandAccent: '#8b75f2',
                  },
                },
              },
            }}
            view="sign_in"
            theme="light"
            providers={[]}
          />
        </DialogContent>
      </Dialog>

      {/* Sign Up Dialog */}
      <Dialog open={isSignUpOpen} onOpenChange={setIsSignUpOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle>Sign Up</DialogTitle>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#9b87f5',
                    brandAccent: '#8b75f2',
                  },
                },
              },
            }}
            view="sign_up"
            theme="light"
            providers={[]}
          />
        </DialogContent>
      </Dialog>
    </nav>
  );
};