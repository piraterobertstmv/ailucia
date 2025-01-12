import { Check } from "lucide-react";

interface PricingFeatureProps {
  feature: string;
  isMiddleCard: boolean;
}

export const PricingFeature = ({ feature, isMiddleCard }: PricingFeatureProps) => {
  return (
    <li className="flex gap-x-3 text-secondary">
      <Check className="h-6 w-5 flex-none text-secondary" />
      {feature}
    </li>
  );
};