import PropTypes from "prop-types";
import useFetchMedia from "../hooks/useFetchMedia";
import Loading from "./Loading";

const FeaturedClient = ({ src, alt }) => {
  const { mediaSrc, loading, error } = useFetchMedia("images", src);

  if (error) {
    return null;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <li>
      <img
        src={mediaSrc}
        loading="eager"
        alt={`${alt} logo`}
        className="h-6 sm:h-12"
      />
    </li>
  );
};

FeaturedClient.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default FeaturedClient;
