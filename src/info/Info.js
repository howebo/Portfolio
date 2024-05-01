import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import mock6 from "../img/mock6.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
  firstName: "Priyansh",
  lastName: "Singh Chawda",
  initials: "PSC", 
  position: "A Full Stack Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the India",
    },
    {
      emoji: "💼",
      text: "Software Engineer at Accenture",
    },
    {
      emoji: "📧",
      text: "priyansh02chawda@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://instagram.com/absolutelypriyansh",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/howebo",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/priyansh02/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://leetcode.com/howebo",
      icon: "fa fa-code",
      label: "leetcode",
    },
    {
      link: "https://drive.google.com/file/d/14_4de9zYkPkuHHTF1jzmMQm1SmDFfQMf/view?usp=sharing",
      icon: "fa fa-file-text fa-1x",
      label: "resume",
    },
  ],
  bio: "Hello 👋, I'm Priyansh. I'm a Software Engineer 🧑‍💻 at Accenture.I enjoy doing meditation 🧘‍♂️, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      "Angular",
      "React",
      "Javascript",
      "Java",
      "Git",
      "Github",
      "Bootstrap",
      "Html5",
      "Css3",
      "Sql",
      "C",
    ],
    exposedTo: ["Nodejs", "Express", "Postman", "Docker", "MongoDB"],
  },
  hobbies: [
    {
      label: "meditation",
      emoji: "🧘‍♂️",
    },
    {
      label: "football",
      emoji: "⚽",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    
  ],
  portfolio: [
    
    {
      title: "Project 1",
      live: "https://howebo.github.io/Weather-App/", 
      source: "https://github.com/howebo/Weather-App",
      image: mock1,
    },
    {
      title: "Project 2",
      live: "https://howebo.github.io/TrainApp/train.html",
      source: "https://github.com/howebo/TrainApp",
      image: mock2,
    },
    {
      title: "Project 3",
      live: "https://github.com/howebo/Skincare",
      source: "https://github.com/howebo/Skincare",
      image: mock3,
    },
    {
      title: "Project 4",
      live: "https://github.com/howebo/Url-Shortener",
      source: "https://github.com/howebo/Url-Shortener",
      image: mock4,
    },
    {
      title: "Project 5",
      live: "https://github.com/howebo/UM",
      source: "https://github.com/howebo/UM",
      image: mock5,
    },
    {
      title: "Project 6",
      live: "https://github.com/howebo/The-Daily-Buzz",
      source: "https://github.com/howebo/The-Daily-Buzz",
      image: mock6,
    },
  ],
};
