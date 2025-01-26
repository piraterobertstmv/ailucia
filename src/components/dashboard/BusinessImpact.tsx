import React from 'react';

interface ImpactStatProps {
  value: string;
  description: string;
}

const ImpactStat = ({ value, description }: ImpactStatProps) => (
  <div className="text-center transition-transform duration-300 hover:scale-105">
    <div className="text-4xl font-bold text-[#9b87f5] mb-2">{value}</div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const BusinessImpact = () => {
  return (
    <div className="mt-16">
      <div className="bg-[#9b87f5]/5 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">The Business Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImpactStat value="60%" description="Reduction in missed business opportunities" />
          <ImpactStat value="40hrs" description="Saved per month on administrative tasks" />
          <ImpactStat value="100%" description="Service availability" />
        </div>
      </div>
    </div>
  );
};