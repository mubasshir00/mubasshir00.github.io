import React from 'react'
import Sidebar from './Sidebar';
import HomeContent from './HomeContent';
import './MainContainer.css'

const MainContainer = () => {
  return (
		<div className='main-bar'>
			<div className='main-container'>
				<Sidebar />
				<HomeContent />
			</div>
		</div>
	);
}

export default MainContainer