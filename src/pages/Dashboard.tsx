import { useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import { CallStatistics } from "@/components/dashboard/CallStatistics";
import { CallMetrics } from "@/components/dashboard/CallMetrics";
import { BusinessProfileForm } from "@/components/dashboard/BusinessProfileForm";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { CreateAssistantDialog } from "@/components/dashboard/CreateAssistantDialog";

const Dashboard = () => {
  const session = useSession();
  const navigate = useNavigate();

  const { data: businessProfile } = useQuery({
    queryKey: ['businessProfile', session?.user?.id],
    queryFn: async () => {
      if (!session?.user?.id) return null;
      const { data, error } = await supabase
        .from('business_profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!session?.user?.id,
  });

  if (!session) {
    navigate("/");
    return null;
  }

  return (
    <div className="container mx-auto py-4 px-4">
      <div className="flex justify-between items-center mb-6">
        <Link to="/pricing">
          <Button
            className="bg-white hover:bg-[#9b87f5] text-[#9b87f5] hover:text-white border border-[#9b87f5] transition-colors"
          >
            Back to Pricing
          </Button>
        </Link>
        <CreateAssistantDialog />
      </div>
      {businessProfile && (
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-gray-600">Current Plan:</span>
          <Link to="/pricing">
            <span className="font-semibold text-secondary capitalize hover:underline cursor-pointer">
              {businessProfile.plan_type}
            </span>
          </Link>
        </div>
      )}
      <div className="space-y-8">
        <CallStatistics />
        <CallMetrics />
        <BusinessProfileForm />
      </div>
    </div>
  );
};

export default Dashboard;