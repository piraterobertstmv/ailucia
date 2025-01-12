import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import { CallStatistics } from "@/components/dashboard/CallStatistics";
import { BusinessProfileForm } from "@/components/dashboard/BusinessProfileForm";

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
      <div className="space-y-8">
        <CallStatistics />
        <BusinessProfileForm />
      </div>
    </div>
  );
};

export default Dashboard;