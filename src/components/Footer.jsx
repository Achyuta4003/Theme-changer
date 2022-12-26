import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Footer = () => {
    const { currentTheme } = useContext(ThemeContext)

    return (
        <div className='Footer' style={currentTheme}>
            Made By Achyuta
        </div>
    )
}

export default Footer
