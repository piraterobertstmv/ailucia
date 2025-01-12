import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "@/integrations/supabase/client";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

export const AuthButtons = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        setIsSignInOpen(false);
        setIsSignUpOpen(false);
        navigate('/dashboard');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
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
    </>
  );
};