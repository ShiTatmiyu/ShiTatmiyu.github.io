import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
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
    carrent,
    jobit,
    tripguide,
    threejs,
    photo,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "CodeIgniter 4 Developer",
      icon: mobile,
    },
    {
      title: "Laravel Developer",
      icon: backend,
    },
    {
      title: "Newbie Game Developer",
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
      name: "PHP 8",
      icon: nodejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MySql",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Laravel",
      icon: threejs,
    },
    {
      name: "CodeIgniter",
      icon: reactjs,
    },
  ];
  
  const experiences = [
    {
      title: "Intern Developer",
      company_name: "Bulanan App",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2020",
      points: [
        "Mastering the seamless integration of CSS within HTML for precise design implementation.",
        "Acquiring proficiency in utilizing the Bootstrap framework for efficient and responsive web development.",
      ],
    },
    {
      title: "Level Test",
      company_name: "Smkn 1 Ciomas",
      icon: shopify,
      iconBg: "#383E56",
      date: "Feb 2023 - Apr 2023",
      points: [
        "Developing and maintaining web applications using CodeIgniter 4 Framework and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "E-Learning Website Developer",
      company_name: "PKBM SIB",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        "Developing and maintaining E-Learning web applications using Framework Laravel and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "GameJam",
      company_name: "Create In Bogor",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2023",
      points: [
        "learning game development using GDevelop Software to create engaging experiences, while refining techniques and innovating in game design.",
        "Collaborating seamlessly within interdisciplinary teams encompassing artists, animators, and fellow developers to collectively realize captivating and cohesive game projects.",
        "Implementing teams idea into a playable demo.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "i thought it's impossible but after working on the game with Refan it's possible to finish the game.",
      name: "Rafii (Akari)",
      designation: "Partner",
      company: "Game Jam",
      image: photo,
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
      name: "Daily Pray Attendance",
      description:
        "Web-based platform that enables educators to effectively monitor students' daily prayer attendance, fostering transparent communication. This tool enhances accountability and contributes to a holistic educational environment.",
      tags: [
        {
          name: "Codeigniter4",
          color: "blue-text-gradient",
        },
        {
          name: "MySql",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ShiTatmiyu/sistem-abi",
    },
    {
      name: "Laravel website",
      description:
        "Creating my first Laravel website to gain practical web development experience and explore Laravel's capabilities, aiming to build a strong foundation in modern PHP-based web development..",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "MySql",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ShiTatmiyu/Ecommerce",
    },
    {
      name: "Mr.Umbrella Game Demo",
      description:
        "Experience innovative game development with GDevelop 5. Our team crafts professional desktop games, diving into a world of creativity and innovation.",
      tags: [
        {
          name: "Gdevelop5",
          color: "blue-text-gradient",
        },
        {
          name: "GameDeveloper",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ShiTatmiyu/Mr.Umbrella",
    },
  ];
  

  export { services, technologies, experiences, testimonials, projects };