import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import './App.css'

function NavScrollExample() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    const navigate = useNavigate();

    function gotoContact() {
        console.log('contact clicked');
        return navigate('/contact');
    }
    function gotoHome() {
        console.log('Home clicked');
        return navigate('/');
    }
    function gotoProjects() {
        console.log('Projects clicked');
        return navigate('/projects');
    }
    function gotoAbout() {
        console.log('About clicked');
        return navigate('/about');
    }

    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`your-navbar-class flex justify-between items-center text-center h-auto z-200 text-2xl leading-10 px-14 py-9 w-full top-0 left-0 nav-font  ${isMobileMenuOpen ? 'bg-emerald-200 text-black' : ''} ${scrolling ? 'bg-emerald-200 text-black' : ''
                }`} >
                <h3 className='hover:text-emerald-400 cursor-pointer' onClick={() => scroll.scrollToTop({ smooth: true })} duration={200} spy={true} offset={20}>Tahir.dev</h3>

                <ul className="gap-4 flex justify-between items-center text-center ">
                    <li className="hidden lg:block cursor-pointer hover:text-emerald-400" onClick={() => { toggleMobileMenu(); gotoHome(); }}>Home</li>
                    <li className="hidden lg:block cursor-pointer hover:text-emerald-400" onClick={() => { toggleMobileMenu(); gotoAbout(); }}>About</li>
                    <li className="hidden lg:block cursor-pointer hover:text-emerald-400" onClick={() => { toggleMobileMenu(); gotoProjects(); }}>Projects</li>
                    <li className="hidden lg:block cursor-pointer hover:text-emerald-400" onClick={() => { toggleMobileMenu(); gotoContact(); }}>Contact</li>
                    <li className="lg:hidden" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-x">
                                <path d="M18 6l-12 12"></path>
                                <path d="M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-menu">
                                <path d="M4 6l16 0"></path>
                                <path d="M4 12l16 0"></path>
                                <path d="M4 18l16 0"></path>
                            </svg>
                        )}

                    </li>
                </ul>
            </nav>

            <div className={`mobile-nav ${isMobileMenuOpen ? 'open-menu' : 'closed-menu'}`}>
                <span onClick={toggleMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-x">
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                    </svg>
                </span>
                <ul>
                    <li onClick={() => { toggleMobileMenu(); gotoHome(); }}>Home</li>
                    <li onClick={() => { toggleMobileMenu(); gotoAbout(); }}>About</li>
                    <li onClick={() => { toggleMobileMenu(); gotoProjects(); }}>Projects</li>
                    <li onClick={() => { toggleMobileMenu(); gotoContact(); }}>Contact</li>
                </ul>
            </div>
        </>
    );
}

export default NavScrollExample;
