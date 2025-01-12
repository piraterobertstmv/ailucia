import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-accent/10 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center animate-fade-up">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Meet Luc<span className="text-[#9b87f5]">-ia</span>, Your AI Secretary
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Never miss a call, appointment, or important message again. Luc-ia handles your phone calls, takes notes, and manages your schedule with AI precision.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button className="bg-white hover:bg-[#9b87f5] text-[#9b87f5] hover:text-white border border-[#9b87f5] px-8 py-6 text-lg transition-colors">
                Get Started Free
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white hover:bg-[#9b87f5] text-[#9b87f5] hover:text-white border border-[#9b87f5] px-8 py-6 text-lg transition-colors">
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] max-h-[90vh] p-0">
                  <DialogTitle className="sr-only">Demo Video</DialogTitle>
                  <div className="relative w-full aspect-video">
                    <video 
                      controls 
                      autoPlay
                      className="absolute inset-0 w-full h-full"
                      src="/Luc-ia.mp4"
                      preload="auto"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <img
              src="/lovable-uploads/57a44d07-5d6f-4ab0-ae7e-55513559485e.png"
              alt="AI Secretary Interface"
              className="rounded-xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};