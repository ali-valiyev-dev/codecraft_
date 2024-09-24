import StatisticItem from "./StatisticItem";
import { STATS } from "../constants";

const Statistics = () => {
  return (
    <div className="w-full flex flex-wrap justify-evenly items-center gap-y-12">
      {STATS.map(({ label, total }, index) => (
        <StatisticItem
          key={index}
          label={label}
          total={total}
        />
      ))}
    </div>
  );
};

export default Statistics;
