import {
  FaBuilding,
  FaHouseChimneyUser,
  FaUserGraduate,
} from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BiBuildingHouse } from "react-icons/bi";

export const navListItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About us",
    link: "/about-us",
    subMenu: [
      {
        id: 21,
        title: "Vision, Mission and Values",
        link: "/about-us/vision-mission-values",
      },
      {
        id: 22,
        title: "Why choose us",
        link: "/about-us/why-choose-us",
      },
      {
        id: 23,
        title: "Principal Message",
        link: "/about-us/principal-message",
      },
      {
        id: 24,
        title: "Our Team",
        link: "/about-us/our-team",
      },
      {
        id: 25,
        title: "Curriculum",
        link: "/about-us/curriculum",
      },
      {
        id: 26,
        title: "History",
        link: "/about-us/history",
      },
      {
        id: 27,
        title: "Campus",
        link: "/about-us/campus",
      },
      {
        id: 28,
        title: "Upcoming Events",
        link: "/about-us/upcoming-events",
      },
      {
        id: 29,
        title: "Gallery",
        link: "/about-us/gallery",
      },
    ],
  },
  {
    id: 3,
    title: "Admission",
    link: "/admission",
    subMenu: [
      {
        id: 31,
        title: "A brief admission Procedure",
        link: "/admission/procedure",
      },
      {
        id: 32,
        title: "Scholarship",
        link: "/admission/scholarship",
      },
      {
        id: 33,
        title: "School fees",
        link: "/admission/school-fees",
      },
      {
        id: 34,
        title: "Withdrawal Policy",
        link: "/admission/withdrawal-policy",
      },
      {
        id: 35,
        title: "FAQ on Admissions",
        link: "/admission/faq",
      },
      {
        id: 36,
        title: "How to Apply",
        link: "/admission/how-to-apply",
      },
      {
        id: 37,
        title: "Apply Online",
        link: "/admission/apply-online",
      },
      {
        id: 38,
        title: "Online Payment",
        link: "/admission/online-payment",
      },
    ],
  },
  {
    id: 4,
    title: "Contact us",
    link: "/contact-us",
  },
  {
    id: 5,
    title: "Achievements",
    link: "/achievements",
  },
  {
    id: 6,
    title: "Key Information",
    link: "/key-information",
  },
  {
    id: 7,
    title: "Policies",
    link: "/policies",
    refUrl: "DPS STS School",
  },
  {
    id: 8,
    title: "Facilities",
    link: "/facilities",
  },
];

export const drawerItemsList = [
  {
    branch: "Satarkul Branch",
    contactNumber: "+8809677444777",
    email: "info@glenrich.edu.bd",
    address:
      "Plot No: E-2 & E-3, Sunvalley Sharoni, Block: A, Sunvalley Abashan Swadesh Properties Ltd., Satarkul, Badda, Dhaka-1212",
    visitCampus: "Visit Satarkul Campus",
  },
  {
    branch: "Uttara Branch (Junior Campus)",
    contactNumber: "(+88) 0248961087",
    email: "info@uttara.glenrich.edu.bd",
    address: "Plot 4, Road 13, Sector 6, Uttara Model Town, Dhaka-1230",
    visitCampus: "Visit Uttara Campus",
  },
  {
    branch: "Uttara Branch (Senior Campus)",
    contactNumber: "(+88) 09614087141",
    email: "info@uttara.glenrich.edu.bd",
    address: "Plot ED-01, Road 1, Sector 15, Uttara Model Town, Dhaka-1230",
    visitCampus: "Visit Uttara Campus",
  },
];

export const schoolInfo = [
  {
    id: 1,
    count: 2015,
    description: "Founded",
    icon: <FaBuilding />,
  },
  {
    id: 2,
    count: "210+",
    description: "Teachers",
    icon: <FaChalkboardTeacher />,
  },
  {
    id: 3,
    count: "4000+",
    description: "Students",
    icon: <FaUserGraduate />,
  },
  {
    id: 4,
    count: "120+",
    description: "Staffs",
    icon: <IoIosPeople />,
  },
  {
    id: 5,
    count: "3+",
    description: "Branches",
    icon: <BiBuildingHouse />,
  },
  {
    id: 6,
    count: "9+",
    description: "Campuses",
    icon: <FaHouseChimneyUser />,
  },
];

export const ageSpecificSupport = [
  {
    id: 1,
    program: "PRESCHOOL",
    description:
      "For children aged 3 to 6. Focuses on communication, language, personal, social, emotional development, physical development, literacy, mathematics, understanding the world, expressive arts and design through fun activities.",
  },
  {
    id: 2,
    program: "PRIMARY SCHOOL",
    description:
      "For children from Year 2 to Year 6 (Grade 1 to Grade 5). Covers English, Bangla, Maths, Science, Computing, Global Citizenship, Islam, Arabic, Tahfeez, creative art, and physical education.",
  },
  {
    id: 3,
    program: "MIDDLE SCHOOL",
    description:
      "For children in Year 7 (Grade 6) to Year 9 (Grade 8). Prepares for IGCSE O & A Levels. Focuses on social and emotional development, self-regulation, self-advocacy, and interpersonal skills.",
  },
];
