import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import { CallStatistics } from "@/components/dashboard/CallStatistics";
import { BusinessProfileForm } from "@/components/dashboard/BusinessProfileForm";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const session = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/");
    }
  }, [session, navigate]);

  if (!session) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-end mb-6">
        <Button
          onClick={() => navigate("/")}
          className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white"
        >
          Back to Home
        </Button>
      </div>
      <div className="space-y-8">
        <CallStatistics />
        <BusinessProfileForm />
      </div>
    </div>
  );
};

export default Dashboard;