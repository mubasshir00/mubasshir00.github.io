import React from 'react'
import "./CVs.css";

const CVs = () => {
  return (
		<div className='cv'>
			<h2>My CV</h2>
			{/* Inline PDF Viewer */}
			<div className='cv-iframe-container'>
				<iframe
					src='/CV/Mubasshir_Ahmed.pdf'
					title='Mubasshir Ahmed CV'
					width='100%'
					height='700px'
					frameBorder='0'
				/>
			</div>

			{/* Download Button */}
			<div className='cv-button-wrapper'>
				<a
					href='/CV/Mubasshir_Ahmed.pdf'
					download
					target='_blank'
					rel='noopener noreferrer'
					className='cv-download-btn'>
					📄 Download CV (PDF)
				</a>
			</div>
		</div>
	);
}

export default CVs