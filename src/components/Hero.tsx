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
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const heroTextRef = useScrollAnimation();
  const heroImageRef = useScrollAnimation();

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-b from-white via-accent/5 to-secondary/5 py-8 sm:py-16">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div 
            ref={heroTextRef} 
            className="flex flex-col justify-center text-center lg:text-left opacity-0 translate-y-10 transition-all duration-700 mt-16 sm:mt-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#9b87f5] to-purple-500 opacity-20 blur-xl animate-pulse" />
              <div className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary font-orbitron">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-purple-500">Luc-ia</span>
                <h1 className="mt-2">Your AI Secretary</h1>
              </div>
            </div>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Never miss a call, appointment, or important message again. Luc-ia handles your phone calls, takes notes, and manages your schedule with AI precision.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Dialog open={isSignUpOpen} onOpenChange={setIsSignUpOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full sm:w-auto bg-white hover:bg-[#9b87f5] text-[#9b87f5] hover:text-white border border-[#9b87f5] px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)]">
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
              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full sm:w-auto bg-white hover:bg-[#9b87f5] text-[#9b87f5] hover:text-white border border-[#9b87f5] px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)]">
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[640px] p-0">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/hgtB7Uy6amA"
                      title="Luc-ia Demo Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div 
            ref={heroImageRef}
            className="relative mt-8 lg:mt-0 opacity-0 translate-y-10 transition-all duration-700 px-4 sm:px-0"
          >
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#9b87f5] to-purple-500 blur-3xl opacity-20 animate-pulse"></div>
            <img
              src="/lovable-uploads/329ecd80-d9d3-4003-9f69-808f16af67ae.png"
              alt="Luc-ia AI Assistant"
              className="relative w-full rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(155,135,245,0.2)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};