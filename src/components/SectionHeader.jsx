import PropTypes from "prop-types";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center mx-auto">
      <h2 className="font-medium text-neutral-cyanBluishGray lg:text-lg">
        {title}
      </h2>

      <div className=" max-w-[700px] mt-4">
        <p className="text-neutral-white text-xl lg:text-2xl xl:text-3xl uppercase">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default SectionHeader;
