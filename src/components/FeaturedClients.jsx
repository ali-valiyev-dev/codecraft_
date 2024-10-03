import { FEATURED_CLIENTS } from "../constants";

const FeaturedClients = () => {
  return (
    <div className="w-full flex flex-col flex-nowrap items-center gap-5 overflow-hidden">
      <h4 className="font-medium text-neutral-300 lg:text-lg xl:text-xl">
        Featured Clients
      </h4>
      <ul className="flex items-center justify-center gap-5">
        {FEATURED_CLIENTS.map((logo, index) => (
          <li key={index}>
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-6 sm:h-12"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedClients;
