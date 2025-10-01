import React, { useState } from 'react'
import './Contact.css'
const Contact = () => {
  return (
		<section className='contact-only'>
			<h2>Contact Me</h2>
			<p>
				If you’d like to connect, feel free to reach out using the info below.
			</p>

			<ul className='contact-details'>
				<li>
					<strong>Email:</strong>{" "}
					<a href='mailto:mubasshirahmed66@gmail.com'>
						mubasshirahmed66@gmail.com
					</a>
				</li>
				<li>
					<strong>Phone:</strong> +61493358087
				</li>
				<li>
					<strong>LinkedIn:</strong>{" "}
					<a
						href='https://www.linkedin.com/in/mubasshir-ahmed-696378137/'
						target='_blank'
						rel='noopener noreferrer'>
						linkedin.com/in/mubasshir-ahmed
					</a>
				</li>
				<li>
					<strong>GitHub:</strong>{" "}
					<a
						href='https://github.com/mubasshir00'
						target='_blank'
						rel='noopener noreferrer'>
						github.com/mubasshir00
					</a>
				</li>
				<li>
					<strong>GitLab:</strong>{" "}
					<a
						href='https://gitlab.com/mubasshir00'
						target='_blank'
						rel='noopener noreferrer'>
						gitlab.com/mubasshir00
					</a>
				</li>
				<li>
					<strong>Location:</strong> Sydney , NSW , Australia
				</li>
			</ul>
		</section>
	);
}

export default Contact