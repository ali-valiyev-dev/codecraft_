import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { formatPhoneNumber } from "../utils/helpers";

const FooterOfficeLocationDetails = ({
  location,
  address,
  addressUrl,
  phone,
  email,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="lg:text-lg font-medium">{location}</h3>

      <ul className="space-y-2">
        <li className="flex gap-2">
          <Icon
            icon="mdi:map-marker-outline"
            width={20}
            height={20}
          />
          <a
            href={addressUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-neutral-300 hover:text-neutral-white">
            {address}
          </a>
        </li>

        <li className="flex items-center gap-2">
          <Icon
            icon="mdi:email-outline"
            width={20}
            height={20}
          />
          <a
            href="mailto:+7037550073"
            className="hover:underline text-neutral-300 hover:text-neutral-white text-nowrap">
            {email}
          </a>
        </li>

        <li className="flex items-center gap-2">
          <Icon
            icon="mdi:phone-outline"
            width={20}
            height={20}
          />
          <a
            href={`tel:${phone}`}
            className="hover:underline text-neutral-300 hover:text-neutral-white text-nowrap">
            {formatPhoneNumber(phone)}
          </a>
        </li>
      </ul>
    </div>
  );
};

FooterOfficeLocationDetails.propTypes = {
  location: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  addressUrl: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default FooterOfficeLocationDetails;
