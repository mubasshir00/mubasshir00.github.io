import React from 'react'
import Sidebar from '../Navbar/Sidebar';
import Experience from './Experience';
import "./Experience.css";

const ExperienceContainer = () => {
  return (
		<div className='main-bar'>
			<div className='main-container'>
				<Sidebar />
				<Experience />
			</div>
		</div>
	);
}

export default ExperienceContainer