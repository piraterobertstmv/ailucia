import { Pricing } from "@/components/Pricing";
import { Navbar } from "@/components/Navbar";
import { useSession } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

const PricingPage = () => {
  const session = useSession();

  const { data: businessProfile, isLoading, error } = useQuery({
    queryKey: ['businessProfile', session?.user?.id],
    queryFn: async () => {
      if (!session?.user?.id) return null;
      
      const { data, error } = await supabase
        .from('business_profiles')
        .select('*')
        .eq('id', session.user.id)
        .maybeSingle();
      
      if (error) {
        console.error('Error fetching business profile:', error);
        throw error;
      }
      
      return data;
    },
    enabled: !!session?.user?.id,
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          {isLoading && (
            <div className="flex justify-center items-center mb-8">
              <Loader2 className="h-6 w-6 animate-spin text-secondary" />
            </div>
          )}
          
          {error && (
            <Alert variant="destructive" className="mb-8">
              <AlertDescription>
                There was an error loading your business profile. Please try again later.
              </AlertDescription>
            </Alert>
          )}
          
          {businessProfile && (
            <div className="mb-8 p-4 bg-secondary/10 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Current Plan</h2>
              <p className="text-gray-600">
                You are currently on the{" "}
                <span className="font-semibold text-secondary capitalize">
                  {businessProfile.plan_type}
                </span>{" "}
                plan
              </p>
            </div>
          )}
          <Pricing />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;