import React from 'react'
import Sidebar from '../Navbar/Sidebar';
import Publications from './Publications';
import "./Publications.css"; 
const PublicationContainer = () => {
  return (
		<div className='main-bar'>
			<div className='main-container'>
				<Sidebar />
                <Publications/>
			</div>
		</div>
	);
}

export default PublicationContainer