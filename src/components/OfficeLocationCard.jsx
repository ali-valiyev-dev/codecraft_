import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { formatPhoneNumber } from "../utils/helpers";

const OfficeLocationCard = ({
  countryFlag,
  location,
  address,
  addressUrl,
  phone,
  email,
}) => {
  return (
    <div className="space-y-4">
      <Icon
        icon={countryFlag}
        width={72}
        height={72}
      />
      <h3 className="lg:text-lg font-medium">{location}</h3>

      <div className="flex gap-2">
        <Icon
          icon="mdi:map-marker-outline"
          width={20}
          height={20}
        />
        <a
          href={addressUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-white">
          {address}
        </a>
      </div>

      <div className="flex items-center gap-2">
        <Icon
          icon="mdi:email-outline"
          width={20}
          height={20}
        />
        <a
          href="mailto:+7037550073"
          className="hover:underline text-white">
          {email}
        </a>
      </div>

      <div className="flex items-center gap-2">
        <Icon
          icon="mdi:phone-outline"
          width={20}
          height={20}
        />
        <a
          href={`tel:${phone}`}
          className="hover:underline text-white">
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
