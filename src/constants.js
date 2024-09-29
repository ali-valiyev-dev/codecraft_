export const NAV_LINKS = [
  { href: "home", label: "Home" },

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
      { href: "iot_solutions", label: "IoT Solutions" },
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
  {
    href: "null",
    label: "Company",
    dropdownItems: [
      { href: "about", label: "About Us" },
      { href: "blog", label: "Blog" },
      { href: "career", label: "Career" },
      { href: "contacts", label: "Contact Us" },
    ],
  },
];

export const FEATURED_CLIENTS = [
  { src: "/aral-group-white-logo.png", alt: "Xalq Bank logo" },
  { src: "/ferrum-capital-white-logo.png", alt: "Xalq Bank logo" },
  { src: "/ramco-systems-white-logo.png", alt: "Xalq Bank logo" },
  { src: "/xalq-bank-white-logo.png", alt: "Xalq Bank logo" },
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
    to: "solutions/iot_solutions",
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

export const TESTIMONIALS = [
  {
    rating: 5,
    name: "Gurban Mammadov",
    role: "Head of Procurement",
    message:
      "Projects we worked on were delivered on time. The quality of the delivered goods or equipment was suitable for the project.",
    image: "/gurban-mammadov.png",
  },
  {
    rating: 5,
    name: "Dadash Jafarov",
    role: "Head of IT",
    message:
      "With the help of the Rabalon company's professional staff, we have achieved our goal on time and at a high level.",
    image: "/dadash-jafarov.png",
  },
  {
    rating: 5,
    name: "Bahruz Sultanov",
    role: "Head of IT",
    message:
      "With the help of dedicated cyber security solutions provided, we can easily manage the security of our data.",
    image: "/ram-holding.png",
  },
];

export const CONTACT_DETAILS = [
  {
    countryFlag: "twemoji:flag-united-states",
    location: "Rabalon USA",
    address: "44679 Endicott Drive Ashburn, VA 20147",
    addressUrl:
      "https://www.google.com/maps?q=44679+Endicott+Drive+Ashburn,+VA+20147",
    email: "info@rabalon.com",
    phone: "+17037550073",
  },
  {
    countryFlag: "twemoji:flag-azerbaijan",
    location: "Rabalon Azerbaijan",
    address: "152 Haydar Aliyev Avenue, Baku, Azerbaijan, AZ1029",
    addressUrl:
      "https://www.google.com/maps?q=152+Haydar+Aliyev+Avenue,+Baku,+Azerbaijan,+AZ1029",
    email: "info@rabalon.com",
    phone: "+994502613550",
  },
];

export const PARTNER_COMPANY_LOGOS = [
  { src: "/cisco-logo.png", alt: "Facebook" },
  { src: "/ibm-logo.png", alt: "Facebook" },
  { src: "/dingo-logo.png", alt: "Facebook" },
  { src: "/sap-logo.png", alt: "Facebook" },
  { src: "/oracle-logo.png", alt: "Facebook" },
  { src: "/microsoft-logo.png", alt: "Facebook" },
  { src: "/lenovo-logo.png", alt: "Facebook" },
  { src: "/dell-emc-logo.png", alt: "Facebook" },
  { src: "/mcafee-logo.png", alt: "Facebook" },
  { src: "/vmware-logo.png", alt: "Facebook" },
  { src: "/verint-logo.png", alt: "Facebook" },
  { src: "/paloaltonetworks-logo.png", alt: "Facebook" },
  { src: "/shopify-logo.png", alt: "Facebook" },
  { src: "/riverbed-logo.png", alt: "Facebook" },
  { src: "/veritas-technologies-logo.png", alt: "Facebook" },
  { src: "/manage-engine-logo.png", alt: "Facebook" },
  { src: "/fortinet-logo.png", alt: "Facebook" },
  { src: "/canon-logo.png", alt: "Facebook" },
  { src: "/qnap-logo.png", alt: "Facebook" },
  { src: "/cyberark-logo.png", alt: "Facebook" },
  { src: "/forcepoint-logo.png", alt: "Facebook" },
];

export const SOLUTIONS_DATA = [
  {
    id: "software_development",
    headerTitle: "Software Development",
    headerSubtitle:
      "We offer tailor-made software development solutions to help your business grow",
    img: "/software-development-cover.jpg",
    title:
      "On target software development for SMEs, Startups, large enterprises & Institutions",
    desc: "Rabalon offers full-stack, multidisciplinary software development solutions. We start with a detailed discussion of your business and technology challenges and goals. Then we develop a strategy that will cope with challenges, ensure success, and provide you with the most exemplary software development services.",
    accordionData: [
      {
        title: "Mobile Applications",
        content:
          "Mobile app solutions to improve your business effectiveness and efficiency. With long experience developing mobile applications, we have a strong knowledge base to guide you along the process of mobile application development.",
      },
      {
        title: "Web Application Development",
        content:
          "Web apps with quality architecture, need-based requirements, clean code, interactive design, and thorough testing to ensure it fulfills your business needs and delivers repeatable ROI. Offerinf customized web app development to meet your business needs.",
      },
      {
        title: "Custom Enterprise software",
        content:
          "We upgrade your legacy systems, consolidate app portfolios, integrate systems for your business.",
      },
      {
        title: "AR/VR Development",
        content:
          "AR/VR apps that give unbelievable twists to mundane processes to deliver immersive customer experiences and satisfy next-generation users.",
      },
    ],
  },
  {
    id: "cloud_solutions",
    headerTitle: "Cloud Solutions",
    headerSubtitle:
      "Transform your cloud experience with public & private cloud solutions",
    img: "/cloud-solutions-cover.jpg",
    title:
      "Cloud solutions that are Efficiently scalable, easily manageable, undeniably powerful",
    desc: "As one of the most steadfast cloud solution providers, Rabalon helps you in accelerating business agility through reduced cost, simplifying coding, and maximizing ROI by delivering computing services like servers, storage, databases, networking, software, analytics & storage. Be it cloud applications development, cloud architecture design, cloud migration, DevOps, cloud infrastructure & data, ML & AI-powered applications such as SaaS, PaaS, and IaaS environments, our cloud experts would deal with it effortlessly for your business.",
    accordionData: [
      {
        title: "Private Cloud",
        content:
          "Rabalon offers a Private Cloud service enabling organizations to simply pool all their servers into a single resource, which can be distributed among virtual machines (VMs) that run application workloads across the enterprise.",
      },
      {
        title: "Public Cloud",
        content:
          "Rabalon’s public cloud solutions allow users to share resources while maintaining the privacy of each user's data. Public cloud architecture is completely virtualized, providing an environment where shared resources are leveraged as needed. A key advantage of public cloud architecture is the ability to access a service or application on any connected device. Our cloud-based models include IaaS, PaaS, and SaaS.",
      },
      {
        title: "Virtual Desktop",
        content:
          "Rabalon’s Virtual Desktop Service (VDS) removes the complexity of deploying and managing virtual desktops globally. The service is delivered via flexible SaaS access enabling you to manage your virtual desktop infrastructure (VDI) across your choice of public or private clouds.",
      },
      {
        title: "Cloud Migration",
        content:
          "Our cloud experts at Rabalon will make your cloud migration process easy and flexible. Our cloud professionals provide you with the cloud infrastructure that will make you start realizing your ROI right away. We make sure to provide optimized, quick, secure, and cost-effective cloud migration to our clientele. Our cloud-based models include IaaS, PaaS, and SaaS.",
      },
    ],
  },
  {
    id: "data_science_and_artificial_intelligence",
    headerTitle: "Data Science & AI Solutions",
    headerSubtitle:
      "Revolutionize your business by turning big data into meaningful insights with Rabalon’s Data Science and AI solutions.",
    img: "/data-science-and-artificial-intelligence-cover.jpg",
    title: "Solve complex problems fast & Increase Business Efficiency",
    desc: `"AI technology can enhance business productivity by up to 40%," according to Accenture, and the intersection of Big Data with AI will help businesses gain valuable insights into customer intent, predict trends, make connections, and identify issues before they occur, with Rabalon's experts providing innovative Data Science & AI solutions to improve efficiency, boost sales, manage risks effectively, and deliver an exceptional user interface.`,
    accordionData: [
      {
        title: "Business Intelligence",
        content:
          "Rabalon can help your business capitalize on the power of data analytics and reach your strategic goals with business intelligence (BI) services including strategy optimization and forecasting, performance research and trends exploration, budget projection and financial planning, customer analytics, and advanced reporting and much more.",
      },
      {
        title: "Data Analytics",
        content:
          "Our expert Data Analytics solutions help businesses by enabling them to make more informed, data-backed decisions, as well as providing invaluable insight into key business areas, including Customer behaviors and trends, Security and risk mitigation, Business productivity and efficiency, and Customer personalization.",
      },

      {
        title: "Automation",
        content:
          "Automate daily tasks/processes that require data analysis, through machine learning. Rabalon's expert team will identufy areas of your business that can be automated using AI & help you boost your business output.We also use machine learning algorithms to optimize forecasts for businesses.",
      },
    ],
  },
  {
    id: "infrastructure_solutions",
    headerTitle: "Infrastructure Solutions",
    headerSubtitle:
      "IT infrastructure solutions that are secure, flexible, and reliable that aid businesses in significantly reducing costs and boosting revenues",
    img: "/infrastructure-solutions-cover.jpg",
    title: "Focus more on your core business & less on",
    desc: "An effective IT infrastructure will continue to serve you and your employees through all the steps of your business. When your company blooms, it will protect it from cyber attacks making it secure. Whenever you need new solutions to evolve it will be easily scalable fitting your never-ending requirements.",
    accordionData: [
      {
        title: "Voice and Network Solutions",
        content:
          "Rabalon’s Voice and Network Solutions provide centralized management for optimum control over heterogeneous systems. It simplifies operations by removing silos and leveraging existing communication systems.",
      },
      {
        title: "Data Center Solutions",
        content:
          "Our data center solutions are designed for your business to rapidly deploy readily available solutions or to quickly customize based on your needs. Microsoft Azure, AWS, and Google Cloud are a few of our renowned technology partners, which aid us in providing effective data center solutions for our clients.",
      },

      {
        title: "Backup and Recovery Solutions",
        content:
          "In today’s business world, your data is the single most valuable asset. A data security breach or natural disaster can interrupt the normal operations of a business. Our Backup and Recovery Solutions will establish strong safeguard processes to protect your irreplaceable data with leading enterprise backup & recovery systems from Microsoft Azure, AWS, and Google Cloud.",
      },
      {
        title: "Business Process Management",
        content:
          "Rabalon’s Business process management service comes with Digital Process Automation (DPA) and exceptional customer experience. Moreover, our predefined solutions guarantee to focus on the process deficiencies to realize the maximum benefits of process automation in the long run. With better visibility and control over business processes, you can improve operational efficiency and significantly reduce costs.",
      },
    ],
  },
  {
    id: "iot_solutions",
    headerTitle: "IoT Solutions",
    headerSubtitle:
      "Connecting the physical and digital worlds to develop an intelligent ecosystem that adds value to your business.",
    img: "/iot-solutions-cover.jpg",
    title:
      "Driving innovation across industries looking for growth opportunities and operational efficiencies",
    desc: "At Rabalon, we deliver value-centered IoT solutions by setting up multi-level data pipelines, from edge computing to cloud data processing and data science, working closely with you to understand your business needs and create custom IoT solutions. Additionally, you can remotely hire our expert development team to build entirely new IoT-supported infrastructures.",
    accordionData: [
      {
        title: "Industrial IoT",
        content:
          "IoT solutions are not only about connected devices, it is the adequate management of those devices while taking care of the sensors, network, and platforms. We at Rabalon cater to enterprises’ needs through customized IoT ecosystems. From heavy industries to smart cities and from oil and gas to power and utilities our IoT engineers can provide tailor-made solutions and services to our decorous clients.",
      },
      {
        title: "Smart Retail",
        content:
          "Offering smar Retail solutions is the best suited for shopping malls, supermarkets, and other retail settings. Using sensors, beacons, and our cloud-based platforms, the solution helps retailers personalize the in-store experience by allowing them to send personalized offers straight to a customer’s mobile device when they are nearby or in the store.",
      },

      {
        title: "Connected Buildings",
        content:
          "Rabalon has developed a range of Connecting Building solutions that improve the quality of citizens’ lifestyles and accelerate economic growth. Our comprehensive suite of Connecting Building solutions ranges from smart building and smart parking management to smart energy management, smart lighting, smart traffic management, and smart farming. The solutions help public-and private-sector planners to promote efficient use of resources and sustainability, drive citizen engagement, and address an array of community challenges.",
      },
      {
        title: "Digital Signage",
        content:
          "With a comprehensive range of hardware and software products, Rabalon’s digital signage solution is designed to integrate to create a digital signage package tailored to suit your specific project requirements whether a single screen, video wall, menu board, or multiscreen site, or a global rollout. Rabalon manufactures dedicated Digital Signage solutions that are ideal for both internal and customer-facing communications.",
      },
    ],
  },
  {
    id: "security_solutions",
    headerTitle: "Cyber Security Solutions",
    headerSubtitle:
      "Secure and strengthen your enterprise with Rabalon’s integrated network security solutions.",
    img: "/security-solutions-cover.jpg",
    title:
      "Enable your business with intelligence and expertise providing a new level of cyber-immunity",
    desc: "We deliver tailored security solutions to identify and resolve your security pain points, covering Data Security, Network Security, Endpoint Protection, and Camera and Access Control, utilizing industry-leading measures to develop a comprehensive security strategy that includes network segmentation, systems implementations, testing, 24/7 monitoring, vulnerability and patch management, as well as compliance audits to protect your company from crippling threat events",
    accordionData: [
      {
        title: "Data Security",
        content:
          "Today, your data travels farther, through new channels and on new devices. Rabalon can assess your environment and implement a solution that protects data across the enterprise network, including social media, with services ranging from Data Classification to Encryption, Data Loss Prevention, and more. We also offer Data Classification Assessments for your confidential data and create custom protection strategies designed to adapt to the evolving environments and technologies of today.",
      },
      {
        title: "Network Security",
        content:
          "Rabalon’s network security solution is designed for enterprises that need to connect and secure their workforces without relying on legacy security appliances, juggling multiple point products, or sacrificing visibility and control over their networks. We provide solutions that give companies complete control over applications, users, and content, including Network Security Analysis, Next Generation Firewalls, IDS/IPS, and Malware scans to reduce risks for any organization.",
      },

      {
        title: "End-Point Protection",
        content:
          "Rabalon’s endpoint security solutions ensure endpoint protection by a secure computer network that is remotely connected to end devices such as laptops, tablets, smartphones, and other devices.",
      },
      {
        title: "Camera & Access Control",
        content:
          "Rabalon’s experienced staff will guide you to balance security controls designed for your specific needs taking into account the costs of developing, testing, implementing, using, managing, monitoring, and maintaining the controls. We take into account broader issues such as health and safety, aesthetics, human rights, and societal norms or conventions.",
      },
    ],
  },
];
