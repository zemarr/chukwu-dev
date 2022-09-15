import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/Profile'
import Showcase from '../views/Showcase'
import Work from '../views/Work'

import { AnimatePresence } from 'framer-motion'
// import {} from 'framer-motion/dist/framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/showcase" element={<Showcase />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes