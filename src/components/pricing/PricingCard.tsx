import { Button } from "@/components/ui/button";
import { PricingFeature } from "./PricingFeature";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isMiddleCard: boolean;
  billingPeriod: "monthly" | "yearly";
}

const PRICE_IDS = {
  "Starter": {
    monthly: "price_YOUR_STARTER_MONTHLY_PRICE_ID",
    yearly: "price_YOUR_STARTER_YEARLY_PRICE_ID"
  },
  "Professional": {
    monthly: "price_YOUR_PRO_MONTHLY_PRICE_ID",
    yearly: "price_YOUR_PRO_YEARLY_PRICE_ID"
  },
  "Enterprise": {
    monthly: "price_YOUR_ENTERPRISE_MONTHLY_PRICE_ID",
    yearly: "price_YOUR_ENTERPRISE_YEARLY_PRICE_ID"
  }
};

export const PricingCard = ({
  name,
  price,
  description,
  features,
  isMiddleCard,
  billingPeriod,
}: PricingCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      const priceId = PRICE_IDS[name][billingPeriod];
      
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/');
        return;
      }

      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: { priceId, billingPeriod }
      });

      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem initiating checkout. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
        onClick={handleCheckout}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Get started"}
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
  );
};