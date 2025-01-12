import { PricingCard } from "./pricing/PricingCard";

const tiers = [
  {
    name: "Starter",
    price: "$29",
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
    price: "$99",
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
    price: "Custom",
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

export const Pricing = () => {
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
        </div>
        <div className="mx-auto mt-12 sm:mt-16 grid max-w-lg grid-cols-1 items-stretch gap-6 sm:gap-8 lg:max-w-4xl lg:grid-cols-3 group/pricing">
          {tiers.map((tier, index) => (
            <div key={tier.name} className="h-full w-full">
              <PricingCard
                name={tier.name}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                isMiddleCard={index === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};