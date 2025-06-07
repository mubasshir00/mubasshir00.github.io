import HomeContent from './components/Navbar/HomeContent';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Navbar/Sidebar';

function App() {
  return (
    <>
    <Navbar/>
    <div className='main-container'>
      <Sidebar/>
      <HomeContent/>
    </div>
    </>
  );
}

export default App;
