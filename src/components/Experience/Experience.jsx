import React from 'react'
import { experiences } from './data';
import './Experience.css'
const Experience = () => {
  return (
		<div className='experience'>
			<h2>Experience</h2>
			{experiences.map((exp, idx) => (
				<div key={idx} className='experience-entry'>
					<h3>{exp.role}</h3>
					<p className='company'>
						<strong>{exp.company}</strong> &mdash; <span>{exp.duration}</span>
					</p>
					<ul>
						{exp.description.map((point, i) => (
							<li key={i}>{point}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

export default Experience