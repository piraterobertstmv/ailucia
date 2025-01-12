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

const STRIPE_CHECKOUT_URLS = {
  "Starter": {
    monthly: "https://buy.stripe.com/14k03X7Dp45Kf5e6oo",
    yearly: "#"
  },
  "Professional": {
    monthly: "#",
    yearly: "#"
  },
  "Enterprise": {
    monthly: "#",
    yearly: "#"
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

  const handleCheckout = () => {
    const checkoutUrl = STRIPE_CHECKOUT_URLS[name][billingPeriod];
    if (checkoutUrl === "#") {
      toast({
        variant: "destructive",
        title: "Not Available",
        description: "This plan is not available yet. Please try another plan.",
      });
      return;
    }
    window.location.href = checkoutUrl;
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