import {
    frontend,
    backend,
    react,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    unbabel,
    sass,
    techproeducation,
    vitejs,
    nextjs,
    greaterroads,
    gymapp,
    gpt3,
    hlstore,
    goldengoose
} from "../assets";

export const aboutMe = {
    name: "Halil",
    lastName: "ALGUL",
    fullName: "Halil ALGUL",
    phone: "+905522308571",
    title: "Frontend Developer",
    email: "halibal95@gmail.com",
    desc: `I build data-driven web apps with React.js, seamlessly integrating with backend APIs for enhanced functionality and user experience.`,
    aboutDescription: `As a highly skilled frontend developer, I am proficient in a diverse range of technologies including JavaScript, TypeScript, HTML, CSS, RESTful APIs, ReactJS, Redux Toolkit, and Bootstrap. I am experienced in creating responsive websites using APIs, connecting with endpoints from the backend using Swagger documentation. Additionally, I am familiar with pre-processing languages such as SASS and SCSS, as well as form handling and validation tools such as Formik and Yup. I have a strong understanding of version control systems like Git and am proficient in testing and development tools like Postman and MockAPI. I have also worked with CMS platforms such as Sanity, and front-end development tools like Vite.js and Next.js. I am a passionate and motivated learner who stays up to date with the latest trends and technologies in frontend development. My goal is to leverage my skills and experience to create high-quality web applications that deliver a seamless user experience.`,
    projectsDescription: `Welcome to my projects section! Here you'll find a collection of my latest software development projects, ranging from personal experiments to client projects. Each project was created with the intention of exploring new technologies, refining my skills, and solving real-world problems. As a developer, I enjoy tackling complex problems and creating innovative solutions. I strive to produce high-quality code and prioritize clean, maintainable code architecture. I also enjoy collaborating with clients and team members to deliver the best possible product. Within this section, you will find a brief description of each project, along with screenshots and/or videos showcasing the user interface and functionality. Each project highlights my technical expertise, creativity, and passion for software development. Thank you for taking the time to explore my projects section. I hope you find something that inspires you!`,
    projectsDescriptionAlt: `Welcome to my projects section where you'll find a collection of my latest software development projects. From personal experiments to client projects, each was created to explore new technologies, refine my skills, and solve real-world problems. I prioritize clean, maintainable code architecture and enjoy collaborating with clients and team members to deliver the best possible product. Each project features a brief description, screenshots, and/or videos showcasing its functionality, highlighting my technical expertise, creativity, and passion for software development. Thank you for exploring my projects section - I hope you find something inspiring!`
}

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
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: frontend,
    },
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React.js Developer",
        icon: react,
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Vite",
        icon: vitejs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "SASS/SCSS",
        icon: sass,
    },
];

const experiences = [
    {
        title: "Senior Editor",
        company_name: "Unbabel",
        icon: unbabel,
        iconBg: "#383E56",
        date: "Apr 2015 - Jan 2022",
        points: [
            "Translate and edit various types of content (e.g., website copy, product descriptions, customer support messages) from English to Turkish and vice versa for clients such as Microsoft, Facebook, Uber, Airbnb, Pinterest, Logitech and Under Armour.",
            "Collaborate with other editors and translators to ensure the quality and consistency of translations.",
            "Use the Unbabel platform and other translation tools to manage workflow and maintain client-specific guidelines.",
        ],
    },
    {
        title: "Frontend Instructor",
        company_name: "Techpro Education",
        icon: techproeducation,
        iconBg: "#E6DEDD",
        date: "Dec 2022 - Present",
        points: [
            "Delivering frontend development course for students ranging from beginner to intermediate skill levels for 3 months.",
            "Designed and developed curriculum and lesson plans using HTML, CSS, JavaScript, React JS, Redux, and Bootstrap.",
            "Provided individual feedback and support to students to improve their skills and knowledge.",
            "Collaborated with other instructors and support staff to ensure the success of the program",
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
        name: "Greater Roads",
        description:
            "GreaterRoads.com is a car rental booking platform that allows users to search and book cars for their road trips in North America. The website features a user-friendly interface that allows users to filter search results by location, dates, and car type to find the perfect vehicle for their trip. The platform also includes an admin interface for car rental retailers to manage their inventory, pricing, and bookings. With GreaterRoads.com, users can easily plan their road trip and book a car with just a few clicks.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "spring boot",
                color: "green-text-gradient",
            },
            {
                name: "hibernate",
                color: "pink-text-gradient",
            },
            {
                name: "restapi",
                color: "orange-text-gradient",
            },
        ],
        image: greaterroads,
        source_code: "https://github.com/halibal",
        live_site: "https://www.greaterroads.com"
    },
    {
        name: "GYM App",
        description:
            "The gym app website is a comprehensive platform that enables users to track their fitness progress, schedule sessions with personal trainers, create customized workouts, and connect with other gym-goers. The website has a sleek and user-friendly design, making it easy for users to navigate and access the various features offered. Powered by the latest technologies such as React.js, Material UI, Axios, React Router Dom, and React Horizontal Scrolling Menu, the website is fast, reliable, and responsive, ensuring a seamless user experience. The gym app website caters to fitness enthusiasts of all levels, from beginners to advanced, making it a valuable resource for anyone looking to achieve their fitness goals.",
        tags: [
            {
                name: "react.js",
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
        image: gymapp,
        source_code: "https://github.com/halibal",
        live_site: "https://gym-app-teal.vercel.app"
    },
    {
        name: "HL Store",
        description:
            "This awesome e-commerce website is built with Next.js, React.js, Sanity, and Stripe, providing an exceptional user experience with a wide range of products. With a streamlined checkout process, customers can purchase products with ease, while the integration of Sanity ensures that product information is always up-to-date and accurate. The website is optimized for performance, providing a secure shopping experience that customers can trust. Overall, it's an excellent tool for businesses looking to create an online store and offer their customers a seamless and secure shopping experience.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "nextjs",
                color: "orange-text-gradient",
            },
            {
                name: "sanity",
                color: "green-text-gradient",
            },
            {
                name: "stripe",
                color: "pink-text-gradient",
            },
        ],
        image: hlstore,
        source_code: "https://github.com/halibal",
        live_site: "https://e-commerce-nu-eight.vercel.app"
    },
    {
        name: "GPT-3",
        description:
            "Welcome to our modern, responsive UX/UI website, built using the latest technology of React.js! Our website offers an exceptional user experience, designed to be both visually appealing and highly functional. With a focus on usability and user experience, our website provides an intuitive interface and clear navigation, making it easy to find the information you need quickly and efficiently. Our website is optimized for speed, reliability, and performance, providing a seamless user experience. Whether on desktop, tablet, or smartphone, our website adjusts to any screen size, making it easy to navigate on any device. Overall, our modern, responsive UX/UI website built using React.js is an excellent tool for businesses looking to improve their online presence and provide their customers with an exceptional user experience.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "responsive",
                color: "pink-text-gradient",
            },
        ],
        image: gpt3,
        source_code: "https://github.com/halibal",
        live_site: "https://modern-responsive-ux-ui-website.vercel.app"
    },
    {
        name: "Golden Goose",
        description:
            "Golden Goose is an exquisite and upscale restaurant, exudes luxury and sophistication with its elegant design and captivating imagery. Offering a glimpse into the refined dining experience that awaits, the site showcases the restaurant's award-winning cuisine, artisanal ingredients, and impeccable service. With a focus on seasonal flavors and elevated techniques, the menu promises to indulge your palate and leave you with a lasting impression. Whether you are planning a special occasion or looking for an exceptional fine dining experience, the Golden Goose is the epitome of culinary indulgence.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "responsive",
                color: "pink-text-gradient",
            },
        ],
        image: goldengoose,
        source_code: "https://github.com/halibal",
        live_site: "https://restaurant-liart-three.vercel.app"
    },
];

export { services, technologies, experiences, testimonials, projects };