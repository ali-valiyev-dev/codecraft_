import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { formatPhoneNumber } from "../utils/helpers";
import { useGSAP } from "@gsap/react";
import animate from "../utils/animations";

const OfficeLocationCard = ({
  countryFlag,
  location,
  address,
  addressUrl,
  phone,
  email,
}) => {
  useGSAP(() => {
    animate([".anim-location-details"]);
  }, []);

  return (
    <div className="anim-location-details space-y-4">
      <Icon
        icon={countryFlag}
        width={72}
        height={72}
      />
      <h3 className="text-primary-blue text-md lg:text-lg font-medium">
        {location}
      </h3>

      <div className="flex gap-2">
        <Icon
          icon="mdi:map-marker-outline"
          width={20}
          height={20}
          className="min-w-max"
        />
        <a
          href={addressUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-wrap">
          {address}
        </a>
      </div>

      <div className="flex items-center gap-2">
        <Icon
          icon="mdi:email-outline"
          width={20}
          height={20}
          className="min-w-max"
        />
        <a
          href={`mailto:${email}`}
          className="hover:underline">
          {email}
        </a>
      </div>

      <div className="flex items-center gap-2">
        <Icon
          icon="mdi:phone-outline"
          width={20}
          height={20}
          className="min-w-max"
        />
        <a
          href={`tel:${phone}`}
          className="hover:underline">
          {formatPhoneNumber(phone)}
        </a>
      </div>
    </div>
  );
};

OfficeLocationCard.propTypes = {
  countryFlag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  addressUrl: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default OfficeLocationCard;
