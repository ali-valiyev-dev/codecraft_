import { useFetchData } from "../hooks";
import FeaturedClient from "./FeaturedClient";
import Loading from "./Loading";

const FeaturedClients = () => {
  const { data, loading, error } = useFetchData("featured_clients", "*");

  if (error) {
    return null;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col flex-nowrap items-center gap-5 overflow-hidden">
      <h2 className="font-medium text-neutral-300 lg:text-lg xl:text-xl">
        Featured Clients
      </h2>
      <ul className="flex items-center justify-center gap-5">
        {data.map(client => (
          <FeaturedClient
            key={client._id}
            {...client}
          />
        ))}
      </ul>
    </div>
  );
};

export default FeaturedClients;
