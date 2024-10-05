import PropTypes from "prop-types";
import useAnimation from "../utils/hooks/useAnimations";

const MemberCard = ({ img, name, position }) => {
  useAnimation([".anim-member-card"]);

  return (
    <div className="anim-member-card max-w-80 sm:max-w-72 xl:max-w-80  flex flex-col px-4 py-4 rounded-xl bg-neutral-white justify-between border border-primary-dark-blue text-primary-blue">
      <div className="space-y-4 md:space-y-5">
        {/* member image */}
        <div className="rounded-md overflow-hidden">
          <img
            src={img}
            alt={name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* member details */}
        <div className="flex flex-col gap-1 md:gap-2">
          {/* name */}
          <h3 className="font-semibold text-xl md:text-2xl">{name}</h3>

          {/* position */}
          <span className="text-lg md:text-xl text-neutral-500">
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
