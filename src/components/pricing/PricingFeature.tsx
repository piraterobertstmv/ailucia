import { Check } from "lucide-react";

interface PricingFeatureProps {
  feature: string;
  isMiddleCard: boolean;
}

export const PricingFeature = ({ feature, isMiddleCard }: PricingFeatureProps) => {
  return (
    <li
      className={`flex gap-x-3 ${
        isMiddleCard
          ? "text-white group-hover/pricing:text-gray-600"
          : "text-gray-600 group-hover:text-white"
      }`}
    >
      <Check
        className={`h-6 w-5 flex-none ${
          isMiddleCard
            ? "text-white group-hover/pricing:text-secondary"
            : "text-secondary group-hover:text-white"
        }`}
      />
      {feature}
    </li>
  );
};