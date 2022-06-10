import { motion } from "framer-motion"
import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {FcTodoList} from 'react-icons/fc'

import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <motion.h1
                animate={{ 
                    scale: 1, 
                    opacity: 1,
                }}
                initial={{ 
                    scale: 0, 
                    opacity: 0,
                }}
                transition={{ 
                    ease: "backIn",
                    duration: 2,
                    type: "spring",
                    damping: 10,
                    stiffness: 3000,
                }}
                >
                    <span><FcTodoList />Todo</span>App <br/>by John Bridges</motion.h1>
                               
                <button className='btn'>Sign In</button>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Search</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar