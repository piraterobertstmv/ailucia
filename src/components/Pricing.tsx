import { PricingCard } from "./pricing/PricingCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const monthlyTiers = [
  {
    name: "Starter",
    price: "€49.99",
    description: "Perfect for small businesses",
    features: [
      "50 calls per month",
      "Basic appointment scheduling",
      "Email notifications",
      "24/7 availability",
    ],
  },
  {
    name: "Professional",
    price: "€99.99",
    description: "For growing businesses",
    features: [
      "200 calls per month",
      "Advanced scheduling",
      "SMS notifications",
      "Priority support",
      "Custom greeting",
    ],
  },
  {
    name: "Enterprise",
    price: "€199.99",
    description: "For large organizations",
    features: [
      "Unlimited calls",
      "Full integration suite",
      "Dedicated account manager",
      "Custom AI training",
      "Analytics dashboard",
    ],
  },
];

const calculateYearlyPrice = (monthlyPrice: string) => {
  const numericPrice = parseFloat(monthlyPrice.replace('€', ''));
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