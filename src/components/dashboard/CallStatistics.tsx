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
import {
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Progress } from "@/components/ui/progress";

export const CallStatistics = () => {
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

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Call Usage</CardTitle>
          <CardDescription>
            Your current plan: {businessProfile?.plan_type || "Basic"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {totalCalls} / {planLimit} calls used
              </span>
              <span className="text-sm text-muted-foreground">
                {usagePercentage.toFixed(1)}%
              </span>
            </div>
            <Progress value={usagePercentage} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Call History</CardTitle>
          <CardDescription>Daily call statistics</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ChartContainer
            className="h-[300px]"
            config={{
              calls: {
                theme: {
                  light: "#805AD5",
                  dark: "#805AD5",
                },
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={callStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="call_date"
                  tickFormatter={(value) => new Date(value).toLocaleDateString()}
                />
                <YAxis />
                <ChartTooltip />
                <Bar
                  dataKey="calls_count"
                  name="Calls"
                  fill="var(--color-calls)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};