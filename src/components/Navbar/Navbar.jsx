/** @format */

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<Link className='navbar-logo' to='/'>
					Mubasshir Ahmed
				</Link>

				<div className='navbar-toggle' onClick={() => setIsOpen(!isOpen)}>
					☰
				</div>

				<ul className={`navbar-links ${isOpen ? "active" : ""}`}>
					<li>
						{/* <a href='#experience'>Experience</a> */}
						<Link
							className='navbar-logo'
							to='/experience'
							onClick={() => setIsOpen(false)}>
							Experience
						</Link>
					</li>
					<li>
						<Link
							className='navbar-logo'
							to='/publications'
							onClick={() => setIsOpen(false)}>
							Publications
						</Link>
					</li>
					<li>
						<Link
							className='navbar-logo'
							to='/projects'
							onClick={() => setIsOpen(false)}>
							Projects
						</Link>
					</li>
					<li>
						<Link
							className='navbar-logo'
							to='/skills'
							onClick={() => setIsOpen(false)}>
							Skills
						</Link>
					</li>
					<li>
						<Link
							className='navbar-logo'
							to='/awards'
							onClick={() => setIsOpen(false)}>
							Awards
						</Link>
					</li>
					<li>
						<Link
							className='navbar-logo'
							to='/cv'
							onClick={() => setIsOpen(false)}>
							CV
						</Link>
					</li>
					{/* <li>
						<Link
							className='navbar-logo'
							to='/moments'
							onClick={() => setIsOpen(false)}>
							Moments
						</Link>
					</li> */}
					<li>
						<Link
							className='navbar-logo'
							to='/contact'
							onClick={() => setIsOpen(false)}>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
