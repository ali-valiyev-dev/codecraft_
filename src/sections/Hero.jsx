import { Icon } from "@iconify/react";
import FeaturedClients from "../components/FeaturedClients";
import { useGSAP } from "@gsap/react";
import animate from "../utils/animations";

const Hero = () => {
  useGSAP(() => {
    animate([".anim-hero-content"]);
  }, []);

  return (
    <section className="w-full flex justify-center overflow-hidden relative">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/rabalon-hero.mp4"
        autoPlay
        muted
        loop
        aria-label="Background video of Rabalon"
      />

      <div className="absolute inset-0 bg-primary-blue bg-opacity-70" />

      <div className="px-4 md:px-10 xl:px-0 relative flex flex-col items-center justify-center gap-20 h-screen max-w-5xl">
        {/* Hero text */}
        <div className=" text-center text-neutral-white space-y-5">
          <h1 className="anim-hero-content text-3xl md:text-4xl lg:text-6xl">
            Your Tech Partner <br />
            <span className="text-primary-very-light-blue font-bold">
              For Accelerated Growth
            </span>
          </h1>

          <p className="anim-hero-content text-lg lg:text-xl xl:text-2xl text-balance">
            Rabalon emerged from a realization that small businesses face
            significant hurdles in the digital technology space. Our approach is
            two-pronged: we provide technology consulting services to recommend
            and implement existing solutions.
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
