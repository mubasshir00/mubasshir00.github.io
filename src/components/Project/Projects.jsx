/** @format */

import React from "react";
import { projectData } from "./data";

const Projects = () => {
	return (
		<section className='projects-page'>
			<h2>Projects</h2>
			<div className='project-grid'>
				{projectData.map((project, idx) => (
					<div key={idx} className='project-card'>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<div className='tech-tags'>
							{project.tech.map((tag, i) => (
								<span key={i} className='tag'>
									{tag}
								</span>
							))}
						</div>
						<div className='project-links'>
							{project.links?.live && (
								<a href={project.links.live} target='_blank' rel='noreferrer'>
									Live
								</a>
							)}
							{project.links?.details && (
								<a
									href={project.links.details}
									target='_blank'
									rel='noreferrer'>
									Details / Code
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
