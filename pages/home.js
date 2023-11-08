import React from 'react'
import Layout from './components/layout.js'

const home = () => {
  return (
    <Layout>
    <div id="homepage-main">
                <div className="homepage-container">
                <p className="desc">
                Welcome to my portfolio website! I&apos;m Burhan, the Co-Founder and CEO of WebMetric, a software development agency specializing in project management and software delivery. With a strong foundation in software engineering principles and best practices, I lead our team in delivering high-quality, maintainable, and scalable projects.

                </p>
                <p className="desc">
                As the head of WebMetric, my role is to ensure that your software development initiatives are executed flawlessly. Whether it&apos;s managing project timelines, resources, or overseeing the development process, I&apos;m dedicated to making your projects a success. Feel free to explore my portfolio to see examples of my successful project deliveries.
                </p>
                <div className="homepage-icon">
                    <img src="/home-icon.svg" alt="" />
                </div>
                </div>
               
            </div>
            // </Layout>
  )
}

export default home
