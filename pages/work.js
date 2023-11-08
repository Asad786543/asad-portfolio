import React from 'react'
import projectsData from '../assets/burhan-ws-data_v0.2.json'
import Link from 'next/link'
import Layout from './components/layout.js'

const work = () => {
    
  return (
    <Layout>
    <div id="work-main">
    <div className="heading"><p>Work</p></div>

        <div className="work-container">
        {Object.values(projectsData).map((project) => (

                <Link href={`/${project._id}`} key={project._id} passHref >
                <div> 
                {project.title}
            </div >
            </Link>
           ) )}
            
           
           
        </div>
       
    </div>
    </Layout>
  )
}

export default work
