import React, { useState } from 'react'
import "./Navbar.css"
const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)
  return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<div className='navbar-logo'>Mubasshir Ahmed</div>

				<div className='navbar-toggle' onClick={() => setIsOpen(!isOpen)}>
					☰
				</div>

				<ul className={`navbar-links ${isOpen ? "active" : ""}`}>
					<li>
						<a href='#experience'>Experience</a>
					</li>
					<li>
						<a href='#publications'>Publications</a>
					</li>
					<li>
						<a href='#projects'>Projects</a>
					</li>
					<li>
						<a href='#skills'>Skills</a>
					</li>
					<li>
						<a href='#awards'>Awards</a>
					</li>
					<li>
						<a href='#cv'>CV</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar