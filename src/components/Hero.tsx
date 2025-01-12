import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "@/integrations/supabase/client";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Hero = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const heroTextRef = useScrollAnimation();
  const heroImageRef = useScrollAnimation();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-accent/5 to-secondary/5 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div 
            ref={heroTextRef} 
            className="flex flex-col justify-center opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#9b87f5] to-purple-500 opacity-20 blur-xl animate-pulse" />
              <h1 className="relative text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                Meet Luc<span className="text-[#9b87f5] drop-shadow-[0_0_15px_rgba(155,135,245,0.3)]">-ia</span>, Your AI Secretary
              </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Never miss a call, appointment, or important message again. Luc-ia handles your phone calls, takes notes, and manages your schedule with AI precision.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Dialog open={isSignUpOpen} onOpenChange={setIsSignUpOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-white hover:bg-[#9b87f5] text-[#9b87f5] hover:text-white border border-[#9b87f5] px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)]">
                    Get Started Free
                  </Button>
                </DialogTrigger>
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
              <Button className="bg-white hover:bg-[#9b87f5] text-[#9b87f5] hover:text-white border border-[#9b87f5] px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)]">
                Watch Demo
              </Button>
            </div>
          </div>
          <div 
            ref={heroImageRef}
            className="relative opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#9b87f5] to-purple-500 blur-3xl opacity-20 animate-pulse"></div>
            <img
              src="/lovable-uploads/57a44d07-5d6f-4ab0-ae7e-55513559485e.png"
              alt="AI Secretary Interface"
              className="relative rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(155,135,245,0.2)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};