import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../components/Home'
import Contact from '../../components/Contact'
import NavScrollExample from '../../components/Navbar'
import Projects from '../../components/Projects'
import About from '../../components/About'

const RouterConfig = () => {
    return (
        <>
            <BrowserRouter>
            <NavScrollExample/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='projects' element={<Projects />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}

export default RouterConfig