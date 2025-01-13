import { Plus, Sparkle, Grid } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const CreateAssistantDialog = () => {
  const options = [
    {
      icon: <Plus className="w-8 h-8 text-gray-600" />,
      title: "Start from scratch",
      description: "Build your AI Assistant from the ground up",
      onClick: () => console.log("Start from scratch clicked"),
      className: "border-dashed border-2",
    },
    {
      icon: <Sparkle className="w-8 h-8 text-purple-600" />,
      title: "Quick Assistant Setup",
      description: "Use presets to streamline setup & adjust settings",
      onClick: () => console.log("Quick setup clicked"),
      className: "bg-purple-50",
    },
    {
      icon: <Grid className="w-8 h-8 text-gray-600" />,
      title: "Browse our Templates",
      description: "Get inspired by our templates to get started",
      onClick: () => console.log("Templates clicked"),
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700">
          Create new Luc-ia
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Create New Assistant
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={option.onClick}
              className={`flex flex-col items-center justify-center p-8 rounded-lg border transition-all hover:border-purple-400 hover:shadow-md text-center space-y-4 min-h-[250px] ${
                option.className || ""
              }`}
            >
              <div className="rounded-full bg-white p-4 shadow-sm">
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {option.title}
              </h3>
              <p className="text-gray-600 text-sm">{option.description}</p>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAssistantDialog;