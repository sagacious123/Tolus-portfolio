import React from 'react'
import { Banner } from '../components/Banner'
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';

const Home = () => {

    const pageVariants = {
        initial: {
          opacity: 0,
          x: "100vw",
          scale: 0.8,
          width: "100vw"
        },
        in: {
          opacity: 1,
          x: 0,
          scale: 1
        },
        out: {
          opacity: 0,
          x: "-100vw",
          scale: 1.2
        }
      };
      
      const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
      };
      
      const pageStyle = {
        position: "absolute"
      };

  return (
    <motion.div 
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        
    >
      <Banner />
      {/* <div className='blackbox'>
        <h3>Joseph Bajegbo</h3>
      </div> */}
    </motion.div>
  )
}

export default Home
