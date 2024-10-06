import { useState } from "react";
import { Button, Container, SectionHeader, Statistics } from "../components";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import animate from "../utils/animations";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const toggleVideoPlayback = () => {
    setIsPlaying(prevState => !prevState);
  };

  useGSAP(() => {
    animate([
      ".anim-about-title",
      ".anim-about-media-content",
      ".anim-about-text-content-and-buttons",
    ]);
  }, []);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-16">
        {/* Header Content */}
        <div className="anim-about-title">
          <SectionHeader
            title="Who We Are"
            subtitle="Epic Beginnings: Unveiling Our Essence, Crafting Futures with Excellence."
          />
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col lg:flex-row gap-6 xl:gap-12">
          {/* Left Side Content (Image or Video) */}
          <div className="anim-about-media-content lg:w-1/2 rounded-lg overflow-hidden">
            {isPlaying ? (
              <video
                className="w-full h-full object-cover"
                src="/rabalon-team.mp4"
                type="video/mp4"
                autoPlay
                controls
                playsInline
                poster="/about-us-cover.jpg"
                aria-label="Promo video of Rabalon"
                crossOrigin="anonymous"
                onEnded={() => setIsPlaying(false)}
                preload="metadata"
              />
            ) : (
              <img
                className="anim-about-img w-full h-full object-cover"
                src="/about-us-cover.jpg"
                alt="About cover image of Rabalon"
              />
            )}
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12 xl:pr-12">
            {/* Text Content */}
            <p className="anim-about-text-content-and-buttons lg:text-lg xl:text-xl text-primary-blue">
              Rabalon is an IT service provider helping companies with
              innovative solutions. We always prioritize our client’s best
              interests. Our dedicated and expert team develops cutting-edge
              solutions that bring value to our clients and promote business
              growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6">
              <div className="anim-about-text-content-and-buttons">
                <Button
                  title="Our Promo Video"
                  icon={isPlaying ? "mdi:pause" : "mdi:play"}
                  onClick={toggleVideoPlayback}
                  alt={
                    isPlaying ? "Pause the promo video" : "Play the promo video"
                  }
                />
              </div>
              <div className="anim-about-text-content-and-buttons">
                <Button
                  title="More About Us"
                  icon="lucide:arrow-right"
                  onClick={() => navigate("/about")}
                  alt="Navigate to more about us page"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics  */}
        <Statistics />
      </div>
    </Container>
  );
};

export default About;
