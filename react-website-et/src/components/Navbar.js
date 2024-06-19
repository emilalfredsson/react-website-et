import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);

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

    const onMouseEnter = () => {
        if (window.innerWidth >= 960) {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth >= 960) {
            setDropdown(false);
        }
    };

    useEffect(() => {
        showButton();
        const handleResize = () => {
            if (window.innerWidth > 960) {
                setClick(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={handleLinkClick}>
                                Heim
                            </Link>
                        </li>
                        <li
                            className='nav-item'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <Link to='/safety' className='nav-links' onClick={handleLinkClick}>
                                Þjónusta
                            </Link>
                            {dropdown && (
                                <ul className='dropdown-menu'>
                                    <li>
                                        <Link to='/vegmerkingar' className='dropdown-link' onClick={handleLinkClick}>
                                            Bílastæða- og vegmerkingar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/vegleidarar' className='dropdown-link' onClick={handleLinkClick}>
                                            Vegleiðarar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/stodvunardreglar' className='dropdown-link' onClick={handleLinkClick}>
                                            Stöðvunar Dreglar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/gangbrautarkerfi' className='dropdown-link' onClick={handleLinkClick}>
                                            Gangbrautarkerfi
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        {click && (
                            <>
                                <li className='nav-item'>
                                    <Link to='/vegmerkingar' className='nav-links' onClick={handleLinkClick}>
                                        Bílastæða- og vegmerkingar
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/vegleidarar' className='nav-links' onClick={handleLinkClick}>
                                        Vegleiðarar
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/stodvunardreglar' className='nav-links' onClick={handleLinkClick}>
                                        Stöðvunar Dreglar
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/gangbrautarkerfi' className='nav-links' onClick={handleLinkClick}>
                                        Gangbrautarkerfi
                                    </Link>
                                </li>
                            </>
                        )}
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links-mobile' onClick={handleLinkClick}>
                                Hafa Samband
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Hafa Samband</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
