export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Transforming ideas into impactful digital solutions",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Experience with multinational corporations, enhancing global team dynamics",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an AI Rate My Professor website",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "StockStarter - AI Flashcard Generator App",
    des: "Use AI to generate flashcards and learn about any stock or finance related topics",
    img: "/stockstarter.png",
    iconLists: ["/js.svg", "/tail.svg", "/openaireal.svg", "/firebase.svg", "/next.svg", "/stripe.svg", "/re.svg"],
    link: "https://stockstarter.vercel.app",
    actionText: "View Website",
  },
  {
    id: 2,
    title: "Escape From Corona - Java Maven 2D Maze Game",
    des: "A thrilling single player 2D maze game with 3 difficulty levels where you must escape the coronavirus",
    img: "/escapecorona.png",
    iconLists: ["/java.svg", "/apachemaven.svg", "/figma.svg", "/gradlebig.svg", "/Junit.svg"],
    link: "https://www.youtube.com/watch?v=l2fZTEQB7kQ&t=44s",
    actionText: "View Video",
  },
  {
    id: 3,
    title: "CRADLE-Platform",
    des: "Participated in the development of a health care system to improve maternal care and reduce preventable maternal deaths in Uganda",
    img: "/cradle2.png",
    iconLists: ["/re.svg", "/python.svg", "/ts.svg", "/html.svg", "/css.svg", "/docker.svg"],
    link: "https://github.com/dpatel12/CRADLE-Platform/blob/main/screenshots/cradle-platform.png",
    actionText: "View Overview",
  },
  {
    id: 4,
    title: "Pro Football Chat Support Website",
    des: "A website where AI can answer all your questions related to the NFL, CFL, and XFL",
    img: "/profootball.png",
    iconLists: ["/aws.svg", "/openaireal.svg", "/html.svg", "/css.svg", "/js.svg", "/next.svg"],
    link: "https://ai-chat-support-theta.vercel.app",
    actionText: "View Website",
  },
];

export const testimonials = [
  {
    quote:
      "Danyaal effectively identifies, analyzes, and implements creative solutions to complex problems, demonstrating a critical and innovative approach to challenges that include thoughtful decisions. He consistently demonstrates professional conduct, using time and technology efficiently and applies his skills and experiences in a reliable manner. Danyaal welcomes feedback as an opportunity to reflect, learn, and refine his work, all while expressing and applying ideas in ways that challenge existing methods and norms.",
    name: "Mat Siwoski",
    title: "Sr. Software Engineer at Provincial Health Services Authority",
    profileImg: "/matsiwoski.jpeg",
  },
  {
    quote:
      "Danyaal is off to a good start as an IT professional.  Showing both creativity and adaptability while positively responding to feedback.  He took ownership of a deliverable, understood the business impact, and helped with transition to the business and support groups.  Was a pleasure to have on the team",
    name: "Jonathon Robert",
    title: "Solutions Architect, Transportation Systems, Albertsons Companies",
    profileImg: "/jonathonrobert.jpeg",
  },
  {
    quote:
      "I’ve had the privilege of knowing Danyaal Patel for several years, and I can confidently say he’s one of the most outstanding students I’ve ever met. Not only does he excel academically, but he’s also deeply involved in serving his school, community, and faith. Danyaal is respected by his peers and serves as a bridge between cultures, helping to create a peaceful, harmonious, and diverse community where everyone feels welcome.",
    name: "David Starr",
    title: "Principal at Terry Fox Secondary School, Former Principal of Byrne Creek Community School, and Published Author",
    profileImg: "/davidstarr.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];