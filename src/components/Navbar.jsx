import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs';

const Navbar = () => {
    const { currentTheme, changeTheme } = useContext(ThemeContext)

    return (
        <nav className='Navbar' style={currentTheme}>
            <h1>
                Theme Changer
            </h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Help</li>
            </ul>
            <div className='btn' onClick={() => changeTheme()}>
                {
                    currentTheme.color === "white" ? <BsFillMoonFill /> : <BsSunFill />
                }
            </div>
        </nav>

    )
}

export default Navbar
