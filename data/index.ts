export const navItems = [
  { name: "About", link: "#about" },
  { name: "Work Experience", link: "#workexp" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Skills", link: "#skills" },
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
    img: "/laptop.jpeg",
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
    iconLists: ["/java.svg", "/apachemaven.svg", "/figma.svg", "/gradlebig.svg", "JUnit.png"],
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
    title: "Associate Software Developer, Absolute Security",
    desc: [
      "Developed and implemented Java-based software components and RESTful APIs, focusing on robust design, implementation, and testing to meet client and stakeholder objectives.",
      "Deployed and contributed to microservice components using Jenkins, Kubernetes and ARGO.",
      "Directed daily Agile stand-up meetings and participated in team activities including backlog refinement and sprint planning.",
      "Helped maintain team quality benchmarks by achieving 90% or higher code coverage in unit tests for new code."
    ],
    className: "md:col-span-2",
    thumbnail: "/absolute.jpeg",
    date: "September 2023 - May 2024", // example date
    categories: ["software"]
  },
  {
    id: 2,
    title: "Software Engineering Fellow & ScrumMaster, Headstarter AI",
    desc: [
      "Leading the development of key projects utilizing HTML, CSS, DNS, ReactJS, NextJS, Firebase, OpenAI, AWS, authentication systems, Stripe API, RAG, and vector databases.",
      "Serving as Scrum Master, facilitating agile processes, and ensuring efficient team collaboration and project delivery.",
      "Acquiring practical experience in AI-driven solutions, web development, and the integration of cutting-edge technologies.",
      "Collaborating on diverse projects, participating in mock scenarios, and engaging in networking events and hackathons to sharpen both technical and professional skills."
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/headstarter.jpeg",
    date: "July 2024 - September 2024", // example date
    categories: ["software"]
  },
  {
    id: 3,
    title: "Java Developer, Albertsons Companies",
    desc: [
      "Created Powershell and command line scripts to connect an API interface to company semi-trucks.",
      "Wrote scripts that ran weekly which collected and formatted logistics data in JSON form from 16 distribution centers across the United States.",
      "Tested existing codebases by creating JUnit tests in Java-based repositories while increasing the code coverage.",
      "Wrote support documentation for both support team and users."
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/albertsonssquare.svg",
    date: "September 2022 - January 2023", // example date
    categories: ["software"]
  },
  {
    id: 4,
    title: "Application Programmer Analyst, Provincial Health Services Authority (PHSA)",
    desc: [
      "Participated in the development, implementation, and testing of a .NET based website adhering to robust development standards and wireframe documentation requirements.",
      "Provided system troubleshooting for web and database issues and implemented database updates using SQL queries. Augmented site with additional pages and menus."
    ],
    className: "md:col-span-2",
    thumbnail: "/phsanew.png",
    date: "September 2021 - January 2022", // example date
    categories: ["software"]
  },
  {
    id: 5,
    title: "Sales Specialist, Apple",
    desc: [
      "Identified customer needs and demonstrated product features.",
      "Built relationships with customers and businesses by providing support, answering questions, and following up on purchases.",
      "Participated in ongoing training to develop and enhance product knowledge."
    ],
    className: "md:col-span-2",
    thumbnail: "/applereal.svg",
    date: "September 2023 - January 2024", // example date
    categories: ["business-tech"]
  },
  {
    id: 6,
    title: "Corporate Venture Capital & Business Analytics Externship, HP Tech Ventures",
    desc: [
      "Expected to research and evaluate pre-seed stage startups for potential investment opportunities.",
      "Will analyze business models, strategies, and value chains using advanced data analytics tools.",
      "Looking forward to collaborating with venture capital teams to identify and profile promising startups."
    ],
    className: "md:col-span-2",
    thumbnail: "/hp.svg",
    date: "August 2024 - September 2024",
    // banner: "STARTING SOON", // example date
    categories: ["business-tech"]
  },
  {
    id: 7,
    title: "Bellman/Valet, Sheraton Hotels & Resorts",
    desc: [
      "Assisted incoming and outgoing guests with their luggage in and out of vehicles as requested. Drove guest vehicles to and from the courtyards and the valet guest parking area in a safe manner.",
      "Delivered packages, faxes, mail, and completed room checks in a timely manner.",
    ],
    className: "md:col-span-2",
    thumbnail: "/sheraton1.svg",
    date: "July 2022 - January 2023",
    categories: ["retail"]
  },
  {
    id: 8,
    title: "Valet Attendant, Fifth Avenue Valets Ltd",
    desc: [
      "Carefully drove and parked guest vehicles while ensuring that vehicles were locked and the exact location was recorded.",
      "Treated guests in a friendly, professional manner, and retrieved vehicles upon request",
      "Provided valet services at fine dining restuarants in downtown Vancouver and at private events throughout the Lower Mainland.",
    ],
    className: "md:col-span-2",
    thumbnail: "/5thavenue.png",
    date: "August 2021 - January 2023",
    categories: ["retail"]
  },
  {
    id: 9,
    title: "Bellman, Exchange Hotel Vancouver",
    desc: [
      "Handled guest interactions with the highest level of hospitality and professionalism, accomodated special requests whenever possible, and assisted guests with inquiries in connection to hotel services.",
      "Greeted guests passing through the lobby and assisted proactively.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exchange.png",
    date: "December 2021 - March 2022",
    categories: ["retail"]
  },
  {
    id: 10,
    title: "Youth Football Referee, Lower Mainland Football Referee Association",
    desc: [
      "Officiated games, enforced rules, and assessed penalties.",
      "Ensured the game ran smoothly and on schedule while coordinating effectively with other officials.",
    ],
    className: "md:col-span-2",
    thumbnail: "/lmfra.png",
    date: "August 2019 - Nov 2021",
    categories: ["sports"]
  },
  {
    id: 11,
    title: "Ice Hockey Timekeeper, Canlan Sports",
    desc: [
      "Managed multiple responsibilities during hockey games, including recording statistics, publishing game information on the website, and operating the scoreboard.",
      "Ensured accurate and timely updates to enhance the game experience for both players and spectators.",
    ],
    className: "md:col-span-2",
    thumbnail: "/canlan.png",
    date: "July 2017 - Nov 2021",
    categories: ["sports"]
  },
  {
    id: 12,
    title: "Drafting Intern, BC Hydro",
    desc: [
      "Prepared visualizations, including charts and maps, and sketched diagrams for dams.",
      "Developed proficiency in AutoCAD while contributing to projects for the BC Hydro Civil Engineering Department.",
    ],
    className: "md:col-span-2",
    thumbnail: "/bchydro.svg",
    date: "July 2018",
    categories: ["business-tech"]
  },
  {
    id: 13,
    title: "Sales Associate, Disney Store",
    desc: [
      "Assisted customers in selecting merchandise, providing personalized recommendations to enhance their shopping experience.",
      "Maintained an organized and visually appealing store environment while processing transactions efficiently.",
    ],
    className: "md:col-span-2",
    thumbnail: "/disneystore.svg",
    date: "May 2019 - September 2019",
    categories: ["retail"]
  },
  {
    id: 14,
    title: "Newspaper Carrier, New West Record",
    desc: [
      "Distributed newspapers to 75 houses in the neighbourhood twice a week.",
      "Managed timely deliveries while maintaining an accurate record of addresses and customer preferences.",
    ],
    className: "md:col-span-2",
    thumbnail: "/newwest.jpeg",
    date: "May 2013 - June 2015",
    categories: ["all"]
  },
  {
    id: 15,
    title: "Manager & Team Captain, Ruthless Aggression Touch Football Team",
    desc: [
      "Formed and led a men's touch football team for a local recreational league.",
      "Organized practices, recruited players, managed team communications, and handled the procurement of jerseys and equipment.",
      "Oversaw team finances, handling budgeting, fee collection, and payments for jerseys, equipment, and league fees.",
    ],
    className: "md:col-span-2",
    thumbnail: "/RASVG.svg",
    date: "January 2022 - May 2022",
    categories: ["sports"]
  },
];

export const education = [
  {
    id: 1,
    title: "Bachelor of Science in Computer Science, Joint Major in Business Administration",
    institution: "Simon Fraser University",
    date: "2019 - 2024",
    logo: "/SFU.svg",
    details: ["Graduated with honors", "Relevant coursework: AI, Machine Learning, Web Development"],
  },
];

export const certificationsData = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services",
    date: "September 2024 (Expected)",
    logo: "/aws.svg",
    banner: "IN PROGRESS",
  },
  {
    id: 2,
    title: "Certified Scrum Master®",
    institution: "Scrum Alliance",
    date: "August 2024",
    logo: "/scrum-alliance (1).svg",
  },
  {
    id: 3,
    title: "Work Integrated Learning (WIL) e-Learning Artificial Intelligence",
    institution: "Information and Communications Technology Council (ICTC-CTIC)",
    date: "April 2022",
    logo: "/ICTC.png",
  },
  {
    id: 4,
    title: "Work Integrated Learning (WIL) e-Learning Blockchain",
    institution: "Information and Communications Technology Council (ICTC-CTIC)",
    date: "April 2022",
    logo: "/ICTC.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/dpatel12"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/danyaalpatel/"
  },
];