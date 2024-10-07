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

export const FEATURED_CLIENTS = [
  { src: "/aral-group-white-logo.webp", alt: "Xalq Bank logo" },
  { src: "/ferrum-capital-white-logo.webp", alt: "Xalq Bank logo" },
  { src: "/ramco-systems-white-logo.webp", alt: "Xalq Bank logo" },
  { src: "/xalq-bank-white-logo.webp", alt: "Xalq Bank logo" },
];

export const TEAM = [
  {
    img: "/ramin-iskenderov.webp",
    name: "Ramin Iskandarov",
    position: "Founder / CEO",
  },
  {
    img: "/mahir-iskender.webp",
    name: "Mahir Iskender",
    position: "Co-Founder",
  },
  {
    img: "/sakina-iskender.webp",
    name: "Sakina Iskender",
    position: "COO",
  },
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
    image: "./ferrum-capital-cover.webp",
    imageAlt: "Image of Ferrum Capital",
    logo: "./logo.webp",
    logoAlt: "Logo of Ferrum Capital",
    title:
      "Detecting key cyber-security weaknesses & improve business processes",
    overview:
      "Xalq bank needs business process automation tool to clear accountability, customizable notifications, valuable insights, and faster turnaround times make it easier to eliminate wasteful activities and focus on enhancing tasks.",
    achievement:
      "We conducted a deep audit of three major blocks: Wired and wireless data network, Unified communications, Information Security.",
  },
  {
    image: "./xalq-bank-cover.webp",
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
    image: "./aral-group-cover.webp",
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
    image: "/gurban-mammadov.webp",
  },
  {
    rating: 5,
    name: "Dadash Jafarov",
    role: "Head of IT",
    message:
      "With the help of the Rabalon company's professional staff, we have achieved our goal on time and at a high level.",
    image: "/dadash-jafarov.webp",
  },
  {
    rating: 5,
    name: "Bahruz Sultanov",
    role: "Head of IT",
    message:
      "With the help of dedicated cyber security solutions provided, we can easily manage the security of our data.",
    image: "/ram-holding.webp",
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
  { src: "/cisco-logo.webp", alt: "Cisco" },
  { src: "/ibm-logo.webp", alt: "IBM" },
  { src: "/dingo-logo.webp", alt: "Dingo" },
  { src: "/sap-logo.webp", alt: "SAP" },
  { src: "/oracle-logo.webp", alt: "Oracle" },
  { src: "/microsoft-logo.webp", alt: "Microsoft" },
  { src: "/lenovo-logo.webp", alt: "Lenovo" },
  { src: "/dell-emc-logo.webp", alt: "Dell EMC" },
  { src: "/mcafee-logo.webp", alt: "McAfee" },
  { src: "/vmware-logo.webp", alt: "VMware" },
  { src: "/verint-logo.webp", alt: "Verint" },
  { src: "/paloaltonetworks-logo.webp", alt: "Palo Alto Networks" },
  { src: "/shopify-logo.webp", alt: "Shopify" },
  { src: "/riverbed-logo.webp", alt: "Riverbed" },
  { src: "/veritas-technologies-logo.webp", alt: "Veritas Technologies" },
  { src: "/manage-engine-logo.webp", alt: "ManageEngine" },
  { src: "/fortinet-logo.webp", alt: "Fortinet" },
  { src: "/canon-logo.webp", alt: "Canon" },
  { src: "/qnap-logo.webp", alt: "QNAP" },
  { src: "/cyberark-logo.webp", alt: "CyberArk" },
  { src: "/forcepoint-logo.webp", alt: "Forcepoint" },
];

export const SOLUTIONS_DATA = [
  {
    id: "software_development",
    pageTitle: "Software Development",
    pageSubtitle:
      "Custom Software Solutions That Accelerate Growth and Business Impact.",
    img: "/software-development-cover.webp",
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
          "Web apps with quality architecture, need-based requirements, clean code, interactive design, and thorough testing to ensure it fulfills your business needs and delivers repeatable ROI. Offering customized web app development to meet your business needs.",
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
    pageTitle: "Cloud",
    pageSubtitle:
      "Transform Your Cloud Experience with Public and Private Cloud Solutions.",
    img: "/cloud-solutions-cover.webp",
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
    pageTitle: "Data Science & AI",
    pageSubtitle:
      "Turn Data into Insights with Our Expert AI and Data Science Solutions.",
    img: "/data-science-and-artificial-intelligence-cover.webp",
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
    pageTitle: "Infrastructure",
    pageSubtitle:
      "Flexible IT Infrastructure Solutions That Lower Costs and Boost Growth.",
    img: "/infrastructure-solutions-cover.webp",
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
    pageTitle: "IoT",
    pageSubtitle:
      "Connecting the Physical and Digital to Build Smarter Business Systems.",
    img: "/iot-solutions-cover.webp",
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
    pageTitle: "Cyber Security",
    pageSubtitle:
      "Protect and Strengthen Your Enterprise with Robust Cybersecurity Solutions.",
    img: "/security-solutions-cover.webp",
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

export const INDUSTRIES_DATA = [
  {
    id: "public_sector",
    pageTitle: "Public Sector",
    pageSubtitle:
      "IT Solutions that Unify Platforms for a Streamlined Public Sector.",

    cardsData: [
      {
        icon: "mdi:chart-line",
        title: "Faster & Efficient",
        desc: "Enhancing Public Sector services through automation, decreasing bureaucratic issues, and enhancing governments’ reputation, while streamlining manual processes to increase effort and efficiency.",
      },
      {
        icon: "mdi:check-decagram",
        title: "Assuring Compliance",
        desc: "Rabalon has been serving Public Sector for years providing innovative solutions that help with transparency & compliance with regulations.",
      },
      {
        icon: "mdi:brain",
        title: "Extensive Knowledge",
        desc: "We rely on our in-depth expertise in creating innovative, fully integrated systems that include frontend and backend solutions for all Public Sector needs. At Rabalon we use top-notch Agile and customized solutions to serve public sectors.",
      },
    ],

    accordionData: [
      {
        title: "Performance Management",
        content:
          "Using Performance Management software you’ll be able to track the performance of your employees, track goals and KPIs, and manage the progress of different projects. This software allows you to quickly analyze progress and allocate resources for different projects.",
      },
      {
        title: "Communication & Employment Solutions",
        content:
          "Our Communication software allows you to transmit a large amount of information and updates securely and efficiently. Employment portals that help mass recruitments for government sectors.",
      },
      {
        title: "Citizen Relationship Management",
        content:
          "Ask questions and provide suggestions that are then evaluated and used for planning future projects. This software will help you develop a bond with the public and serve them better.",
      },
      {
        title: "Planning and Budgeting Software",
        content:
          "Customized complete tools that enable greater efficiency, transparency, and control in financial processes including financial projections, budgeting & transactions.",
      },
    ],
  },
  {
    id: "healthcare",
    pageTitle: "Healthcare",
    pageSubtitle:
      "Empowering Healthcare with Tech to Enhance Care and Integration.",

    cardsData: [
      {
        icon: "mdi:stethoscope",
        title: "Better Patient Care",
        desc: "Our Data Science healthcare solutions give you a bird’s-eye view of clinical processes and patient insights, allowing you to work towards personalized and preventative care.",
      },
      {
        icon: "mdi:robot-outline",
        title: "Automation and Analytics",
        desc: "Automate crucial steps of your lab testing and save time on data collecting, processing, and analysis. So, you can invest your time more in providing excellent patient care.",
      },
      {
        icon: "mdi:lock-check-outline",
        title: "Keep Patient Data Secure",
        desc: "Avoid leakage of confidential patient information by digitally organizing it with the help of blockchain technology.",
      },
    ],

    accordionData: [
      {
        title: "Custom Mobile Healthcare Applications",
        content:
          "We understand the challenges in the healthcare industry and we are here to smoothen your journey with custom mobile healthcare applications. Our software experts in the healthcare industry will bring everything you need, from applications for healthcare practitioners; telehealth, billing, medical prescriptions, and record management to applications for patients; health monitoring, medication tracking, and healthy living and wellness in the palm of your hand.",
      },
      {
        title: "Telemedicine",
        content:
          "Provide virtual service to your patients with our advanced custom-made telemedicine apps for report viewing, virtual consultations, and health tracking. Our experts will analyze your business needs, and then develop a roadmap that will help you adopt telemedicine solutions with robust data privacy and security mechanisms.",
      },
      {
        title: "EMR/EHR Applications",
        content:
          "Custom EMR/EHR applications that will enable an electronic record management system. This will improve your efficiency, reduce costs, and help you go paperless.",
      },
      {
        title: "Healthcare Data Analytics Solution",
        content:
          "Improve the quality of your clinical care with our data analytics solution. It will help access patient data and allow health systems to generate patterns and trends around diagnosis, treatment, and continued care. It will also enable you to access your actionable insights that will guide future interactions with patients, customers, and populations.",
      },
      {
        title: "Healthcare Security",
        content:
          "The Healthcare industry is filled with cybersecurity-related issues. Cybersecurity in healthcare is an essential part as it involves protecting electronic information from unauthorized access, use, and disclosure. Our experts will develop software that will protect the confidentiality, integrity, and availability of information from hackers.",
      },
    ],
  },
  {
    id: "hospitality",
    pageTitle: "Hospitality",
    pageSubtitle:
      "Custom Software to Enhance Guest Experience and Optimize Operations.",

    cardsData: [
      {
        icon: "mdi:run-fast",
        title: "Increase Productivity",
        desc: "Rabalon helps you with automating task assignments, better order management, and a quick notification system that automates many processes eliminating 90% of human errors and increasing productivity.",
      },
      {
        icon: "mdi:currency-usd",
        title: "Lower Costs",
        desc: "Our data analytics tools will help you develop reports providing you with better insights for future planning and budgeting.",
      },
      {
        icon: "mdi:account-heart",
        title: "Guest Satisfaction",
        desc: "Our experts will help you develop a system to analyze customer demands and provide them with great customer service, personalized offers and promotions which in turn develop a bond between customer and company.",
      },
    ],

    accordionData: [
      {
        title: "Hotel Management Software",
        content:
          "Whether you have a small hotel or a full-scale hotel chain, our experts will develop end-to-end custom-made hotel management solutions for you according to your business needs. Our bespoke software solutions will help you optimize your workflows and assign automated tasks, eliminating the need for human resources.",
      },
      {
        title: "Customer Relation Management System",
        content:
          "A full-scale CRM system is needed for a successful hospitality business. Our CRM solutions will help you develop strong relations with your clients through loyalty programs, client feedback management, and statistics tracking. Having a strong relationship with clients guarantees a return on investment.",
      },
      {
        icon: "mdi:file-document",
        title: "Payment and Document Management System",
        content:
          "Inefficient management can cause losses. Our experts design full-stack document and payment management systems to automate payments and centralize data securely.",
      },
    ],
  },
  {
    id: "retail",
    pageTitle: "Retail",
    pageSubtitle:
      "Digital Solutions to Expand Retail Reach and Engage Wider Audiences.",

    cardsData: [
      {
        icon: "mdi:store",
        title: "Improve Conversions & Customer Retention",
        desc: "Our expert team will analyze & develop customer journeys for your business that will help you convert leads to sales. Engage existing clients and get repeat sales.",
      },
      {
        icon: "mdi:package-variant-closed",
        title: "Automated Inventory",
        desc: "Our data science experts will develop an automated inventory that will help in predicting future inventory investments on expected sales volumes, for better cost-efficiency.",
      },
      {
        icon: "mdi:truck-outline",
        title: "Supply Chain Management",
        desc: "Automate supply chain functions with the latest cloud solutions. Add transparency to processes and find the loopholes in your daily operations.",
      },
    ],

    accordionData: [
      {
        title: "Custom App Development For Retail",
        content:
          "We have a dedicated team that will develop a custom app for your business according to your needs. We will guide you through the whole process from beginning to implementation, providing proper training to your employees to help you scale up your business.",
      },
      {
        title: "AR & VR Solutions",
        content:
          "Staff trainings, product configurations & in-store experience, all on Virtual Reality. We can help you develop the latest VR apps customized to your business needs. With our Augmented Reality Solutions, you can now showcase product variations and enhance customer experience.",
      },
      {
        title: "Integrated Retail POS System",
        content:
          "We will help you implement the best POS solutions for your retail business. We are certified Shopify partners. Your integrated system will provide capabilities such as scanning a barcode, making a purchase order, or printing a receipt online.",
      },
      {
        title: "Custom Logistic Management System",
        content:
          "Our experts in blockchain, cloud software, and analytics will help develop a foolproof custom logistic management system for your retail business.",
      },
    ],
  },
];
