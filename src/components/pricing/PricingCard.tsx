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
    try {
      if (name === "Starter" && billingPeriod === "monthly") {
        window.open('https://buy.stripe.com/dR69Exe1NgSwcX6eV0', '_blank');
      } else if (name === "Professional" && billingPeriod === "monthly") {
        window.open('https://buy.stripe.com/9AQ1810aX45K2is7sA', '_blank');
      } else if (name === "Enterprise" && billingPeriod === "monthly") {
        window.open('https://buy.stripe.com/7sI8At3n99q49KU7sB', '_blank');
      } else if (name === "Starter" && billingPeriod === "yearly") {
        window.open('https://buy.stripe.com/7sI8At4rd31G4qAfZ8', '_blank');
      } else {
        toast({
          title: "Coming soon",
          description: "Our subscription system is currently under development. Please check back later.",
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred. Please try again.",
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