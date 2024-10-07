import { faPlay, faMusic, faBowlFood, faLaptop, faComputer } from "@fortawesome/free-solid-svg-icons";

const PROJECT_DATA = [
  {
    image: "/images/unit-testing.svg",
    project_name: "Software Unit Testing",
    project_detail: [
      "Developed a unit test generator for Java and Python using an LLM (Language Model) based approach.",
      "Utilized React and JavaScript for the user interface (UI) of the project.",
      "Successfully addressed the challenge of codebase size limitations in the unit testing process.",
      "Provided a clear understanding of variables created at execution time for more effective unit testing.",
      "Implemented the solution as part of an internship Capstone project, demonstrating practical application and real-world relevance.",
      "Integrated LLM-based testing strategies to generate meaningful test cases for complex code."
    ],
    project_link: "https://github.com/rahulmamoria30/software_unit_testing",
    github_link: "https://github.com/rahulmamoria30/software_unit_testing",
    icon: faComputer,
    techstack: ["Java", "Python", "React", "JavaScript", "LLM (Language Model)"]
  },
  {
    image: "/images/next-food.png",
    project_name: "Food API Data",
    project_detail: [
      "This project is a food recipe app leveraging a public Food API to display recipes.",
      "Implemented an interactive UI for searching food items and displaying detailed information such as ingredients and preparation time.",
      "Developed using React.js with asynchronous JavaScript (Fetch API) for handling API requests.",
      "Fully responsive design ensures optimal performance across devices.",
      "Enhanced user experience through efficient data fetching, ensuring minimal loading times and a smooth interface."
    ],
    project_link: "https://rahulmmyoutubeclone.netlify.app/",
    github_link: "https://github.com/rahulmamoria30/next-level-food",
    icon: faBowlFood,
    techstack: ["React", "JavaScript", "API Integration", "CSS"]
  },
  {
    image: "/images/youtube-clone.png",
    project_name: "YouTube Clone",
    project_detail: [
      "This project is an HTML/CSS YouTube clone leveraging the YouTube API.",
      "It replicates core functionalities such as video search, playback, and video details (title, uploader, views).",
      "Designed with responsive HTML/CSS for a seamless viewing experience across devices.",
      "Implemented pagination to efficiently load more videos as the user scrolls.",
      "The project serves as an example of front-end proficiency in handling real-time API data."
    ],
    project_link: "https://rahulmmyoutubeclone.netlify.app/",
    github_link: "https://github.com/rahulmamoria30/youtube-clone",
    icon: faPlay,
    techstack: ["HTML", "CSS", "JavaScript", "YouTube API", "Responsive Design"]
  },
  {
    image: "/images/music-clone.png",
    project_name: "Music Webpage",
    project_detail: [
      "This project is a music web page designed with HTML, CSS, and JavaScript.",
      "It features a responsive layout for optimal viewing across devices.",
      "Includes a music player with playback controls, dynamic song details display, and playlist management capabilities.",
      "Implemented using vanilla JavaScript, showcasing proficiency in DOM manipulation and event handling.",
      "Designed with a minimalist user interface, focusing on user experience and smooth interactions."
    ],
    project_link: "https://rahulmamoria30.github.io/myMusic-webpage/",
    github_link: "https://github.com/rahulmamoria30/myMusic-webpage",
    icon: faMusic,
    techstack: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  }
];

export default PROJECT_DATA;
