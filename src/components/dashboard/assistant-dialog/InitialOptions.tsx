import { Plus, Sparkle } from "lucide-react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface InitialOptionsProps {
  onSelectOption: (step: "type" | "preset") => void;
}

export const InitialOptions = ({ onSelectOption }: InitialOptionsProps) => {
  const initialOptions = [
    {
      icon: <Plus className="w-8 h-8 text-gray-600" />,
      title: "Start from scratch",
      description: "Build your AI Assistant from the ground up",
      onClick: () => onSelectOption("type"),
      className: "border-dashed border-2",
    },
    {
      icon: <Sparkle className="w-8 h-8 text-purple-600" />,
      title: "Quick Assistant Setup",
      description: "Use presets to streamline setup & adjust settings",
      onClick: () => onSelectOption("preset"),
      className: "bg-purple-50",
    },
  ];

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl font-semibold">
          Create New Assistant
        </DialogTitle>
      </DialogHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {initialOptions.map((option, index) => (
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
    </>
  );
};