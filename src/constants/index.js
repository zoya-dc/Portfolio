import {
    mobile,
    backend,

    creator,
    web,
    javascript,

    html,
    css,
    reactjs,
    vue,
    // BikeRepair,
    tailwind,
    nodejs,
    nuxt,
    api,

    git,
    figma,
    wordpress,
    // meta,
    DiggajCoder,
    InternPe,
    // starbucks,
    // tesla,
    // shopify,
    carrent,
    // jobit,
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
    // {
    //     id: "experience",
    //     title: "Experience"
    // },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Design",
        icon: web,
    },
    {
        title: "Front End Developer",
        icon: mobile,
    },
    {
        title: "React Developer",
        icon: backend,
    },
    {
        title: "WordPress Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },

    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Vue",
        icon: vue,
    },

    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Nuxt",
        icon: nuxt,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Api",
        icon: api,
    },
    {
        name: "wordpress",
        icon: wordpress,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },


];

const experiences = [
    {
        title: "Front End Developer",
        company_name: "Diggaj Coder PVT Ltd",
        icon: DiggajCoder,
        iconBg: "#383E56",
        date: "January 2024 - present",
        points: [
            "Developed and maintained responsive web applications using HTML5, CSS3, JavaScript (ES6+), and React.js",
            "Collaborated with cross-functional teams to implement UI designs, integrate RESTful APIs, and deliver user-centric solutions.",
            "Integrated RESTful APIs and GraphQL endpoints to fetch and display dynamic data.",
            "Worked in an Agile environment, participating in daily stand-ups and sprint planning."
        ],
    },
    {
        title: "Intern Front End Developer",
        company_name: "Diggaj Coder PVT LTD",
        icon: DiggajCoder,
        iconBg: "#E6DEDD",
        date: "Jun 2023 - Dec 2023",
        points: [
            "Optimized web performance by reducing load times by 30% through code splitting and lazy loading.",
            "Implemented responsive design and cross-browser compatibility for a seamless user experience.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Intern Web Developer",
        company_name: "InternPe",
        icon: InternPe,
        iconBg: "#383E56",
        date: "Feb 2024 - Mar 2024",
        points: [
            "Completed an intensive internship program focused on frontend and backend web development, gaining hands-on experience in building responsive and dynamic web applications.",
            "Learned and applied best practices in version control (Git), debugging, and web performance optimization.",
            "Received a certificate of completion for demonstrating strong technical skills and delivering high-quality projects on time."
        ],
    },

];



const projects = [
    {
        name: "Diggaj Coder Website",
        description:
            "'Diggaj-Coder',aligns with Diggaj Coder Private Limited, an educational technology startup offering full-stack development courses, the repository itself does not provide explicit details about its specific purpose or how it relates to Diggaj Coder's offerings.",
        tags: [
            {
                name: "Vue 3",
                color: "blue-text-gradient",
            },
            {
                name: "Nuxt 3",
                color: "green-text-gradient",
            },
            {
                name: "Vuetify",
                color: "pink-text-gradient",
            },
        ],
        image: "src/assets/company/Designer-5 1.png",
        source_code_link: "https://github.com/zoya-dc/Diggaj-Coder",
    },
    {
        name: "Bike Repair",
        description:
            "Appointment Scheduling: Allows users to select preferred dates and times for bike repairs,Service Tracking: Enables users to monitor the status of their bike repairs in real-time,Notifications: Sends alerts to users when their bike is ready for pickup.",
        tags: [
            {
                name: "Vue 3/vite ",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "vuetify",
                color: "pink-text-gradient",
            },
        ],
        image: "src/assets/company/BikeRepair.png",
        source_code_link: "https://github.com/zoya-dc/Bike-Repair",
    },
    {
        name: "Bike Repair",
        description:
            "Appointment Scheduling: Allows users to select preferred dates and times for bike repairs,Service Tracking: Enables users to monitor the status of their bike repairs in real-time,Notifications: Sends alerts to users when their bike is ready for pickup.",
        tags: [
            {
                name: "Vue 3/vite ",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "vuetify",
                color: "pink-text-gradient",
            },
        ],
        image: "src/assets/company/BikeRepair.png",
        source_code_link: "https://github.com/zoya-dc/Bike-Repair",
    },
    {
        name: "HR Management Portal",
        description:
            "Designed and developed a comprehensive HR Management Portal to streamline employee and HR operations, Implemented features such as employee onboarding, leave management, attendance tracking, and payroll processing.",
        tags: [
            {
                name: "Vue 3",
                color: "blue-text-gradient",
            },
            {
                name: "Vite",
                color: "green-text-gradient",
            },
            {
                name: "Vuetify",
                color: "pink-text-gradient",
            },
        ],
        image: "src/assets/company/HrPortal.png",
        source_code_link: "https://github.com/zoya-dc/DC-HR--Portal-Main",
    },
];

export { services, technologies, experiences, projects, };
