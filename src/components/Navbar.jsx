import React, { useState } from 'react';

function NavScrollExample() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <nav className="your-navbar-class flex justify-between items-center text-center h-auto z-200 text-xl px-10 py-7 w-full top-0 left-0 font-semibold hover:text-red-900 ">
                <h3>Tahir.dev</h3>
                <ul className="gap-4 flex justify-between items-center text-center font-semibold">
                    <li className="hidden lg:block hover:text-cyan-400"><a href="#">Home</a></li>
                    <li className="hidden lg:block hover:text-cyan-400"><a href="#">Projects</a></li>
                    <li className="hidden lg:block hover:text-cyan-400"><a href="#">Contact</a></li>
                    <li className="hidden lg:block hover:text-cyan-400"><a href="#">About</a></li>
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
                    <li><a href="#about">Projects</a></li>
                    <li><a href="#projects">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
    );
}

export default NavScrollExample;