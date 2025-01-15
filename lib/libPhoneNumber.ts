import { CountryCode, parsePhoneNumberFromString } from "libphonenumber-js";

export function formatPhoneNumber(number: string, country: CountryCode = "US") {
  const phoneNumber = parsePhoneNumberFromString(number, country);
  if (phoneNumber) return phoneNumber.formatInternational();
  return null;
}
