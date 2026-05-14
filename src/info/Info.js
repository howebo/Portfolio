import self from "../img/self.png";
import aura from "../img/aura.png";
import nexus from "../img/nexus.png";
import cosmos from "../img/cosmos.png";
// import train from "../img/train.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = true;

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
      text: "Software Engineer at Circana",
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
      link: "https://drive.google.com/file/d/1Q070Muduc5AP4R_PvTKldTcDzYz3C9pq/view?usp=sharing",
      icon: "fa fa-file-text fa-1x",
      label: "resume",
    },
  ],
  bio: "Hello 👋, I'm Priyansh. I'm a Software Engineer 🧑‍💻 at Circana.I enjoy doing meditation 🧘‍♂️, and I believe AI will inevitably rule us all one day. You should hire me!",
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
    exposedTo: ["Nodejs", "Express", "Postman", "Docker", "MongoDB", "DBeaver"],
  },
  hobbies: [
    {
      label: "Meditation",
      emoji: "🧘‍♂️",
    },
    {
      label: "Football",
      emoji: "⚽",
    },
    {
      label: "Movies",
      emoji: "🎥",
    },
    {
      label: "Cooking",
      emoji: "🌶",
    },
  ],
  portfolio: [
    {
      title: "Aura Weather",
      live: "https://howebo.github.io/Aura_Weather/",
      source: "https://github.com/howebo/Aura_Weather",
      image: aura,
    },
    {
      title: "Pomodoro Timer and Tools",
      live: "https://howebo.github.io/nexus/",
      source: "https://github.com/howebo/nexus",
      image: nexus,
    },
    {
      title: "Cosmos",
      live: "https://howebo.github.io/cosmos/",
      source: "https://github.com/howebo/cosmos",
      image: cosmos,
    },
    // {
    //   title: "Project 1",
    //   live: "https://github.com/howebo/Grocery",
    //   source: "https://github.com/howebo/Grocery",
    //   image: mock7,
    // },
    // {
    //   title: "Train App",
    //   live: "https://howebo.github.io/TrainApp/train.html",
    //   source: "https://github.com/howebo/TrainApp",
    //   image: train,
    // },
    // {
    //   title: "Project 4",
    //   live: "https://github.com/howebo/Skincare",
    //   source: "https://github.com/howebo/Skincare",
    //   image: mock3,
    // },
    // {
    //   title: "Project 5",
    //   live: "https://github.com/howebo/Url-Shortener",
    //   source: "https://github.com/howebo/Url-Shortener",
    //   image: mock4,
    // },
    // {
    //   title: "Project 6",
    //   live: "https://github.com/howebo/UM",
    //   source: "https://github.com/howebo/UM",
    //   image: mock5,
    // },
    // {
    //   title: "Project 7",
    //   live: "https://github.com/howebo/The-Daily-Buzz",
    //   source: "https://github.com/howebo/The-Daily-Buzz",
    //   image: mock6,
    // }
  ],
};
