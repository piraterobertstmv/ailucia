import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "@/integrations/supabase/client";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export const Navbar = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              luc-ia
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => setIsSignInOpen(true)}
              className="group relative"
            >
              Sign In
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </Button>
            <Button 
              onClick={() => setIsSignUpOpen(true)}
              className="bg-secondary hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      {/* Sign In Dialog */}
      <Dialog open={isSignInOpen} onOpenChange={setIsSignInOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#805AD5',
                    brandAccent: '#6B46C1',
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
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#805AD5',
                    brandAccent: '#6B46C1',
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