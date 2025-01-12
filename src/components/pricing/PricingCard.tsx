import { Button } from "@/components/ui/button";
import { PricingFeature } from "./PricingFeature";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isMiddleCard: boolean;
}

export const PricingCard = ({
  name,
  price,
  description,
  features,
  isMiddleCard,
}: PricingCardProps) => {
  return (
    <div
      className={`rounded-3xl p-8 ring-1 transition-all duration-300 ease-in-out h-full w-full hover:scale-105 hover:shadow-xl
        ${
          isMiddleCard
            ? "bg-secondary ring-white hover:bg-white hover:ring-gray-200 group-hover/pricing:bg-secondary group-hover/pricing:ring-white"
            : "ring-gray-200 hover:bg-secondary group-hover/pricing:ring-gray-200 group-hover/pricing:bg-transparent"
        }
        group
      `}
    >
      <h3
        className={`text-lg font-semibold leading-8 ${
          isMiddleCard
            ? "text-white group-hover:text-primary group-hover/pricing:text-white"
            : "text-primary group-hover:text-white group-hover/pricing:text-primary"
        }`}
      >
        {name}
      </h3>
      <p
        className={`mt-4 text-sm leading-6 ${
          isMiddleCard
            ? "text-white/80 group-hover:text-gray-600 group-hover/pricing:text-white/80"
            : "text-gray-600 group-hover:text-white/80 group-hover/pricing:text-gray-600"
        }`}
      >
        {description}
      </p>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span
          className={`text-4xl font-bold tracking-tight ${
            isMiddleCard
              ? "text-white group-hover:text-primary group-hover/pricing:text-white"
              : "text-primary group-hover:text-white group-hover/pricing:text-primary"
          }`}
        >
          {price}
        </span>
        <span
          className={`text-sm font-semibold leading-6 ${
            isMiddleCard
              ? "text-white/80 group-hover:text-gray-600 group-hover/pricing:text-white/80"
              : "text-gray-600 group-hover:text-white/80 group-hover/pricing:text-gray-600"
          }`}
        >
          /month
        </span>
      </p>
      <Button
        variant={isMiddleCard ? "default" : "outline"}
        className={`mt-6 w-full transition-colors duration-300 ${
          isMiddleCard
            ? "bg-white text-secondary hover:bg-white/90 group-hover:bg-secondary group-hover:text-white group-hover/pricing:bg-white group-hover/pricing:text-secondary"
            : "group-hover:bg-white group-hover:text-secondary border-gray-200 group-hover/pricing:bg-transparent group-hover/pricing:text-primary"
        }`}
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
  );
};