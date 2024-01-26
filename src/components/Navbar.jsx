import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function NavScrollExample() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    const navigate = useNavigate()

    function gotoContact() {
        console.log('contact clicked');
        return navigate('/contact')
    }
    function gotoHome() {
        console.log('Home clicked');
        return navigate('/')
    }
    function gotoProjects() {
        console.log('Projects clicked');
        return navigate('/projects')
    }
    function gotoAbout() {
        console.log('About clicked');
        return navigate('/about')
    }
    return (
        <>
            <nav className="your-navbar-class flex justify-between items-center text-center h-auto z-200 text-2xl leading-10 px-14 py-9 w-full top-0 left-0 nav-font">
                <h3 className='hover:text-emerald-400 cursor-pointer' onClick={() => scroll.scrollToTop({ smooth: true })} duration={200} spy={true} offset={20} >Tahir.dev</h3>
                <ul className="gap-4 flex justify-between items-center text-center ">
                    <li className="hidden lg:block hover:text-lime-600" onClick={gotoHome}>Home</li>
                    <li className="hidden lg:block hover:text-lime-400" onClick={gotoAbout}>About</li>
                    <li className="hidden lg:block hover:text-lime-300" onClick={gotoProjects}>Projects</li>
                    <li className="hidden lg:block hover:text-lime-300" onClick={gotoContact}>Contact</li>
                    <li className="lg:hidden" onClick={toggleMobileMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mobile-menu">
                            <path d="M4 6l16 0"></path>
                            <path d="M4 12l16 0"></path>
                            <path d="M4 18l16 0"></path>
                        </svg>
                    </li>
                </ul>
            </nav>

            <div className={`mobile-nav ${isMobileMenuOpen ? '' : 'closed-menu'}`}>
                <span onClick={toggleMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-x">
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                    </svg>
                </span>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">About</a></li>
                    <li><a href="#about">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
    );
}

export default NavScrollExample;