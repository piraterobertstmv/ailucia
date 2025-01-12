import { Button } from "@/components/ui/button";
import { PricingFeature } from "./PricingFeature";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "@/integrations/supabase/client";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isMiddleCard: boolean;
  billingPeriod: "monthly" | "yearly";
}

export const PricingCard = ({
  name,
  price,
  description,
  features,
  isMiddleCard,
  billingPeriod,
}: PricingCardProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setIsAuthOpen(false);
        navigate('/dashboard');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <>
      <div className="rounded-3xl p-8 ring-1 h-full w-full bg-white text-left transition-all duration-300 hover:bg-secondary group">
        <h3 className="text-lg font-semibold leading-8 text-secondary group-hover:text-white">
          {name}
        </h3>
        <p className="mt-4 text-sm leading-6 text-secondary/80 group-hover:text-white/80">
          {description}
        </p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight text-secondary group-hover:text-white">
            {price}
          </span>
          <span className="text-sm font-semibold leading-6 text-secondary/80 group-hover:text-white/80">
            /{billingPeriod === "monthly" ? "month" : "year"}
          </span>
        </p>
        <Button
          variant="outline"
          className="mt-6 w-full border-secondary text-secondary transition-colors group-hover:bg-transparent group-hover:border-white group-hover:text-white"
          onClick={() => setIsAuthOpen(true)}
        >
          Get started
        </Button>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
          {features.map((feature) => (
            <PricingFeature
              key={feature}
              feature={feature}
              isMiddleCard={isMiddleCard}
            />
          ))}
        </ul>
      </div>

      <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle>Create an account</DialogTitle>
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
            theme="light"
            providers={[]}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};