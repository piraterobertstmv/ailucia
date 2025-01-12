import { Check } from "lucide-react";

export const AuthenticatedContent = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to <span className="text-[#9b87f5]">luc-ia</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your 24/7 AI-powered virtual secretary, revolutionizing how you manage your business communications
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How luc-ia Transforms Your Business</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Availability</h3>
              <p className="text-gray-600">Never miss an important call or message, even outside business hours. luc-ia handles everything while you focus on what matters most.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Efficiency</h3>
              <p className="text-gray-600">Save up to 80% compared to traditional secretarial services. No sick days, no holidays, just reliable service around the clock.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Scheduling</h3>
              <p className="text-gray-600">Intelligent appointment management that considers your preferences and availability, eliminating double bookings.</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What luc-ia Can Handle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Call Management</h3>
              <ul className="space-y-3">
                {[
                  "Professional call answering in your business name",
                  "Message taking and prioritization",
                  "Call screening and forwarding",
                  "Emergency call handling protocols",
                  "Multi-language support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#9b87f5] mr-2 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Business Operations</h3>
              <ul className="space-y-3">
                {[
                  "Appointment scheduling and management",
                  "Calendar optimization",
                  "Client information management",
                  "Basic customer service inquiries",
                  "Follow-up reminders and coordination",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#9b87f5] mr-2 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-[#9b87f5]/5 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Business Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#9b87f5] mb-2">60%</div>
                <p className="text-gray-600">Reduction in missed business opportunities</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#9b87f5] mb-2">40hrs</div>
                <p className="text-gray-600">Saved per month on administrative tasks</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#9b87f5] mb-2">99.9%</div>
                <p className="text-gray-600">Service availability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};