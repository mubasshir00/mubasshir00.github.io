/** @format */

import React from "react";
import './Sidebar.css'

const Sidebar = () => {
	return (
		<aside className='sidebar'>
			<img
				className='avatar'
				src='/Mubasshir.jpg'
				alt='Mubasshir Ahmed'
			/>
			<h3>Mubasshir Ahmed</h3>
			<p>Software Engineer | Researcher</p>

			<ul className='sidebar-links'>
				<li>📍 Sydney , NSW , Australia</li>
				<li>🎓 North South University</li>
				<li>📧 mubasshirahmed66@gmail.com</li>
				<li>
					🔗{" "}
					<a
						href='https://scholar.google.com/citations?hl=en&user=5fyMOVoAAAAJ'
						target='_blank'>
						Google Scholar
					</a>
				</li>
				<li>
					📄{" "}
					<a
						href='https://www.linkedin.com/in/mubasshir-ahmed-696378137/'
						target='_blank'>
						LinkedIn
					</a>
				</li>
				<li>
					🐙{" "}
					<a href='https://github.com/mubasshir00' target='_blank'>
						GitHub
					</a>
				</li>
				<li>
					🧪{" "}
					<a href='https://gitlab.com/mubasshir00' target='_blank'>
						GitLab
					</a>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
