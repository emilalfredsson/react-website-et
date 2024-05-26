import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
    };

    const handleLinkClick = () => {
        closeMobileMenu();
        scrollToTop();
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick = {handleLinkClick}>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className ='nav-item'>
                        <Link to = '/' className='nav-links' onClick = {handleLinkClick}>
                            Heim
                        </Link>
                    </li>
                    <li className ='nav-item'>
                        <Link to = '/safety' className='nav-links' onClick = {handleLinkClick}>
                            Þjónusta
                        </Link>
                    </li>
                    <li className ='nav-item'>
                        <Link to = '/contact' className='nav-links-mobile' onClick = {handleLinkClick}>
                            Hafa Samband
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Hafa Samband</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar
