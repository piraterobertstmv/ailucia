import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect plan for your business needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                index === 1
                  ? "relative bg-gray-50 shadow-2xl sm:mx-8 sm:px-8"
                  : ""
              }`}
            >
              <h3 className="text-lg font-semibold leading-8 text-primary">
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-primary">
                  {tier.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  /month
                </span>
              </p>
              <Button
                variant={index === 1 ? "default" : "outline"}
                className={`mt-6 w-full ${
                  index === 1 ? "bg-secondary hover:bg-secondary/90" : ""
                }`}
              >
                Get started
              </Button>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};