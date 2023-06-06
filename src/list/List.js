import auctionist from "../images/Auctionist.png"
import ecom from "../images/ecom.png"
import Holidaze from "../images/Holidaze.png"



const projectList = [
  {
    title: "HoliDaze",
    task: "A newly launched accommodation booking site called Holidaze has approached you to develop a brand new front end for their application. While they have a list of required features, the design and user experience has not been specified. Working with the official API documentation, plan, design and build a modern front end accommodation booking application.There are two aspects to this brief: the customer-facing side of the website where users can book holidays at a venue, and an admin-facing side of the website where users can register and manage venues and bookings at those venues.",
    description: "Final delivery for the second year of Noroff Vocational school for Front-End development",
    links: {
      github: "https://github.com/DanielPyb/project-exam-2",
      livesite: "https://clever-cajeta-7418b6.netlify.app/",
    },
    tools: [
        "React",
        "Bootstrap",
        "Figma"
    ],
    image: Holidaze,
    created: "May 27 2023",
    id: 1,
  },
  {
    title: "Auctionist",
    task: "An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction. When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings.",
    description: "Delivery of semester project 2 for the winter of 2022",
    links: {
      github: "https://github.com/DanielPyb/exam-semester-3",
      livesite: "https://steady-tapioca-3e45c7.netlify.app/",
    },
    tools: [
        "Vanilla JavaScript",
        "Bootstrap",
    ],
    image: auctionist,
    created: "Dec 11 2022",
    id: 2,
  },
  {
    title: "e-com for å handle",
    task: "Create an E-commerce site using an API that's been delivered by the school. The webpage should follow certain criterias such as haveing a homepage, individual product-page, cart page, checkout success page. Use React Router for moving between the pages",
    description: "Delivery from when I learned about Javascript Frameworks",
    links: {
      github: "https://github.com/DanielPyb/JavaScript-Frameworks-ca",
      livesite: "https://gentle-moonbeam-0d36cb.netlify.app/",
    },
    tools: [
        "React",
        "Bootstrap",
        "Figma"
    ],
    image: ecom,
    created: "Apr 02 2023",
    id: 3,
  },
];


export default projectList;