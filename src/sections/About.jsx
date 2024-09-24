import { useState } from "react";
import { Button, Container, SectionHeader, Statistics } from "../components";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const navigate = useNavigate();

  return (
    <Container id="about">
      <div className="flex flex-col items-center justify-center gap-16 ">
        {/* header content */}
        <SectionHeader
          title="Who We Are"
          subtitle="Epic Beginnings: Unveiling Our Essence, Crafting Futures with Excellence."
        />

        {/* main content */}
        <div className="w-full flex flex-col lg:flex-row gap-6 xl:gap-12 ">
          {/* leftside content (img) */}
          <div className="lg:w-1/2  rounded-lg overflow-hidden ">
            {isPlaying ? (
              <video
                className="w-full h-full object-cover"
                type="video/mp4"
                src="/rabalon-team.mp4"
                crossOrigin="anonymous"
                autoPlay
                controls
                playsInline
                poster="./about-us-1.jpg"
                aria-label="Background video of Rabalon"
                onEnded={() => {
                  setIsPlaying(false);
                }}
              />
            ) : (
              <img
                className="w-full h-full object-cover"
                src="./about-us-1.jpg"
                alt="About image of Rabalon"
              />
            )}
          </div>

          {/* rightside content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12 xl:pr-12">
            {/* text content */}
            <div className="">
              <p className="lg:text-lg xl:text-xl text-neutral-white">
                Rabalon is an IT service provider that is helping companies with
                innovative solutions. We always keep the client’s best interest
                in mind. Our dedicated and expert team helps us develop
                cutting-edge solutions that bring value to our clients and help
                in business growth.
              </p>
            </div>

            {/* buttons */}
            <div className="flex flex-wrap items-center gap-3 lg:gap-6">
              <Button
                title="Our Short Film"
                icon={isPlaying ? "mdi:pause" : "mdi:play"}
                onClick={() => {
                  setIsPlaying(!isPlaying);
                }}
                alt="Play/Pause button"
              />

              <Button
                title="More About Us"
                icon="lucide:arrow-right"
                onClick={() => {
                  navigate("/about");
                }}
                alt="Navigate to About page"
              />
            </div>
          </div>
        </div>

        <Statistics />
      </div>
    </Container>
  );
};

export default About;
