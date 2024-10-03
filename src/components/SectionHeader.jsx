import PropTypes from "prop-types";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center mx-auto space-y-3 md:space-y-4">
      <h2 className="font-medium text-neutral-500 text-md lg:text-lg">
        {title}
      </h2>

      <div className="max-w-[700px]">
        <p className="text-primary-blue text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionHeader;
