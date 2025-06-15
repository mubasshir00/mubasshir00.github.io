/** @format */

import React from "react";
import Sidebar from "../Navbar/Sidebar";
import Projects from "./Projects";
import "./Project.css"; 

const ProjectContainer = () => {
	return (
		<div className='main-bar'>
			<div className='main-container'>
                {/* <Sidebar/> */}
                <Projects/>
            </div>
		</div>
	);
};

export default ProjectContainer;
