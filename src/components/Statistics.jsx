import { useFetchData } from "../hooks";
import Loading from "./Loading";
import StatisticItem from "./StatisticItem";

const Statistics = () => {
  const { data, loading, error } = useFetchData("statistics", "*");

  if (error) return null;

  if (loading) return <Loading />;

  return (
    <div className="w-full flex flex-wrap justify-evenly items-center gap-y-12">
      {data.map(stats => (
        <StatisticItem
          key={stats._id}
          {...stats}
        />
      ))}
    </div>
  );
};

export default Statistics;
