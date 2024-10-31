import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Loading,
  SectionHeader,
  Statistics,
} from "../components";
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../hooks";
import AboutMediaContent from "../components/AboutMediaContent";
import animate from "../utils/animate";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const { data: about, loading, error } = useFetchData("about", "about_short");

  useEffect(() => {
    if (!loading) {
      animate([".anim-about-content"]);
    }
  }, [loading]);

  const toggleVideoPlayback = () => {
    setIsPlaying(prevState => !prevState);
  };

  if (error) return null;

  if (loading) return <Loading />;

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-16">
        {/* Header Content */}
        <div className="anim-about-content">
          <SectionHeader
            title="Who We Are"
            subtitle="A Journey of Innovation: Shaping the Future with Purpose and Skill."
          />
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col lg:flex-row gap-6 xl:gap-12">
          {/* Left Side Content  */}
          <div className="anim-about-content lg:w-1/2 max-h-64 rounded-lg overflow-hidden">
            <AboutMediaContent
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12 xl:pr-12">
            {/* Text Content */}
            <p className="anim-about-content lg:text-lg xl:text-xl text-neutral-800">
              {about[0]?.about_short}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6">
              <div className="anim-about-content">
                <Button
                  title="Our Promo Video"
                  icon={isPlaying ? "mdi:pause" : "mdi:play"}
                  onClick={toggleVideoPlayback}
                  alt={
                    isPlaying ? "Pause the promo video" : "Play the promo video"
                  }
                />
              </div>
              <div className="anim-about-content">
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
