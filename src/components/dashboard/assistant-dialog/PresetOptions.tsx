import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PresetOptionsProps {
  onBack: () => void;
}

export const PresetOptions = ({ onBack }: PresetOptionsProps) => {
  const navigate = useNavigate();

  const handlePresetSelect = () => {
    navigate("/assistants");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <button
          onClick={onBack}
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
};