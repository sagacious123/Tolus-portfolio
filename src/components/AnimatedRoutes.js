import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import About from '../Pages/About';
import Contact from "../Pages/Contact";
import { AnimatePresence } from "framer-motion"


const AnimatedRoutes = () => {
    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
