import PropTypes from "prop-types";

const MemberCard = ({ img, name, position }) => {
  return (
    <div className="max-w-80 lg:max-w-96 flex flex-col px-5 py-6 rounded-xl bg-[#232558] justify-between border border-primary-blue">
      <div className="space-y-9">
        {/* memeber image */}
        <div className=" rounded-md overflow-hidden">
          <img
            src={img}
            alt={name}
            className=""
          />
        </div>

        {/* memeber details */}
        <div className="flex flex-col gap-2">
          {/* name */}
          <h3 className="font-semibold text-xl bg-gradient-to-r from-neutral-white to-neutral-cyanBluishGray bg-clip-text text-transparent">
            {name}
          </h3>

          {/* position */}
          <span className="text-lg text-neutral-cyanBluishGray">
            {position}
          </span>
        </div>
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default MemberCard;
