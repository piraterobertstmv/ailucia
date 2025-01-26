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

export const CallHistoryChart = () => {
  const session = useSession();

  const { data: callStats, error } = useQuery({
    queryKey: ["callStats", session?.user?.id],
    queryFn: async () => {
      console.log("Fetching call stats for user:", session?.user?.id);
      const { data, error: supabaseError } = await supabase
        .from("call_statistics")
        .select("*")
        .eq("user_id", session?.user?.id)
        .order("call_date", { ascending: true });

      if (supabaseError) {
        console.error("Supabase error:", supabaseError);
        throw supabaseError;
      }

      console.log("Received call stats:", data);
      return data || [];
    },
    enabled: !!session?.user?.id,
  });

  if (error) {
    console.error("Query error:", error);
  }

  return (
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
  );
};