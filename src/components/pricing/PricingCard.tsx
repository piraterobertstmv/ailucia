import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { PricingHeader } from "./PricingHeader";
import { PricingPrice } from "./PricingPrice";
import { PricingFeatureList } from "./PricingFeatureList";

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
    yearly: "https://buy.stripe.com/00g8At3n90Ty1eo6or"
  },
  "Professional": {
    monthly: "https://buy.stripe.com/7sI03X1f159O4qAcMN",
    yearly: "#"
  },
  "Enterprise": {
    monthly: "https://buy.stripe.com/8wM1810aX59Oe1a4gi",
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
    setIsLoading(true);
    const checkoutUrl = STRIPE_CHECKOUT_URLS[name][billingPeriod];
    
    if (checkoutUrl === "#") {
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Not Available",
        description: "This plan is not available yet. Please try another plan.",
      });
      return;
    }

    try {
      // Open in a new tab for better user experience
      window.open(checkoutUrl, '_blank');
    } catch (error) {
      console.error('Error redirecting to checkout:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not redirect to checkout. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-3xl p-8 ring-1 h-full w-full bg-white text-left transition-all duration-300 hover:bg-secondary group">
      <PricingHeader name={name} description={description} />
      <PricingPrice price={price} billingPeriod={billingPeriod} />
      <Button
        variant="outline"
        className="mt-6 w-full border-secondary text-secondary transition-colors group-hover:bg-transparent group-hover:border-white group-hover:text-white"
        onClick={handleCheckout}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Get started"}
      </Button>
      <PricingFeatureList features={features} isMiddleCard={isMiddleCard} />
    </div>
  );
};