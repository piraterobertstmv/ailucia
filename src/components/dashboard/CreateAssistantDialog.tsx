import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { InitialOptions } from "./assistant-dialog/InitialOptions";
import { PresetOptions } from "./assistant-dialog/PresetOptions";
import { TypeOptions } from "./assistant-dialog/TypeOptions";

type Step = "initial" | "preset" | "type";

export const CreateAssistantDialog = () => {
  const [step, setStep] = useState<Step>("initial");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700">
          Create new Luc-ia
        </Button>
      </DialogTrigger>
      <DialogContent className={`sm:max-w-[${step === "preset" ? "600px" : "900px"}]`}>
        {step === "initial" && (
          <InitialOptions onSelectOption={setStep} />
        )}
        {step === "preset" && (
          <PresetOptions onBack={() => setStep("initial")} />
        )}
        {step === "type" && (
          <TypeOptions onBack={() => setStep("initial")} />
        )}
      </DialogContent>
    </Dialog>
  );
};