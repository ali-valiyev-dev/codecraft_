export const NAV_LINKS = [
  {
    href: "null",
    label: "Solutions",
    dropdownItems: [
      { href: "software_development", label: "Software Development" },
      { href: "cloud_solutions", label: "Cloud Solutions" },
      {
        href: "data_science_and_artificial_intelligence",
        label: "Data Science & AI",
      },
      { href: "infrastructure_solutions", label: "Infrastructure Solutions" },
      { href: "internet_of_things_solutions", label: "IoT Solutions" },
      { href: "security_solutions", label: "Security Solutions" },
    ],
  },
  {
    href: "null",
    label: "Industries",
    dropdownItems: [
      { href: "public_sector", label: "Public Sector" },
      { href: "healthcare", label: "Healthcare" },
      { href: "hospitality", label: "Hospitality" },
      { href: "retail", label: "Retail" },
    ],
  },
  { href: "tech_partners", label: "Our Tech Partners" },
  { href: "case_studies", label: "Case Studies" },
  { href: "about", label: "About Us" },
];

export const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/rabalontech",
    icon: "simple-icons:facebook",
    alt: "Facebook",
  },
  {
    href: "https://www.instagram.com/rabalonusa/?hl=en",
    icon: "simple-icons:instagram",
    alt: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/rabalon",
    icon: "simple-icons:linkedin",
    alt: "LinkedIn",
  },
];

export const SOLUTIONS = [
  {
    icon: "mdi:code-tags",
    title: "Software Development",
    desc: "Rabalon offers tailor-made software development solutions to help your business grow.",
    to: "solutions/software_development",
  },
  {
    icon: "mdi:cloud-outline",
    title: "Cloud Solutions",
    desc: "Transform your cloud experience with public & private cloud solutions.",
    to: "solutions/cloud_solutions",
  },
  {
    icon: "mdi:chart-line",
    title: "Data Science & AI",
    desc: "Revolutionize your business by turning big data into meaningful insights with Rabalon’s Data Science and AI solutions.",
    to: "solutions/data_science_and_artificial_intelligence",
  },
  {
    icon: "mdi:server-network",
    title: "Infrastructure",
    desc: "IT infrastructure solutions that are secure, flexible, and reliable that aid businesses in significantly reducing costs and boosting revenues.",
    to: "solutions/infrastructure_solutions",
  },
  {
    icon: "mdi:access-point-network",
    title: "IoT Solutions",
    desc: "Connecting the physical and digital worlds to develop an intelligent ecosystem that adds value to your business.",
    to: "solutions/internet_of_things_solutions",
  },
  {
    icon: "mdi:shield-lock",
    title: "Cyber Security",
    desc: "Secure and strengthen your enterprise with Rabalon’s integrated network security solutions.",
    to: "solutions/security_solutions",
  },
];

export const STATS = [
  { label: "Regional Teams", total: 5 },
  { label: "Global Engineers", total: 100 },
  { label: "Expert Consultants", total: 20 },
  { label: "Completed Projects", total: 1000 },
];

export const CASE_STUDIES = [
  {
    image: "./ferrum-capital-cover.jpg",
    imageAlt: "Image of Ferrum Capital",
    logo: "./ferrum-capital-logo.svg",
    logoAlt: "Logo of Ferrum Capital",
    title:
      "Detecting key cyber-security weaknesses & improve business processes",
    overview:
      "Xalq bank needs business process automation tool to clear accountability, customizable notifications, valuable insights, and faster turnaround times make it easier to eliminate wasteful activities and focus on enhancing tasks.",
    achievement:
      "We conducted a deep audit of three major blocks: Wired and wireless data network, Unified communications, Information Security.",
  },
  {
    image: "./xalq-bank-cover.jpg",
    imageAlt: "Image of Xalq Bank",
    logo: "./xalq-bank-logo.svg",
    logoAlt: "Logo of Xalq Bank",
    title: "Improving Accountability with tracking & monitoring systems.",
    overview:
      "Xalq bank needs business process automation tool to clear accountability, customizable notifications, valuable insights, and faster turnaround times make it easier to eliminate wasteful activities and focus on enhancing tasks.",
    achievement:
      "In Xalq bank our team has integrated new software program that made it possible to track and monitor processes while they are running, which can improve accountability and visibility. New software helps Xalq bank focus on process and operational excellence to exceed customer expectations.",
  },
  {
    image: "./aral-group-cover.jpg",
    imageAlt: "Image of Aral Group",
    logo: "./aral-group-logo.svg",
    logoAlt: "Logo of Aral Group",
    title:
      "Implementation of Access Control System to Improve security at the facilities.",
    overview:
      "The company  needed to implement security features in their facilities that are more high tech and secure then simple key locks. They needed implementation of integrated access control systems in high security locations involving software or browser based door security, real-time digital video surveillance and many other features",
    achievement:
      "In the Aral group our team has integrated a new access control system, adapted for their security needs. Software of our partner has quite flexible, user friendly interface, and the highest level of functionality at the same time. Hardware we used for access control system is reliable and proven by many worldwide corporations and companies",
  },
];
