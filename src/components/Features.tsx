import { Phone, Calendar, MessageSquare, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const titleRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();

  return (
    <div className="py-12 sm:py-24 bg-gradient-to-b from-white via-secondary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="mx-auto max-w-2xl lg:text-center opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#9b87f5] to-purple-500 opacity-20 blur-xl animate-pulse" />
            <h2 className="relative text-base font-semibold leading-7 text-secondary">
              Powerful Features
            </h2>
          </div>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Everything you need to run your business smoothly
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            luc-ia combines advanced AI with traditional secretary skills to provide
            a comprehensive business support solution.
          </p>
        </div>
        <div 
          ref={featuresRef}
          className="mx-auto mt-8 sm:mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="flex flex-col items-start group hover:scale-105 transition-all duration-300 p-4"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#9b87f5] to-purple-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
                  <div className="relative rounded-lg bg-secondary/5 p-2 ring-1 ring-secondary/10 transition-colors duration-300 group-hover:bg-secondary/10 group-hover:shadow-[0_0_20px_rgba(155,135,245,0.2)]">
                    <feature.icon className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary group-hover:text-[#9b87f5] transition-colors duration-300">
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