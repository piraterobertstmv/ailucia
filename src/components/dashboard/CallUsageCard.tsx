import { useSession } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const CallUsageCard = () => {
  const session = useSession();

  const { data: businessProfile } = useQuery({
    queryKey: ["businessProfile", session?.user?.id],
    queryFn: async () => {
      const { data } = await supabase
        .from("business_profiles")
        .select("*")
        .eq("id", session?.user?.id)
        .maybeSingle();
      return data;
    },
    enabled: !!session?.user?.id,
  });

  const { data: callStats } = useQuery({
    queryKey: ["callStats", session?.user?.id],
    queryFn: async () => {
      const { data } = await supabase
        .from("call_statistics")
        .select("*")
        .eq("user_id", session?.user?.id)
        .order("call_date", { ascending: true });
      return data || [];
    },
    enabled: !!session?.user?.id,
  });

  const totalCalls = callStats?.reduce((sum, stat) => sum + (stat.calls_count || 0), 0) || 0;
  const planLimit = businessProfile?.plan_call_limit || 100;
  const usagePercentage = (totalCalls / planLimit) * 100;
  const remainingCalls = planLimit - totalCalls;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Call Usage</CardTitle>
        <CardDescription>
          Your current plan: {businessProfile?.plan_type || "Basic"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {totalCalls.toLocaleString()} / {planLimit.toLocaleString()} calls used
              </span>
              <span className="text-sm text-muted-foreground">
                {usagePercentage.toFixed(1)}%
              </span>
            </div>
            <Progress value={usagePercentage} className="h-2" />
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">
                Remaining calls: {remainingCalls.toLocaleString()}
              </span>
              {usagePercentage >= 80 && (
                <span className="text-destructive">
                  {usagePercentage >= 100 ? "Limit reached" : "Near limit"}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};