import { useState } from 'react'
import { navLink } from '../constant'
import { NavLink } from 'react-router-dom'
import { FiAlignJustify } from 'react-icons/fi'
import { AiOutlineCodeSandbox } from 'react-icons/ai'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className=''>
            <nav className='h-28 flex sticky  justify-between  items-center  font-OpenSans  text-primary  '>

                <NavLink to='/' className='text-xl font-bold hover:text-primary-100 flex justify-center items-center gap-3 '><AiOutlineCodeSandbox />CHIN KONGMING</NavLink>
                <div className='lg:flex gap-28 hidden '>
                    {navLink.map((element, index) => (
                        <NavLink to={element} key={index} className='text-lg hover:text-primary-100' >{element}</NavLink>
                    ))}
                </div>
                <div className='text-2xl mr-10 lg:hidden' onClick={() => setToggle(!toggle)}><FiAlignJustify /></div>
                <div className={`fixed inset-0 z-40 flex flex-col bg-gray-800 bg-opacity-50 lg:hidden transition-transform transform ${toggle ? "translate-x-0" : "-translate-x-full"}`}
                    onClick={() => setToggle(false)}
                >
                    <div className='w-64 h-full shadow-lg bg-subPrimary' >
                        hi
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
