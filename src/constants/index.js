import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  python,
  pipelines,
  aws,
  azure,
  databricks,
  terraform,
  gcp,
  pyspark,
  powerbi,
  airflow,
  sql,
  api,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  koerber,
  cognizant,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title:"Projects"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
    {
    title: "Data Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,

  },
  {
    name: "API",
    icon: api,

  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "AZURE",
    icon: azure,
  },
  {
    name: "GCP",
    icon: gcp,
  },
  {
    name: "Airflow",
    icon: airflow,
  },
  {
    name: "Databricks",
    icon: databricks,
  },
  {
    name: "Pyspark",
    icon: pyspark,
  },
  {
    name: "PowerBI",
    icon: powerbi,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Programmer Analyst",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#383E56",
    date: "December 2017 - December 2018 ",
    points: [
      "RoboPMO – Enhanced AI driven Project\n" +
      "Management chatBot, mainly focused on\n" +
      "Cognizant Leadership team",
      "Technology – Python with Flask framework, Natural\n" +
      "Language Processing (NLP).",
      "Conversational AI – Developed numerous chatbots\n" +
      "for cognizant potential customers like Elizabeth river\n" +
      "crossings(ERC), Amgen and BB&T.",
      "Technology – Python with Flask framework, Natural\n" +
      "Language Processing (NLP), Azure LUIS, Dialogue\n" +
      "Flow, Amazon Alexa Skill Development and Salesforce",
    ],
  },
  {
    title: "Developer",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#E6DEDD",
    date: "December 2018 - January 2021",
    points: [
      "NEXA (Next Generation AI) – Developed ML Platform that automates Machine Learning\n" +
      "Algorithms to produce a complete report evaluating the data choosing the best model from\n" +
      "list of models and also have a leader board of the best models.",
      "Mainly Focused on Demand Sensing, Classification and Regression.\n",
      "Technology – Data Acquisition, Data wrangling,\n" +
      "Data Visualization, Deployment and AutoML which\n" +
      "includes Preprocessing, feature engineering, Model\n" +
      "Building and Evaluation.",
      "Incorporated the data preparation pipeline inside\n" +
      "the workflow to scale the solution thereby providing\n" +
      "the users a chance to increase the average\n" +
      "efficiency of the model by 50 %.",
      "Digital Green – Developed a Platform that\n" +
      "automates a journey of a farmer from field to\n" +
      "market using IoT, cloud, demand sensing and\n" +
      "disease detection.\n",
      "Technology - Working on IoT devices like Node\n" +
      "MCU, Particle Photon to integrate various sensors\n" +
      "such as humidity, temperature, rain, IR, Light sensors\n" +
      "and interacting with Oracle cloud for data.\n" +
      "Data used for Yield Prediction, disease detection\n" +
      "and demand sensing using Machine Learning\n" +
      "Platform.\n",
      "Technology – Machine Learning, Deep Learning, ML\n" +
      "Packages and Python.",
    ],
  },
  {
    title: "Senior Developer",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#383E56",
    date: "Jan 2021 - Aug 2021",
    points: [
      "Managed the lifecycle of Machine Learning models and NLP solutions within NEXA, an AI platform, encompassing data engineering, AutoML, and ML Ops.",
      "Developed and deployed data pipelines using various sources, including Snowflake, ClickHouse, and S3, optimizing data processing and format handling.",
      "Coordinated large-scale software deployments and provided guidance to team members, ensuring efficient project execution.\n" +
      "Evaluated and improved development work, provided training, and fostered knowledge transfer within the team." ,
      "Spearheaded the enhancement of internal data platforms, introducing innovative technologies and methodologies to drive efficiency across departments." ,
      "Analyzed and recommended improvement strategies for key performance indicators (KPIs) across business areas, such as attrition analysis." ,
      "Worked with SQL and NoSQL databases for data preparation and cross-database migration, ensuring seamless data operations." ,
      "Utilized Terraform for provisioning and maintaining databases and other resources, optimizing infrastructure management",
    ],
  },
  {
    title: "Senior Data Engineer",
    company_name: "Körber",
    icon: koerber,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Present",
    points: [
      "Designed and managed API architecture, resulting in a 200% increase in performance by optimizing response times and enhancing user experience." ,
      "Led ETL tasks to ensure data integrity and pipeline stability, contributing to effective anomaly detection services." ,
      "Modernized legacy code bases to align with current development standards, reducing operating costs and improving functionality." ,
      "Analyzed complex data to identify anomalies, trends, and risks, providing valuable insights to improve internal controls." ,
      "Created interactive analytical solutions and visualization dashboards using Power BI, facilitating efficient communication of business insights to stakeholders." ,
      "Implemented Bash/Linux shell scripting and Python for database design and updates, ensuring seamless data operations." ,
      "Orchestrated database migration from on-premises to Azure cloud, ensuring data security and optimizing performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
