import React, { useState } from 'react'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ThemeContext from './ThemeContext'

const ContextProvider = () => {
    const dark = { backgroundColor: "#141111", color: "white" }
    const light = { backgroundColor: "rgb(237 200 130)", color: "#691111" }
    const [theme, setTheme] = useState(light)
    const handleTheme = () => {

        theme.color === "white" ? setTheme(light) : setTheme(dark)
    }
    return (
        <ThemeContext.Provider value={{ currentTheme: theme, changeTheme: handleTheme }}>
            <Navbar />
            <Body />
            <Footer />
        </ThemeContext.Provider>
    )
}

export default ContextProvider
