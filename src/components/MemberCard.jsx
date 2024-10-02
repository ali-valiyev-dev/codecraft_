import PropTypes from "prop-types";

const MemberCard = ({ img, name, position }) => {
  return (
    <div className="max-w-80 lg:max-w-96 flex flex-col px-5 py-6 rounded-xl bg-neutral-white justify-between border border-primary-dark-blue text-primary-blue">
      <div className="space-y-5">
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
          <h3 className="font-semibold text-2xl">{name}</h3>

          {/* position */}
          <span className="text-xl text-neutral-500">{position}</span>
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
