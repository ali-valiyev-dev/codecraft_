import { parsePhoneNumberFromString } from "libphonenumber-js";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const formatPhoneNumber = phoneNumber => {
  const phoneNumberObj = parsePhoneNumberFromString(phoneNumber, "US");
  return phoneNumberObj ? phoneNumberObj.formatInternational() : phoneNumber;
};

export { scrollToTop, formatPhoneNumber };
