interface PricingPriceProps {
  price: string;
  billingPeriod: "monthly" | "yearly";
}

export const PricingPrice = ({ price, billingPeriod }: PricingPriceProps) => {
  return (
    <p className="mt-6 flex items-baseline gap-x-1">
      <span className="text-4xl font-bold tracking-tight text-secondary group-hover:text-white">
        {price}
      </span>
      <span className="text-sm font-semibold leading-6 text-secondary/80 group-hover:text-white/80">
        /{billingPeriod === "monthly" ? "month" : "year"}
      </span>
    </p>
  );
};