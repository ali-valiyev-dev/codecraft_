import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";
import animate from "../utils/animate";
import { useFetchMedia, useLoadingState } from "../hooks";
import Loading from "./Loading";

const CaseStudyItem = ({
  image,
  imageAlt,
  logo,
  logoAlt,
  title,
  overview,
  achievement,
}) => {
  const { mediaSrc: coverImage } = useFetchMedia("images", image);
  const { mediaSrc: companyLogo } = useFetchMedia("images", logo);

  const { loading, error } = useLoadingState(coverImage, companyLogo);

  useGSAP(() => {
    if (!loading) {
      animate([".anim-cs-img", ".anim-cs-text"]);
    }
  }, [loading]);

  if (error) return null;

  if (loading) return <Loading />;

  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-6 xl:gap-12">
      {/* leftside content (img) */}
      <div className="anim-cs-img lg:w-1/2 max-h-[510px] rounded-lg overflow-hidden ">
        <img
          className="w-full h-full object-cover"
          src={coverImage}
          loading="lazy"
          alt={imageAlt}
        />
      </div>

      {/* rightside content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-12">
        <div className="lg:text-lg text-neutral-800">
          <div className="anim-cs-text flex flex-col gap-6">
            <img
              className="w-max h-10 object-cover"
              src={companyLogo}
              alt={logoAlt}
            />
            <h3 className="text-xl lg:text-2xl font-semibold text-primary-blue">
              {title}
            </h3>
          </div>

          <div className="anim-cs-text">
            <h4 className="mt-5 text-primary-blue">Overview</h4>
            <p className="mt-1">{overview}</p>
          </div>
          <div className="anim-cs-text">
            <h4 className="mt-5 text-primary-blue">Achievement</h4>
            <p className="mt-1">{achievement}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CaseStudyItem.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  logoAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  achievement: PropTypes.string.isRequired,
};

export default CaseStudyItem;
