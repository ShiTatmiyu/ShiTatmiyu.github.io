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
      title: "Bogor GameJam",
      company_name: "Create In Bogor",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2023",
      points: [
        "learning game development using GDevelop Software to create engaging experiences, while refining techniques and innovating in game design.",
        "Collaborating seamlessly within interdisciplinary teams encompassing artists, animators, and fellow developers to collectively realize captivating and cohesive game projects.",
      ],
    },
    {
      title: "Internship",
      company_name: "Ginvo Studio",
      icon: tesla,
      iconBg: "#383E56",
      date: "September 2023 - March 2024",
      points: [
        "learning game development with Unity Game Engine.",
        "Working with the task given by the company with the technique learn from our new experinces with the company",
      ],
    },
    {
      title: "Bogor GameJam",
      company_name: "Create In Bogor",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "January 2024",
      points: [
        "learning more thoroughly using unity to make more refined game prototype.",
        "Collaborating with team member who have another role with the same idea in mind",
      ],
    },
    {
      title: "Global GameJam",
      company_name: "Indie Games Group Indonesia",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "January 2024",
      points: [
        "learning more thoroughly using unity to make more refined game prototype.",
        "Collaborating with team member who have another role with the same idea in mind",
      ],
    },
    {
      title: "Competence Test",
      company_name: "Smkn 1 Ciomas",
      icon: shopify,
      iconBg: "#383E56",
      date: "Feb 2024",
      points: [
        "Creating a game prototype with Unity Game Engine.",
        "Using the new official multiplayer package from Unity to create multiplayer game.",
      ]
    }
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
    {
      name: "Bagas and Friends Game Demo",
      description:
        "A Visual Novel created with the collaboration between programmer and artist to make game.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Renpy",
          color: "green-text-gradient",
        },
        {
          name: "GameDeveloper",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ShiTatmiyu/Mr.Umbrella",
    },
    {
      name: "Rocket obstacle ground",
      description:
        "A normal Platformer game with a twist of rocket jump as the main mechanic of the game.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "Platformer Game",
          color: "green-text-gradient",
        },
        {
          name: "GameDeveloper",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ShiTatmiyu/Mr.Umbrella",
    },
    {
      name: "PolyDoom Multiplayer Prototype",
      description:
        "First Person shooter multiplayer using the new multiplayer packgae from unity.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "NetCode",
          color: "green-text-gradient",
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
