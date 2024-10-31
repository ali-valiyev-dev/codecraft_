import { useFetchMedia, useLoadingState } from "../hooks";
import Loading from "./Loading";
import PropTypes from "prop-types";

const AboutMediaContent = ({ isPlaying, setIsPlaying }) => {
  const { mediaSrc: teamCover } = useFetchMedia("images", "team-cover.webp");
  const { mediaSrc: teamVideo } = useFetchMedia("videos", "team.mp4");

  const { loading, error } = useLoadingState(teamCover, teamVideo);

  if (error) return null;

  if (loading) return <Loading />;

  return (
    <>
      {isPlaying ? (
        <video
          className="w-full h-full object-cover"
          src={teamVideo}
          type="video/mp4"
          autoPlay
          controls
          playsInline
          poster={teamCover}
          aria-label="Promo video of Codecraft_"
          crossOrigin="anonymous"
          onEnded={() => setIsPlaying(false)}
          preload="metadata">
          <track
            kind="captions"
            src="/team-captions.vtt"
            srcLang="en"
            label="Video description"
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          className="anim-about-img w-full h-full object-cover"
          src={teamCover}
          loading="lazy"
          alt="Cover image of Codecraft_"
        />
      )}
    </>
  );
};

AboutMediaContent.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
};

export default AboutMediaContent;
