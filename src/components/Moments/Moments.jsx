/** @format */

import React from "react";
import images from "./data.json"; // adjust if needed
import "./Moment.css";

const Gallery = () => (
	<div className='gallery-page'>
		<h2>Gallery</h2>
		<div className='gallery-grid'>
			{images.map((img, index) => (
				<div className='gallery-item' key={index}>
					<p className='caption'>{img.caption}</p>
					<iframe
						src={img.src}
						width='100%'
						height='480'
						allow='autoplay'></iframe>
				</div>
			))}
		</div>
	</div>
);

export default Gallery;
