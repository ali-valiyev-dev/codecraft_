import { useState } from "react";
import {
  Button,
  Container,
  SectionHeader,
  Statistics,
  TechPartners,
} from "../components";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const toggleVideoPlayback = () => {
    setIsPlaying(prevState => !prevState);
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-16">
        {/* Header Content */}
        <SectionHeader
          title="Who We Are"
          subtitle="Epic Beginnings: Unveiling Our Essence, Crafting Futures with Excellence."
        />

        {/* Main Content */}
        <div className="w-full flex flex-col lg:flex-row gap-6 xl:gap-12">
          {/* Left Side Content (Image or Video) */}
          <div className="lg:w-1/2 rounded-lg overflow-hidden">
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
                className="w-full h-full object-cover"
                src="/about-us-cover.jpg"
                alt="About cover image of Rabalon"
              />
            )}
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12 xl:pr-12">
            {/* Text Content */}
            <p className="lg:text-lg xl:text-xl text-primary-blue">
              Rabalon is an IT service provider helping companies with
              innovative solutions. We always prioritize our client’s best
              interests. Our dedicated and expert team develops cutting-edge
              solutions that bring value to our clients and promote business
              growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 lg:gap-6">
              <Button
                title={isPlaying ? "Pause Promo Video" : "Play Promo Video"}
                icon={isPlaying ? "mdi:pause" : "mdi:play"}
                onClick={toggleVideoPlayback}
                alt={
                  isPlaying ? "Pause the promo video" : "Play the promo video"
                }
              />
              <Button
                title="More About Us"
                icon="lucide:arrow-right"
                onClick={() => navigate("/about")}
                alt="Navigate to more about us page"
              />
            </div>
          </div>
        </div>

        {/* Statistics and Tech Partners */}
        <Statistics />
        <TechPartners />
      </div>
    </Container>
  );
};

export default About;
