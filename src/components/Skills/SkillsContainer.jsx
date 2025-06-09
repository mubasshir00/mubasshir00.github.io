import React from 'react'
import Sidebar from '../Navbar/Sidebar';
import Skills from './Skills';
import './Skills.css'
const SkillsContainer = () => {
  return (
		<div className='main-bar'>
			<div className='main-container'>
				<Sidebar />
				<Skills />
			</div>
		</div>
	);
}

export default SkillsContainer