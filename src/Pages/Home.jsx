
import Hero from '../Component/Hero'
import AboutMe from '../Component/AboutMe'
import SkillEdutcation from '../Component/SkillEdutcation'
import Project from '../Component/Project'
import Contact from '../Component/Contact'
import { contactData } from '../constant'

const Home = () => {
    return (
        <div >
            <Hero />
            <AboutMe />
            <SkillEdutcation />
            <Project />
            <Contact data={contactData} />
        </div>
    )
}

export default Home
