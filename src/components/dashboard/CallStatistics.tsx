import { CallUsageCard } from "./CallUsageCard";
import { CallHistoryChart } from "./CallHistoryChart";

export const CallStatistics = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="w-full min-h-[300px]">
        <CallUsageCard />
      </div>
      <div className="w-full min-h-[300px]">
        <CallHistoryChart />
      </div>
    </div>
  );
};