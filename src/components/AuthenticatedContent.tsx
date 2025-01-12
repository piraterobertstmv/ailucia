import React from 'react';
import { WelcomeSection } from './dashboard/WelcomeSection';
import { TransformationSection } from './dashboard/TransformationSection';
import { FeatureList } from './dashboard/FeatureList';
import { BusinessImpact } from './dashboard/BusinessImpact';

export const AuthenticatedContent = () => {
  const callManagementItems = [
    "Professional call answering in your business name",
    "Message taking and prioritization",
    "Call screening and forwarding",
    "Emergency call handling protocols",
    "Multi-language support",
  ];

  const businessOperationsItems = [
    "Appointment scheduling and management",
    "Calendar optimization",
    "Client information management",
    "Basic customer service inquiries",
    "Follow-up reminders and coordination",
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <WelcomeSection />
        <TransformationSection />
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What luc-ia Can Handle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureList title="Call Management" items={callManagementItems} />
            <FeatureList title="Business Operations" items={businessOperationsItems} />
          </div>
        </div>

        <BusinessImpact />
      </div>
    </div>
  );
};