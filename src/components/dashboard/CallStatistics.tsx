import { CallUsageCard } from "./CallUsageCard";
import { CallHistoryChart } from "./CallHistoryChart";

export const CallStatistics = () => {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
      <div className="w-full min-h-[250px] sm:min-h-[300px]">
        <CallUsageCard />
      </div>
      <div className="w-full min-h-[250px] sm:min-h-[300px]">
        <CallHistoryChart />
      </div>
    </div>
  );
};