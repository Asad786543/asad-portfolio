import React from 'react'
import Layout from './components/layout.js'
import Link from 'next/link.js'

const home = () => {
  return (
    <Layout>
            <div id="homepage-main">
              <div className="homepage-container">
                <p className="desc">
					  Welcome to my portfolio! I&apos;m Syed Burhan, CTO of  <Link href={"https://www.web-metric.co/" } target='_blank'>WebMetric</Link>. With over 5 years of experience, I&apos;ve worked on high-quality SaaS and AI web apps, specializing in both development and product design.

                </p>
                <p className="desc">
					  Now, as the Founder of <Link href={"https://www.web-metric.co/" } target='_blank'>WebMetric</Link>, I lead a team delivering top-tier solutions and ensuring client satisfaction every step of the way. Check out the   <Link href={"/about" }>About</Link> page to learn more about me or visit the  <Link href={"/work" }>Work</Link> page to explore my projects.
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
