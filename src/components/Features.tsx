import { Phone, Calendar, MessageSquare, Clock } from "lucide-react";

const features = [
  {
    name: "Call Handling",
    description: "Professional call answering and message taking, 24/7.",
    icon: Phone,
  },
  {
    name: "Appointment Scheduling",
    description: "Seamless calendar management and appointment booking.",
    icon: Calendar,
  },
  {
    name: "Message Management",
    description: "Organized communication and follow-up handling.",
    icon: MessageSquare,
  },
  {
    name: "Real-time Updates",
    description: "Instant notifications and status updates.",
    icon: Clock,
  },
];

export const Features = () => {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-secondary">
            Powerful Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Everything you need to run your business smoothly
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            luc-ia combines advanced AI with traditional secretary skills to provide
            a comprehensive business support solution.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-start">
                <div className="rounded-lg bg-secondary/5 p-2 ring-1 ring-secondary/10">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};