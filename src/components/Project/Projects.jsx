import React from 'react'
import { projectData } from './data';

const Projects = () => {
  return (
		<section className='projects-page'>
			<h2>Projects</h2>
			<div className='project-grid'>
				{projectData.map((project, i) => (
					<div key={i} className='project-card'>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<div className='tech-tags'>
							{project.tech.map((t, j) => (
								<span key={j} className='tag'>
									{t}
								</span>
							))}
						</div>
						<div className='project-links'>
							{project.links.demo && (
								<a href={project.links.demo} target='_blank' rel='noreferrer'>
									Live Demo
								</a>
							)}
							{project.links.github && (
								<a href={project.links.github} target='_blank' rel='noreferrer'>
									GitHub
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Projects