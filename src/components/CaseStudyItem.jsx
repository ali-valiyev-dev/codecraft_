import PropTypes from "prop-types";

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
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-6 xl:gap-12">
      {/* leftside content (img) */}
      <div className="lg:w-1/2 max-h-[510px] rounded-lg overflow-hidden ">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={imageAlt}
        />
      </div>

      {/* rightside content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-12">
        <div className="lg:text-lg xl:text-xl text-neutral-white">
          <div className="flex flex-col gap-6">
            <div className="">
              <img
                className="w-max h-10 object-cover"
                src={logo}
                alt={logoAlt}
              />
            </div>
            <h3 className="text-2xl font-medium">{title}</h3>
          </div>

          <h4 className="mt-5 text-neutral-cyanBluishGray">Overview</h4>
          <p className="mt-1">{overview}</p>

          <h4 className="mt-5 text-neutral-cyanBluishGray">
            {index === 0 ? "What we did?" : "Acheivement"}
          </h4>
          <p className="mt-1">{achievement}</p>
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
  logoAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  achievement: PropTypes.string.isRequired,
};

export default CaseStudyItem;
