import { PricingFeature } from "./PricingFeature";

interface PricingFeatureListProps {
  features: string[];
  isMiddleCard: boolean;
}

export const PricingFeatureList = ({ features, isMiddleCard }: PricingFeatureListProps) => {
  return (
    <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
      {features.map((feature) => (
        <PricingFeature
          key={feature}
          feature={feature}
          isMiddleCard={isMiddleCard}
        />
      ))}
    </ul>
  );
};