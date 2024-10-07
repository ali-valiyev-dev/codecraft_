import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";
import animate from "../utils/animations";

const CaseStudyItem = ({
  index,
  image,
  imageAlt,
  logo,
  logoAlt,
  title,
  overview,
  achievement,
}) => {
  useGSAP(() => {
    animate([".anim-cs-img", ".anim-cs-text"]);
  }, []);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-6 xl:gap-12">
      {/* leftside content (img) */}
      <div className="anim-cs-img lg:w-1/2 max-h-[510px] rounded-lg overflow-hidden ">
        <img
          className="w-full h-full object-cover"
          src={image}
          loading="lazy"
          alt={imageAlt || `Image of case study: ${title}`}
        />
      </div>

      {/* rightside content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-12">
        <div className="lg:text-lg xl:text-xl text-primary-blue">
          <div className="anim-cs-text flex flex-col gap-6">
            <img
              className="w-max h-10 object-cover"
              src={logo}
              alt={logoAlt || `${title} logo`}
            />
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>

          <div className="anim-cs-text">
            <h4 className="mt-5 text-neutral-500">Overview</h4>
            <p className="mt-1">{overview}</p>
          </div>
          <div className="anim-cs-text">
            <h4 className="mt-5 text-neutral-500">
              {index === 0 ? "What we did?" : "Achievement"}
            </h4>
            <p className="mt-1">{achievement}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CaseStudyItem.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  logoAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  achievement: PropTypes.string.isRequired,
};

export default CaseStudyItem;
