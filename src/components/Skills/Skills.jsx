import React from 'react'
import { skills } from './data';

const Skills = () => {
  return (
		<div className='skill'>
			<div className='skills-explained'>
				<h2>Skills & What I Did With Them</h2>
				{skills.map((section, idx) => (
					<div className='skill-category' key={idx}>
						<h3>{section.category}</h3>
						<ul>
							{section.items.map((item, i) => (
								<li key={i}>
									<strong>{item.name}:</strong> {item.desc}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills