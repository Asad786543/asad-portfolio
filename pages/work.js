import React from 'react'
import projectsData from '../assets/asad-ws-data_v0.2.json'
import Link from 'next/link'
import Layout from './components/layout.js'

const work = () => {
	return (
		<Layout>
			<div id="work-main">
				{/* <div className="heading"><p>Work</p></div> */}
				<div className="work-container">
					{Object.values(projectsData).map((project) => (
						<Link href={`/${project._id}`} key={project._id} passHref>
							<div className="project-card">
								<div className="project-content">
									<h3 className="project-title">{project.title}</h3>
									<span className="project-tech">{project.technologies}</span>
								</div>
								<div className="project-number">
									{String(project._id).padStart(2, '0')}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</Layout>
	)
}

export default work
