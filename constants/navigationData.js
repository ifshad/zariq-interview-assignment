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
        link: "/admission/#procedure",
      },
      {
        id: 32,
        title: "Scholarship",
        link: "/admission/#scholarship",
      },
      {
        id: 33,
        title: "School fees",
        link: "/admission/#school-fees",
      },
      {
        id: 34,
        title: "Withdrawal Policy",
        link: "/admission/#withdrawal-policy",
      },
      {
        id: 35,
        title: "FAQ on Admissions",
        link: "/admission/#faq",
      },
      {
        id: 36,
        title: "How to Apply",
        link: "/admission/#how-to-apply",
      },
      {
        id: 37,
        title: "Apply Online",
        link: "/admission/#apply-online",
      },
      {
        id: 38,
        title: "Online Payment",
        link: "/admission/#online-payment",
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
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 2,
    title: "Mr. Ramesh Mudgal of Glenrich International School Satarkul",
    description:
      "Empowering students to take brand Bangladesh to the next level.",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 3,
    title: "শৈশবের শিক্ষায় বিকশিত হোক সাফল্যের সম্ভাবনা",
    description: "Childhood education that fosters the potential for success.",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
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
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 2,
    title: "Superb Quality British Education",
    description:
      "GIS focuses on the holistic development of each student, including social, emotional, mental, physical, and cognitive aspects. We prepare students through a globally recognized curriculum of the Cambridge Pathway, ensuring a solid foundation up to Cambridge O Level and A Level qualifications. Our students complete their schooling under our tutelage without needing private tuition. Extra-curricular and co-curricular activities reflect in-class schooling, keeping students physically active and mentally engaged through various activities such as sports, camping trips, field trips, subject-based Olympiads, science fairs, and creative activities.",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 3,
    title: "Unique Islamic Schooling",
    description:
      "At GIS, Islamic Education provides Muslim children with the knowledge to understand their purpose of creation, responsibility, and managing worldly affairs. The curriculum includes Aqeedah and Akhlaq, Fiqh, the history of Islamic culture, the Qur’an and Hadith, and the Arabic language.",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 4,
    title: "Opportunity to Make Hafez & Hafeza",
    description:
      "GIS offers the unique opportunity for students to become Hafiz/Hafeza of the glorious Quran. Our experienced team of teachers meticulously supervises each student with a teacher-student ratio of 1:3 for hifzul Quran. We are the first in Bangladesh to introduce hifzul Quran to the Cambridge curriculum and have produced numerous Hafez and Hafeza.",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
];

export const teacherList = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    designation: "Principal",
    department: "Administration",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 2,
    name: "Mr. John Smith",
    designation: "Head of Mathematics",
    department: "Mathematics",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 3,
    name: "Ms. Fatima Khan",
    designation: "Senior English Teacher",
    department: "English",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 4,
    name: "Mr. Ali Rahman",
    designation: "Science Teacher",
    department: "Science",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 5,
    name: "Mrs. Aisha Begum",
    designation: "History Teacher",
    department: "History",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 6,
    name: "Mr. Abdul Karim",
    designation: "Physical Education Teacher",
    department: "Physical Education",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 7,
    name: "Ms. Maria Gonzales",
    designation: "Art Teacher",
    department: "Art",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 8,
    name: "Mr. Faisal Ahmad",
    designation: "Head of Islamic Studies",
    department: "Islamic Studies",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 9,
    name: "Mrs. Layla Hussain",
    designation: "Arabic Teacher",
    department: "Arabic",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 10,
    name: "Mr. David Brown",
    designation: "Computer Science Teacher",
    department: "Computer Science",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
];

export const elementarySection = [
  {
    id: 1,
    title: "Curriculum Objectives",
    description: [
      "Inculcate strong Islamic values in the students.",
      "Help the students in their intellectual, emotional, physical and social development.",
      "Enable the students to become independent learners.",
      "Help each student to recognize and understand his/her role in the world.",
      "Prepare the students to become Da’ees (preachers) of Islam.",
    ],
    icon: "objective_icon_url",
  },
  {
    id: 2,
    title: "Arabic Language",
    description:
      "Arabic language starts right from Play Group, so that the children are able to practice it by the time they reach the higher grades. This is considered a key to unite the Muslims all over the world and to understand the Book of Allah in the language it was revealed in. The Elementary students use specially designed Arabic workbooks, developed in-house, which help the children build Arabic vocabulary quickly and practice Arabic letters.",
    icon: "arabic_icon_url",
  },
  {
    id: 3,
    title: "English Language",
    description:
      "The students are encouraged to communicate in English language. The spoken abilities are enhanced through daily practice of phonics, whereas the reading skills are developed through an intense levelled Reading Program. We follow a Synthetic Phonic Program using interactive boards and tablets in the classrooms to enhance the listening and reading capability of students. The written expression is polished through a well-structured curriculum focused on appreciating creativity along with improving the hand writing.",
    icon: "english_icon_url",
  },
  {
    id: 4,
    title: "Bangla Language",
    description:
      "Bangla language is highly valued at the school and is taught with the same zeal and emphasis as English and Arabic.",
    icon: "bangla_icon_url",
  },
  {
    id: 5,
    title: "Mathematics",
    description:
      "Special Averroes Elementary Section material is used to make Mathematics a fun and an exciting subject. It helps to build concrete base of numeracy which would help these students in future to learn and apply complex mathematical concepts to real-world problems.",
    icon: "mathematics_icon_url",
  },
  {
    id: 6,
    title: "Islamic Studies",
    description:
      "The curriculum focuses on spiritual uplifting alongside physical and mental grooming, emphasizing Tarbiyah and activity-based methodology.",
    icon: "islamic_studies_icon_url",
  },
  {
    id: 7,
    title: "Cultural Studies",
    description:
      "Cultural Studies involve selected topics from Geography, History, Botany, Zoology, Science and Social Studies. Exploring 2D and 3D Art stimulates creativity and broadens the mind. Painting, cutting and sticking, drawing, making patterns with symmetry and recycling are all fun ways to learn art and craft.",
    icon: "cultural_studies_icon_url",
  },
  {
    id: 8,
    title: "Sensorial Exercises",
    description:
      "Exercises for Practical Life help make our students more independent and confident, while the Sensorial exercises sharpen and enhance the mental development of students. These activities help train the children to take care of themselves and their environment. Regular Sports activities help keep our students physically fit and mentally healthy.",
    icon: "sensorial_exercises_icon_url",
  },
  {
    id: 9,
    title: "Art",
    description:
      "Exploring Art stimulates creativity and broadens the mind. Painting, cutting and sticking, drawing, making patterns with symmetry and recycling are all fun ways to learn art and craft.",
    icon: "art_icon_url",
  },
  {
    id: 10,
    title: "Assessment",
    description:
      "The students’ progress is closely monitored by assistant teachers, class teachers, subject teachers, level coordinators and the Section Head. Daily behaviour reports help in the identification of areas of concern, whether it is academic or otherwise and aid in planning to overcome them. Remedial programs are carried out for those students who require special attention in certain academic areas. If required, problems are discussed with parents so that they can also play a positive role in helping their child cope. Report cards prepared on the basis of regular ongoing assessment are sent to the parents at the end of each term.",
    icon: "assessment_icon_url",
  },
  {
    id: 11,
    title: "Training",
    description:
      "We at Averroes pay special attention to the training and development of our staff. Every year we plan and conduct an Annual Training session for our teachers to share with them the new discoveries and latest practices in the field of education. We keep the parents involved through multiple workshops conducted to guide and enable them to teach and train their children hence resonating the positive impact of the School.",
    icon: "training_icon_url",
  },
  {
    id: 12,
    title: "A Day at Averroes",
    description: [
      "Smile & Salam: Greeting every student, each morning with a smile and greeting of peace – ‘Assalamu alaikum WRT’.",
      "Morning Assembly: Providing an energetic start to the day, students gather for the morning assembly where every child is given the opportunity to participate.",
      "Circle Time: A recount of previous learning, moral themes and class rules.",
      "Arabic Class: Taught in a manner that students can grasp it easily and converse fluently.",
      "Sports: Guided by a trained teacher, students excel in various games and exercises.",
      "Tiffin / Lunch Time: Washing hands, setting the table, and saying ‘Bismillah’ before enjoying snacks.",
      "Material Time: Opportunity to unleash potential by working with Averroes Elementary Section material.",
      "After School Facility: Purposeful time with interesting activities, snacks, or a short nap.",
      "Departure Time: Exceptionally organized with a pick-up card system for security.",
    ],
    icon: "day_at_averroes_icon_url",
  },
];

export const upcomingEvents = [
  {
    id: 1,
    title: "INTERNATIONAL MOTHER LANGUAGE DAY – SCHOOL CLOSURE",
    date: "21 FEB",
    time: "10:30 am - 12:00 pm",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 2,
    title: "EKUSHEY CHITRANKON ONUSHTHAN – MS",
    date: "20 FEB",
    time: "9:00 am - 12:30 pm",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 3,
    title: "EKUSHEY CHITRANKON ONUSHTHAN – JS",
    date: "19 FEB",
    time: "9:00 am - 12:00 pm",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 4,
    title: "PARENT PRINCIPAL MEETING – JS",
    date: "10 FEB",
    time: "10:00 am - 12:00 pm",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 5,
    title: "ANNUAL SPELLING BEE",
    date: "07 FEB",
    time: "8:30 am - 12:00 pm",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
  {
    id: 6,
    title: "GIS ANNUAL SPORTS 2023-2024",
    date: "25 JAN",
    time: "8:00 am - 12:00pm",
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
  },
];

export const gallery = [
  {
    id: 1,
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
    eventName: "Event 1",
  },
  {
    id: 2,
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
    eventName: "Event 2",
  },
  {
    id: 3,
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
    eventName: "Event 3",
  },
  {
    id: 4,
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
    eventName: "Event 4",
  },
  {
    id: 5,
    imageUrl:
      "https://i.ibb.co/z6rwWC3/ifshad-51-Theme-Combine-elements-that-represent-artificial-inte-6974a0f7-87cd-450d-87dd-446c870189e6.png",
    eventName: "Event 5",
  },
];

export const classInfo = [
  { class: "Playgroup", ageRange: "3+ to below 4" },
  { class: "Nursery", ageRange: "4+ to below 5" },
  { class: "Pre KG", ageRange: "5+ to below 6" },
  { class: "KG", ageRange: "6+ to below 7" },
  { class: "Grade 1", ageRange: "7+ to below 8" },
  { class: "Grade 2", ageRange: "8+ to below 9" },
  { class: "Grade 3", ageRange: "9+ to below 10" },
  { class: "Grade 4", ageRange: "10+ to below 11" },
  { class: "Grade 5", ageRange: "11+ to below 12" },
  { class: "Grade 6", ageRange: "12+ to below 13" },
  { class: "Grade 7", ageRange: "13+ to below 14" },
  { class: "Grade 8", ageRange: "14+ to below 15" },
  { class: "Grade 9", ageRange: "15+ to below 16" },
  { class: "Grade 10", ageRange: "16+ to below 17" },
  { class: "Grade 11", ageRange: "17+ to below 18" },
  { class: "Grade 12", ageRange: "18+ to below 19" },
];

export const admissionSteps = [
  { id: 1, description: "Issuance of Prospectus" },
  {
    id: 2,
    description:
      "Parent to meet admission office to get details of admission procedure, fee schedule etc. After approval of MD & CEO/Principal/Vice Principal, parents can obtain the prescribed admission form from the Principal’s Office at a particular cost.",
  },
  {
    id: 3,
    description: "Oral Interaction (with parents and student): Pre-Primary",
  },
  { id: 4, description: "Written test for KG-I to Class VIII." },
  {
    id: 5,
    description: "Admission orders – An SMS of admission given to the parents",
  },
  {
    id: 6,
    description:
      "Fees to be deposited in the Accounts Department or in mentioned Bank",
  },
  {
    id: 7,
    description:
      "Parent has to fill up the required details to complete the admission form and submit the form. Recent passport size photograph of student & parent, a copy of child’s birth certificate, recent report cards photocopy must be submitted along with admission form to the Admission Office.",
  },
  {
    id: 8,
    description:
      "Admission Office will accept admission applications within a deadline (or on a seat-available basis).",
  },
  {
    id: 9,
    description:
      "Uniform, books, stationery etc. to be arranged, by the parents according to the given instructions.",
  },
  {
    id: 10,
    description: "Join AIS orientation & be a proud member of AIS Family.",
  },
];

export const howToApply = [
  {
    id: 1,
    title: "Fillup Admission Form",
    description: [
      "Admission Form for every applicant requires to be collected to begin the Admission process.",
      "Admission Form can be collected on payment of an application fee of BDT 500 (BDT Five Hundred Only) from Admissions Office directly or you may apply online.",
    ],
  },
  {
    id: 2,
    title: "Submit The Form",
    description: [
      "Applicant should fill in the admission form completely, leaving no fields blank on the form.",
      "The completed Admission Form is to be submitted to the Admissions Office or directly Online.",
      "Please attach all required documents with completed Admission Form.",
    ],
  },
  {
    id: 3,
    title: "Admission Assessment",
    description: [
      "An Admission Assessment will be conducted for all applicants on receiving complete Admission applications.",
      "Assessments will be Oral for Playgroup and Nursery.",
      "Assessments may be Oral and/or Written for all Admission applicants.",
      "Assessments may be conducted in Admissions Office in person or via Online Assessment System, which may be live, or through Video Conferencing.",
    ],
  },
  {
    id: 4,
    title: "Assessment Result & Gather Necessary Documents",
    description: [
      "If Admission Assessment results are positive, based on Oral and Written processes, applicant will be informed and requested to complete Admission Process.",
      "Remaining documentation submissions must be completed at this point.",
    ],
  },
  {
    id: 5,
    title: "Payment Process",
    description: [
      "Admission Fees can be paid via multiple modes of payment such as:",
      "- Online Payment Gateway",
      "- Online Banking",
      "- bKash",
      "- Cash transactions at the Admissions Office",
    ],
  },
  {
    id: 6,
    title: "Admission",
    description: [
      "Admissions will be confirmed based on seat capacity and availability.",
      "School decisions regarding Admissions will be deemed final.",
      "Admission process should be completed within 10 working days of receiving Admission Confirmation.",
    ],
  },
];
