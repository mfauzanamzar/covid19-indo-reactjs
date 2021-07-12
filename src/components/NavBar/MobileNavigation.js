import React, { useState} from 'react';
import logo from '../../pictures/kkn.png'
import logoF from '../../pictures/Fauzan.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiCloseFill} from 'react-icons/ri'


const MobileNavigation = () => {
const [open, setOpen] = useState(false)

const hamburgerIcon = <GiHamburgerMenu font-size="20px"
onClick={() => setOpen(!open)}
/>

const closeIcon = <RiCloseFill font-size="20px"
onClick={() => setOpen(!open)}/>

    return (
        <div className="container">
            <div className="mobileNavbar">
                <div className="left-text"><a href='/'><img src={logoF} alt="logo"/></a></div>
                <div className="center-text"><img src={logo} alt="logo-kmb"/></div>
                <div className="right-text">
                {open ? closeIcon : hamburgerIcon}

                   
                </div>
            </div>
            
            {open && (<div className="listMenu"> <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                    </div>)}
        </div>
    )
}

export default MobileNavigation
