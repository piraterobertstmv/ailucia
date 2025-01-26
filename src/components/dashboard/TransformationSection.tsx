import React from 'react';

export const TransformationSection = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">How luc-ia Transforms Your Business</h2>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:border-[#9b87f5] hover:shadow-lg hover:scale-105 hover:bg-[#9b87f5]/5">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Availability</h3>
          <p className="text-gray-600">Never miss an important call or message, even outside business hours. luc-ia handles everything while you focus on what matters most.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:border-[#9b87f5] hover:shadow-lg hover:scale-105 hover:bg-[#9b87f5]/5">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Efficiency</h3>
          <p className="text-gray-600">Save up to 80% compared to traditional secretarial services. No sick days, no holidays, just reliable service around the clock.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:border-[#9b87f5] hover:shadow-lg hover:scale-105 hover:bg-[#9b87f5]/5">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Scheduling</h3>
          <p className="text-gray-600">Intelligent appointment management that considers your preferences and availability, eliminating double bookings.</p>
        </div>
      </div>
    </div>
  );
};