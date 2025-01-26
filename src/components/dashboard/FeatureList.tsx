import React from 'react';
import { Check } from "lucide-react";

interface FeatureListProps {
  title: string;
  items: string[];
}

export const FeatureList = ({ title, items }: FeatureListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start p-2 rounded-md transition-all duration-300 hover:bg-[#9b87f5]/5 hover:scale-105">
            <Check className="h-5 w-5 text-[#9b87f5] mr-2 mt-1" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};