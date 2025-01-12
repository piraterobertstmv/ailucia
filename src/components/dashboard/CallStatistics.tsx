import { CallUsageCard } from "./CallUsageCard";
import { CallHistoryChart } from "./CallHistoryChart";

export const CallStatistics = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <CallUsageCard />
      <CallHistoryChart />
    </div>
  );
};