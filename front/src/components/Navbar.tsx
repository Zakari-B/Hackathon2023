import React from 'react'
import logo from "@assets/plage.png"

const Navbar = () => {
    return (
        <nav>
            <img className="logo" src={logo} alt="Palm tree logo" />
            <p>Valise maker</p>
        </nav>
    )
}

export default Navbar