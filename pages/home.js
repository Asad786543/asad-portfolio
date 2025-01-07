import React from 'react'
import Layout from './components/layout.js'

const home = () => {
  return (
    <Layout>
            <div id="homepage-main">
              <div className="homepage-container">
                <p className="desc">
					  Welcome to my portfolio! I'm Syed Burhan, CTO of <a href="https://www.web-metric.co/" target='_blank'>WebMetric</a>. With over 5 years of experience, I've worked on high-quality SaaS and AI web apps, specializing in both development and product design.

                </p>
                <p className="desc">
					  Now, as the founder of <a href="https://www.web-metric.co/" target='_blank'>WebMetric</a>, I lead a team delivering top-tier solutions and ensuring client satisfaction every step of the way. Check out the <a href="/about">About</a> page to learn more about me or visit the <a href="/work" >Work</a> page to explore my projects.
                </p>
                <div className="homepage-icon">
                    <img src="/home-icon.svg" alt="" />
                </div>
                </div>   
            </div>
    </Layout>
  )
}

export default home
