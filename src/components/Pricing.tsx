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
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-3 group/pricing">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 ring-1 transition-all duration-300 ease-in-out h-full
                ${index === 1 
                  ? "relative bg-secondary sm:mx-8 sm:px-8 ring-white shadow-2xl group-hover/pricing:bg-white group-hover/pricing:ring-gray-200" 
                  : "ring-gray-200 hover:bg-secondary hover:shadow-xl hover:scale-105"
                }
                group
              `}
            >
              <h3 className={`text-lg font-semibold leading-8 ${
                index === 1 
                  ? "text-white group-hover/pricing:text-primary" 
                  : "text-primary group-hover:text-white"
              }`}>
                {tier.name}
              </h3>
              <p className={`mt-4 text-sm leading-6 ${
                index === 1 
                  ? "text-white/80 group-hover/pricing:text-gray-600" 
                  : "text-gray-600 group-hover:text-white/80"
              }`}>
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className={`text-4xl font-bold tracking-tight ${
                  index === 1 
                    ? "text-white group-hover/pricing:text-primary" 
                    : "text-primary group-hover:text-white"
                }`}>
                  {tier.price}
                </span>
                <span className={`text-sm font-semibold leading-6 ${
                  index === 1 
                    ? "text-white/80 group-hover/pricing:text-gray-600" 
                    : "text-gray-600 group-hover:text-white/80"
                }`}>
                  /month
                </span>
              </p>
              <Button
                variant={index === 1 ? "default" : "outline"}
                className={`mt-6 w-full transition-colors duration-300 ${
                  index === 1 
                    ? "bg-white text-secondary hover:bg-white/90 group-hover/pricing:bg-transparent group-hover/pricing:text-primary group-hover/pricing:border-gray-200" 
                    : "group-hover:bg-white group-hover:text-secondary border-gray-200"
                }`}
              >
                Get started
              </Button>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className={`flex gap-x-3 ${
                    index === 1 
                      ? "text-white group-hover/pricing:text-gray-600" 
                      : "text-gray-600 group-hover:text-white"
                  }`}>
                    <Check className={`h-6 w-5 flex-none ${
                      index === 1 
                        ? "text-white group-hover/pricing:text-secondary" 
                        : "text-secondary group-hover:text-white"
                    }`} />
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