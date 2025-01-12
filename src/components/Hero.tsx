import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-accent/10 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Meet luc-ia, Your AI Secretary
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Never miss a call, appointment, or important message again. luc-ia handles your phone calls, takes notes, and manages your schedule with AI precision.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
                Get Started Free
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up group">
            <img
              src="/lovable-uploads/57a44d07-5d6f-4ab0-ae7e-55513559485e.png"
              alt="AI Secretary Interface"
              className="rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};