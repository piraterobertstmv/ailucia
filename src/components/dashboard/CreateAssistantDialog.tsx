import { ArrowLeft, ArrowDown, ArrowUp, MessageSquare, Plus, Sparkle, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Step = "initial" | "preset" | "type";

export const CreateAssistantDialog = () => {
  const [step, setStep] = useState<Step>("initial");
  const navigate = useNavigate();

  const initialOptions = [
    {
      icon: <Plus className="w-8 h-8 text-gray-600" />,
      title: "Start from scratch",
      description: "Build your AI Assistant from the ground up",
      onClick: () => setStep("type"),
      className: "border-dashed border-2",
    },
    {
      icon: <Sparkle className="w-8 h-8 text-purple-600" />,
      title: "Quick Assistant Setup",
      description: "Use presets to streamline setup & adjust settings",
      onClick: () => setStep("preset"),
      className: "bg-purple-50",
    },
  ];

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

  const handlePresetSelect = () => {
    navigate("/assistants");
  };

  const presetContent = (
    <div className="space-y-6">
      <div className="flex items-center">
        <button
          onClick={() => setStep("initial")}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
      </div>
      <h2 className="text-2xl font-semibold">Select preset to continue</h2>
      <div 
        onClick={handlePresetSelect}
        className="border rounded-lg p-6 cursor-pointer hover:border-purple-400 transition-colors"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm mb-4">
          Inbound
        </div>
        <h3 className="text-xl font-semibold mb-2">Inbound Receptionist</h3>
        <p className="text-gray-600">
          Welcome and assist visitors with ease. Luc-ia handles all inbound communication.
        </p>
      </div>
    </div>
  );

  const typeContent = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setStep("initial")}
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

  const initialContent = (
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700">
          Create new Luc-ia
        </Button>
      </DialogTrigger>
      <DialogContent className={`sm:max-w-[${step === "preset" ? "600px" : "900px"}]`}>
        {step === "initial" && initialContent}
        {step === "preset" && presetContent}
        {step === "type" && typeContent}
      </DialogContent>
    </Dialog>
  );
};