import { MdCastForEducation } from "react-icons/md"
// import { phoneShop, student } from "../assets"
import { IoPhonePortraitOutline } from "react-icons/io5"

export const navLink = [
    'HOME',
    'ABOUT ME',
    'SERVICE',
    'CONTACT'
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