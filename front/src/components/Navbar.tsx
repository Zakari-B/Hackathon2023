import React from 'react'
import logo from "@assets/plage.png"

const Navbar = () => {
    return (
        <header>
            <nav>
                <div>
                    <img className="logo" src={logo} alt="Palm tree logo" />
                    <p>Valise maker</p>
                </div>
                <div>
                    <p>NavItem1</p>
                    <p>NavItem2</p>
                    <p>NavItem3</p>
                    <p>NavItem4</p>
                </div>
            </nav>
        </header>
    )
}

export default Navbar