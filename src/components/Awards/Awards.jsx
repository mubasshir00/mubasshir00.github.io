import React from 'react'
import { awards } from './data';

const Awards = () => {
  return (
		<div className='award'>
			<h2>Awards & Recognition</h2>
			<div className='awards-grid'>
				{awards.map((award, idx) => (
					<div key={idx} className='award-card'>
						<img src={award.image} alt={award.title} />
						<div className='award-info'>
							<h3>{award.title}</h3>
							<p className='description'>{award.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Awards