import { PricingCard } from "./pricing/PricingCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const monthlyTiers = [
  {
    name: "Starter",
    price: "€59",
    description: "Perfect for small businesses",
    features: [
      "100 minutes included per month",
      "Up to 10 concurrent calls",
      "Unlimited assistants",
      "Basic integrations (Zapier, HubSpot)",
      "Standard Email Support",
      "€0.30/minute overage",
    ],
  },
  {
    name: "Professional",
    price: "€3,830.40",
    description: "For growing businesses",
    features: [
      "2,500 minutes included per month",
      "Up to 25 concurrent calls",
      "Subaccounts",
      "Multilanguage support",
      "Advanced integrations",
      "Batch campaigns",
      "Real-Time Booking & SMS",
      "Private Slack Channel (40-day)",
      "High Priority Support",
      "€0.25/minute overage",
    ],
  },
  {
    name: "Enterprise",
    price: "€1,200",
    description: "For large organizations",
    features: [
      "6,000 minutes included per month",
      "Unlimited concurrent calls",
      "Custom white-label platform",
      "Dedicated account manager",
      "All advanced integrations",
      "Early release features",
      "White-glove onboarding",
      "Priority support",
      "€0.20/minute overage",
    ],
  },
];

const calculateYearlyPrice = (monthlyPrice: string) => {
  if (monthlyPrice === "€1,200") {
    return "€13,200"; // Fixed yearly price for Enterprise plan
  }
  const numericPrice = parseFloat(monthlyPrice.replace('€', '').replace(',', ''));
  const yearlyPrice = (numericPrice * 12 * 0.8).toFixed(2); // 20% discount
  return `€${yearlyPrice}`;
};

export const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const currentTiers = monthlyTiers.map(tier => ({
    ...tier,
    price: billingPeriod === "monthly" ? tier.price : calculateYearlyPrice(tier.price),
  }));

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Choose the perfect plan for your business needs
          </p>
          <div className="mt-8">
            <Tabs
              defaultValue="monthly"
              value={billingPeriod}
              onValueChange={(value) => setBillingPeriod(value as "monthly" | "yearly")}
              className="inline-flex"
            >
              <TabsList className="grid w-full max-w-[400px] grid-cols-2">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">
                  Yearly <span className="ml-2 rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">Save 20%</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 grid max-w-lg grid-cols-1 items-stretch gap-6 sm:gap-8 lg:max-w-4xl lg:grid-cols-3 group/pricing">
          {currentTiers.map((tier, index) => (
            <div key={tier.name} className="h-full w-full">
              <PricingCard
                name={tier.name}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                isMiddleCard={index === 1}
                billingPeriod={billingPeriod}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
