interface PricingHeaderProps {
  name: string;
  description: string;
}

export const PricingHeader = ({ name, description }: PricingHeaderProps) => {
  return (
    <>
      <h3 className="text-lg font-semibold leading-8 text-secondary group-hover:text-white">
        {name}
      </h3>
      <p className="mt-4 text-sm leading-6 text-secondary/80 group-hover:text-white/80">
        {description}
      </p>
    </>
  );
};