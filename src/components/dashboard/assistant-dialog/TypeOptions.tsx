import { ArrowLeft, ArrowDown, ArrowUp, MessageSquare, X } from "lucide-react";
import { DialogClose } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

interface TypeOptionsProps {
  onBack: () => void;
}

export const TypeOptions = ({ onBack }: TypeOptionsProps) => {
  const navigate = useNavigate();

  const assistantTypes = [
    {
      icon: <ArrowUp className="w-8 h-8" />,
      title: "Outbound",
      description: "Automate calls within workflows using Zapier, REST API, or HighLevel",
      onClick: () => navigate("/assistants"),
    },
    {
      icon: <ArrowDown className="w-8 h-8" />,
      title: "Inbound",
      description: "Manage incoming calls via phone, Zapier, REST API, or HighLevel",
      onClick: () => navigate("/assistants"),
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Widget",
      description: "Create a widget and easily embed it anywhere in your app",
      onClick: () => navigate("/assistants"),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <DialogClose className="text-gray-500 hover:text-gray-700">
          <X className="w-5 h-5" />
        </DialogClose>
      </div>
      <h2 className="text-2xl font-semibold">Choose type of assistant</h2>
      <div className="grid grid-cols-1 gap-4">
        {assistantTypes.map((type, index) => (
          <button
            key={index}
            onClick={type.onClick}
            className="flex flex-col p-6 rounded-lg border hover:border-purple-400 transition-colors text-left space-y-2"
          >
            <div className="text-gray-700">
              {type.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {type.title}
            </h3>
            <p className="text-gray-600">
              {type.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};