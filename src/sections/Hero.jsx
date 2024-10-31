import { Icon } from "@iconify/react";
import { FeaturedClients, Loading } from "../components";
import { useLoadingState, useFetchData, useFetchMedia } from "../hooks";
import { useGSAP } from "@gsap/react";
import animate from "../utils/animate";

const Hero = () => {
  const { data } = useFetchData("hero", "*");
  const { mediaSrc } = useFetchMedia("videos", "hero-bg.mp4");

  const { loading, error } = useLoadingState(data, mediaSrc);

  useGSAP(() => {
    if (!loading) {
      animate([".anim-hero-content"]);
    }
  }, [loading]);

  if (error) return null;

  if (loading) return <Loading />;

  return (
    <section className="w-full flex justify-center overflow-hidden relative">
      {/* Hero bg video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={mediaSrc}
        autoPlay
        muted
        loop
        preload="none"
        playsInline
        aria-label="Background video of Codecraft_"
      />

      <div className="absolute inset-0 bg-primary-blue bg-opacity-70" />

      <div className="px-4 md:px-10 xl:px-0 relative flex flex-col items-center justify-center gap-20 h-screen max-w-5xl">
        {/* Hero text */}
        <div className=" text-center text-neutral-white space-y-5">
          <h1 className="anim-hero-content text-3xl md:text-4xl lg:text-6xl">
            {data[0]?.header} <br />
            <span className="text-primary-very-light-blue font-bold">
              {data[0]?.sub_header}
            </span>
          </h1>

          <p className="anim-hero-content text-lg lg:text-xl xl:text-2xl">
            {data[0]?.desc}
          </p>
        </div>

        {/* featured clients */}
        <div className="anim-hero-content">
          <FeaturedClients />
        </div>
      </div>

      {/* scroll down */}
      <div className="anim-hero-content absolute bottom-10 uppercase text-neutral-white flex flex-col items-center justify-center">
        <span>Scroll</span>
        <Icon
          icon="mdi:chevron-down"
          width={32}
          height={32}
        />
      </div>
    </section>
  );
};

export default Hero;
