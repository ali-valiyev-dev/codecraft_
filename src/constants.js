export const NAV_LINKS = [
  { href: "/", label: "Home" },

  {
    href: "null",
    label: "Solutions",
    dropdownItems: [
      { href: "solutions/software_development", label: "Software Development" },
      { href: "solutions/cloud_solutions", label: "Cloud Solutions" },
      {
        href: "solutions/data_science_and_artificial_intelligence",
        label: "Data Science & AI",
      },
      {
        href: "solutions/infrastructure_solutions",
        label: "Infrastructure Solutions",
      },
      { href: "solutions/iot_solutions", label: "IoT Solutions" },
      { href: "solutions/security_solutions", label: "Security Solutions" },
    ],
  },
  {
    href: "null",
    label: "Industries",
    dropdownItems: [
      { href: "industries/public_sector", label: "Public Sector" },
      { href: "industries/healthcare", label: "Healthcare" },
      { href: "industries/hospitality", label: "Hospitality" },
      { href: "industries/retail", label: "Retail" },
    ],
  },
  {
    href: "null",
    label: "Company",
    dropdownItems: [
      { href: "about", label: "About Us" },
      { href: "/", label: "Blog" },
      { href: "/", label: "Career" },
      { href: "contacts", label: "Contact Us" },
    ],
  },
];

export const VALID_SOLUTION_IDS = [
  "software_development",
  "cloud_solutions",
  "data_science_and_artificial_intelligence",
  "infrastructure_solutions",
  "iot_solutions",
  "security_solutions",
];

export const VALID_INDUSTRY_IDS = [
  "public_sector",
  "healthcare",
  "hospitality",
  "retail",
];
