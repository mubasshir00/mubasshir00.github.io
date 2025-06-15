import Navbar from './components/Navbar/Navbar';
import MainContainer from './components/Navbar/MainContainer';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CVs from './components/CV/CVs';
import Contact from './components/Contacts/Contact';
import ExperienceContainer from './components/Experience/ExperienceContainer';
import PublicationContainer from './components/Publications/PublicationContainer';
import ProjectContainer from './components/Project/ProjectContainer';
import SkillsContainer from './components/Skills/SkillsContainer';
import AwardsContainer from './components/Awards/AwardsContainer';
import CvsContainer from './components/CV/CvsContainer';
import Gallery from './components/Moments/Moments';

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
				{/* <Route path='/moments' element={<Gallery />} /> */}
				<Route path='/contact' element={<Contact />} />

				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Router>
	);
}

export default App;
