import Navbar from './components/Navbar/Navbar';
import MainContainer from './components/Navbar/MainContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CVs from './components/CV/CVs';
import Contact from './components/Contacts/Contact';
import ExperienceContainer from './components/Experience/ExperienceContainer';
import PublicationContainer from './components/Publications/PublicationContainer';
import ProjectContainer from './components/Project/ProjectContainer';
import SkillsContainer from './components/Skills/SkillsContainer';
import AwardsContainer from './components/Awards/AwardsContainer';
import CvsContainer from './components/CV/CvsContainer';

function App() {
  return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<MainContainer />} />
				<Route path='/experience' element={<ExperienceContainer />} />
				<Route path='/publications' element={<PublicationContainer />} />
				<Route path='/projects' element={<ProjectContainer />} />
				<Route path='/skills' element={<SkillsContainer />} />
				<Route path='/awards' element={<AwardsContainer />} />
				<Route path='/cv' element={<CvsContainer />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default App;
