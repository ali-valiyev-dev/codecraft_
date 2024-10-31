import PropTypes from "prop-types";
import { useFetchMedia } from "../hooks";
import Loading from "./Loading";

const TechPartner = ({ src, alt }) => {
  const { mediaSrc, loading, error } = useFetchMedia("images", src);

  if (error) return null;

  if (loading) return <Loading />;

  return (
    <div className="flex items-center justify-center p-2">
      <img
        src={mediaSrc}
        loading="lazy"
        alt={alt}
        className="max-w-[70%] h-auto object-contain"
      />
    </div>
  );
};

TechPartner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default TechPartner;
