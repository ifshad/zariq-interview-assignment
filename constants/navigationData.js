import {
  FaBuilding,
  FaHouseChimneyUser,
  FaUserGraduate,
} from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BiBuildingHouse } from "react-icons/bi";
import { IoBulbOutline } from "react-icons/io5";
import { TbTargetArrow, TbFileLike } from "react-icons/tb";

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
        link: "/about-us/#vision-mission-values",
      },
      {
        id: 22,
        title: "Why choose us",
        link: "/about-us/#why-choose-us",
      },
      {
        id: 23,
        title: "Principal Message",
        link: "/about-us/#principal-message",
      },
      {
        id: 24,
        title: "Our Team",
        link: "/about-us/#our-team",
      },
      {
        id: 25,
        title: "Curriculum",
        link: "/about-us/#curriculum",
      },
      {
        id: 26,
        title: "History",
        link: "/about-us/#history",
      },
      {
        id: 27,
        title: "Campus",
        link: "/about-us/#campus",
      },
      {
        id: 28,
        title: "Upcoming Events",
        link: "/about-us/#upcoming-events",
      },
      {
        id: 29,
        title: "Gallery",
        link: "/about-us/#gallery",
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

export const earlyYearsTiming = [
  {
    id: 1,
    class: "Reception 1 (Playgroup)",
    firstShift: "9:00 am – 11:15 am",
    secondShift: "11:30 am – 1:45 pm",
  },
  {
    id: 2,
    class: "Reception 2 (Nursery)",
    firstShift: "8:15 am – 11:40 am",
    secondShift: "11:15 am – 2:30 pm",
  },
  {
    id: 3,
    class: "Year 1 (Kindergarten)",
    firstShift: "8:15 am – 12:20 pm",
    secondShift: "Not applicable",
  },
];

export const primaryYearsTiming = [
  {
    id: 1,
    class: "Year 2-3 (Grades 1-2)",
    schoolTiming: "8:15 am – 1:45 pm",
    salahTiming: "1:25 pm – 1:40 pm",
  },
  {
    id: 2,
    class: "Year 4-5 (Grades 3-4)",
    schoolTiming: "8:15 am – 2:00 pm",
    salahTiming: "1:25 pm – 1:40 pm",
  },
];

export const middleYearsTiming = [
  {
    id: 1,
    class: "Year 6-7 (Grades 5-6)",
    schoolTiming: "8:15 am – 2:50 pm",
    salahTiming: "1:25 pm – 1:40 pm",
  },
];

export const newsMedia = [
  {
    id: 1,
    title: "Glenrich Newsletter – February 2024",
    description:
      "Learning by doing: Going beyond textbooks to raise exceptional young adults.",
    imageUrl: "https://example.com/newsletter-february-2024.jpg",
  },
  {
    id: 2,
    title: "Mr. Ramesh Mudgal of Glenrich International School Satarkul",
    description:
      "Empowering students to take brand Bangladesh to the next level.",
    imageUrl: "https://example.com/ramesh-mudgal.jpg",
  },
  {
    id: 3,
    title: "শৈশবের শিক্ষায় বিকশিত হোক সাফল্যের সম্ভাবনা",
    description: "Childhood education that fosters the potential for success.",
    imageUrl: "https://example.com/childhood-education.jpg",
  },
];

export const latestUpdates = [
  {
    id: 1,
    update:
      "Parents are most welcome to visit the campus. Book your appointment Now!",
  },
  {
    id: 2,
    update:
      "Parents are most welcome to visit the campus. Book your appointment Now!",
  },
  {
    id: 3,
    update:
      "Parents are most welcome to visit the campus. Book your appointment Now!",
  },
  {
    id: 4,
    update:
      "Parents are most welcome to visit the campus. Book your appointment Now!",
  },
];

export const schoolGrades = [
  {
    id: 1,
    grade: "Playgroup",
  },
  {
    id: 2,
    grade: "Nursery",
  },
  {
    id: 3,
    grade: "Kindergarten",
  },
  {
    id: 4,
    grade: "Grade 1",
  },
  {
    id: 5,
    grade: "Grade 2",
  },
  {
    id: 6,
    grade: "Grade 3",
  },
  {
    id: 7,
    grade: "Grade 4",
  },
  {
    id: 8,
    grade: "Grade 5",
  },
  {
    id: 9,
    grade: "Grade 6",
  },
  {
    id: 10,
    grade: "Grade 7",
  },
  {
    id: 11,
    grade: "Grade 8",
  },
  {
    id: 12,
    grade: "Grade 9",
  },
  {
    id: 13,
    grade: "Grade 10",
  },
  {
    id: 14,
    grade: "Grade 11",
  },
  {
    id: 15,
    grade: "Grade 12",
  },
];

export const visionMissionValuesArray = [
  {
    id: 1,
    title: "Vision",
    short_description:
      "To be the global leader in providing innovative and sustainable solutions.",
    icon: <IoBulbOutline />,
  },
  {
    id: 2,
    title: "Mission",
    short_description:
      "Deliver exceptional products and services that exceed customer expectations and contribute positively to the community.",
    icon: <TbTargetArrow />,
  },
  {
    id: 3,
    title: "Values",
    short_description:
      "Integrity, Excellence, Respect, Innovation, Sustainability, and Teamwork.",
    icon: <TbFileLike />,
  },
];

export const whyChooseDetails = [
  {
    id: 1,
    title: "Why Choose Guidance?",
    description:
      "At Guidance International School we offer superb quality British education, unique Islamic schooling, the opportunity to become Hafez & Hafeza, and much more. Our students are prepared with more than bookish skills, having access to the best learning resources to develop into the intellectual elite and future leaders. They receive an education that exceeds academic expectations through diverse extra-curricular and co-curricular events, cultivating a culturally and academically diverse mindset toward globalization. Choosing GIS ensures your child can become a global citizen, mindful of their responsibilities in this life and the afterlife.",
    imageUrl: "url_to_image_why_choose_guidance",
  },
  {
    id: 2,
    title: "Superb Quality British Education",
    description:
      "GIS focuses on the holistic development of each student, including social, emotional, mental, physical, and cognitive aspects. We prepare students through a globally recognized curriculum of the Cambridge Pathway, ensuring a solid foundation up to Cambridge O Level and A Level qualifications. Our students complete their schooling under our tutelage without needing private tuition. Extra-curricular and co-curricular activities reflect in-class schooling, keeping students physically active and mentally engaged through various activities such as sports, camping trips, field trips, subject-based Olympiads, science fairs, and creative activities.",
    imageUrl: "url_to_image_superb_quality_education",
  },
  {
    id: 3,
    title: "Unique Islamic Schooling",
    description:
      "At GIS, Islamic Education provides Muslim children with the knowledge to understand their purpose of creation, responsibility, and managing worldly affairs. The curriculum includes Aqeedah and Akhlaq, Fiqh, the history of Islamic culture, the Qur’an and Hadith, and the Arabic language.",
    imageUrl: "url_to_image_unique_islamic_schooling",
  },
  {
    id: 4,
    title: "Opportunity to Make Hafez & Hafeza",
    description:
      "GIS offers the unique opportunity for students to become Hafiz/Hafeza of the glorious Quran. Our experienced team of teachers meticulously supervises each student with a teacher-student ratio of 1:3 for hifzul Quran. We are the first in Bangladesh to introduce hifzul Quran to the Cambridge curriculum and have produced numerous Hafez and Hafeza.",
    imageUrl: "url_to_image_hafez_hafeza_opportunity",
  },
];

export const teacherList = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    designation: "Principal",
    department: "Administration",
    imageUrl: "url_to_image_dr_sarah_ahmed",
  },
  {
    id: 2,
    name: "Mr. John Smith",
    designation: "Head of Mathematics",
    department: "Mathematics",
    imageUrl: "url_to_image_mr_john_smith",
  },
  {
    id: 3,
    name: "Ms. Fatima Khan",
    designation: "Senior English Teacher",
    department: "English",
    imageUrl: "url_to_image_ms_fatima_khan",
  },
  {
    id: 4,
    name: "Mr. Ali Rahman",
    designation: "Science Teacher",
    department: "Science",
    imageUrl: "url_to_image_mr_ali_rahman",
  },
  {
    id: 5,
    name: "Mrs. Aisha Begum",
    designation: "History Teacher",
    department: "History",
    imageUrl: "url_to_image_mrs_aisha_begum",
  },
  {
    id: 6,
    name: "Mr. Abdul Karim",
    designation: "Physical Education Teacher",
    department: "Physical Education",
    imageUrl: "url_to_image_mr_abdul_karim",
  },
  {
    id: 7,
    name: "Ms. Maria Gonzales",
    designation: "Art Teacher",
    department: "Art",
    imageUrl: "url_to_image_ms_maria_gonzales",
  },
  {
    id: 8,
    name: "Mr. Faisal Ahmad",
    designation: "Head of Islamic Studies",
    department: "Islamic Studies",
    imageUrl: "url_to_image_mr_faisal_ahmad",
  },
  {
    id: 9,
    name: "Mrs. Layla Hussain",
    designation: "Arabic Teacher",
    department: "Arabic",
    imageUrl: "url_to_image_mrs_layla_hussain",
  },
  {
    id: 10,
    name: "Mr. David Brown",
    designation: "Computer Science Teacher",
    department: "Computer Science",
    imageUrl: "url_to_image_mr_david_brown",
  },
];
