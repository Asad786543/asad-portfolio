"use client";
import Header from './Header'
import Image from 'next/image';
import { motion  } from "framer-motion";
const layout = ({ children }) => {
  return (
    <div id='app-main'
   
    >
      <Header />

      <div  className="app-container"
     
       
         >

        <motion.main
             initial={{
              opacity: 0.6,
              // scaleY: 0, // Start with zero height (top to bottom expansion)
              translateX: '-100%', // Start from the top
            }}
            animate={{
              opacity: 1,
              // scaleY: 1, // Expand to full height (top to bottom expansion)
              translateX: 0, // Expand from the top
            }}
            transition={{ duration: 0.6, type: 'spring', damping: 8, stiffness: 30 }}
        >{children}</motion.main>
        <motion.div className="section-two"
            initial={{
              opacity: 0.6,
              // scaleY: 0, // Start with zero height (top to bottom expansion)
              translateX: '100%', // Start from the top
            }}
            animate={{
              opacity: 1,
              // scaleY: 1, // Expand to full height (top to bottom expansion)
              translateX: 0, // Expand from the top
            }}
            transition={{ duration: 0.6, type: 'easeIn', damping: 8, stiffness: 30 }}
        >
          <Image 
            placeholder="blur"
            src="/asad-po.webp"
            alt="My Image"
            width={800}
            height={600}
            blurDataURL="/me-blur_11zon"
             />



          <div className="mobile-background">

          </div>
          <p id="expert-text">Creative Coder  <br />
          and Architect</p>
        </motion.div>
      </div>
    </div>
  )
}

export default layout
