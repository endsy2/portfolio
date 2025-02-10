import { MdCastForEducation } from "react-icons/md"
// import { phoneShop, student } from "../assets"
import { IoPhonePortraitOutline } from "react-icons/io5"
import { FaFacebook, FaPhone, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaPhoneFlip } from "react-icons/fa6";

export const navLink = [
    'Home',
    'About Me',
    'Service',
    'Contact'
]
export const project = [
    {
        projectName: 'Student Management', img: <MdCastForEducation />, link: 'https://github.com/endsy2/Student_Management_System',
        description: 'In my second year, I developed a desktop application for managing student records using the Java programming language. The user interface was built with Java Swing, and MySQL was used as the database.'
    },
    {
        projectName: 'Phone Shop', img: <IoPhonePortraitOutline />, link: 'https://github.com/endsy2/PhoneShop-website'
        , description: 'In my third year, my three teammates and I built a website with both a user section and an admin section. The user section allows interaction with customers, while       the admin section enables admins to perform CRUD operations for their shop. For this website, I used React JS, Express JS, MySQL, and JWT'
    },
]
export const skillsData = [
    {
        category: "Backend Development",
        skills: ["Express.js, Node.js", "MySQL Database Management", "RESTful API Development"]
    },
    {
        category: "Frontend Development",
        skills: ["React.js", "Tailwind CSS", "Responsive Web Design"]
    },
    {
        category: "Programming Languages",
        skills: ["JavaScript/Node.js", "Java", "SQL"]
    },
    {
        category: "Development Tools",
        skills: ["Version Control (Git)", "Problem Solving", "Database Design"]
    }
];
export const educationData = {
    year: "2022 - PRESENT",
    university: "Royal University of Phnom Penh",
    degree: "Year 3 - Bachelor of Information Technology Engineering",
    location: "Phnom Penh"
};
export const contactData = [
    { img: <FaTelegram />, head: 'Telegram', text: '@kongming16' },
    { img: <CiLinkedin />, head: 'Linkedin', text: 'Kongming' },
    { img: <FaPhoneFlip />, head: 'Phone', text: '081362035' }
]