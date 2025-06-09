import React from 'react'
import Sidebar from '../Navbar/Sidebar';
import Awards from './Awards';
import './Awards.css'
const AwardsContainer = () => {
  return (
		<div className='main-bar'>
			<div className='main-container'>
				<Sidebar />
				<Awards />
			</div>
		</div>
	);
}

export default AwardsContainer