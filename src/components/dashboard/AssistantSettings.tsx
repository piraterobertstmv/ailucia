import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const AssistantSettings = () => {
  const [step] = useState(1);
  const [companyUrl, setCompanyUrl] = useState("");
  const [greeting, setGreeting] = useState("Hey, you've called to [company]. How may I assist you today?");
  const [voice, setVoice] = useState("male");

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4">
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white">
              {step}
            </div>
            <h1 className="text-2xl font-semibold text-purple-600">General Settings</h1>
          </div>
          <p className="text-gray-500">
            Customize your assistant according to your preferences
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <label className="text-gray-700 font-medium">Company URL</label>
            <div className="flex gap-2">
              <Input
                placeholder="What is your company site URL?"
                value={companyUrl}
                onChange={(e) => setCompanyUrl(e.target.value)}
              />
              <Button variant="outline">Scrape Website</Button>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-gray-700 font-medium">Custom greeting</label>
            <Input
              value={greeting}
              onChange={(e) => setGreeting(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <label className="text-gray-700 font-medium">Voice</label>
            <RadioGroup
              value={voice}
              onValueChange={setVoice}
              className="flex gap-4 border rounded-lg p-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4">
          <p className="text-sm text-gray-500">
            You will be able to customize more options after the assistant has been created
          </p>
          <Button className="bg-[#1f2937]">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssistantSettings;