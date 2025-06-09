import React from 'react'
import Sidebar from '../Navbar/Sidebar';
import CVs from './CVs';
import './CVs.css'
const CvsContainer = () => {
  return (
		<div className='main-bar'>
			<div className='main-container'>
				<Sidebar />
				<CVs />
			</div>
		</div>
	);
}

export default CvsContainer