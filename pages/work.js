import React from 'react'
import projectsData from '../assets/asad-ws-data_v0.2.json'
import Link from 'next/link'
import Layout from './components/layout.js'
import { motion } from 'framer-motion'

const Work = () => {

    // Function to open external link when "project-year" is clicked
  const handleYearClick = (e, url) => {
    e.preventDefault(); // Prevents default action
    e.stopPropagation(); // Prevents card navigation
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer"); // Opens URL in a new tab
    }
  };

  return (
    <Layout>
      <div id="work-main">
        <div className="heading"><p>Work</p></div>
        <div className="work-container">
          {Object.values(projectsData).map((project, index) => (
            <motion.div
              key={project._id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/${project._id}`}>
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                   {/* Use span and prevent Link navigation when clicked */}
                   <span
                      className="project-year"
                      onClick={(e) => handleYearClick(e, project.url)}
                      style={{ 
                        cursor: project.url ? "pointer" : "default", 
                        textDecoration: project.url ? "underline" : "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px" // Adds spacing between year and SVG
                      }}
                    >
                      {project.year}
                      {project.url && (
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.125 7.99375L6.74375 1.375H2.625V0.125H8.875V6.375H7.625V2.25625L1.00625 8.875L0.125 7.99375Z" fill="#9D7E52"/>
                        </svg>
                      )}
                    </span>
                  </div>
            
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Work
