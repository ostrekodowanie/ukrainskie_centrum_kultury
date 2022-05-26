import { Route, Routes } from 'react-router-dom';
import './sass/App.css';
import Header from './components/Header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import OurMission from './pages/our-mission/OurMission';
import Contact from './pages/contact/Contact';
import { useState } from 'react';

function App() {
  const [overlayActive, setOverlay] = useState(false)

  const currentState = (navbarState) => {
    setOverlay(navbarState)
  }

  const disableNav = () => {
    setOverlay(false)
  }

  return (
    <div className="wrapper">
      <Header currentState={currentState} overlay={overlayActive}/>
      <main>
        <div className={overlayActive ? "overlay active" : "overlay"} onClick={disableNav} onTouchMove={disableNav}></div>
        <Routes>
          <Route path="/" element={<Home active={overlayActive}/>} />
          <Route path="/o-nas" element={<About active={overlayActive}/>} />
          <Route path="/nasza-misja" element={<OurMission active={overlayActive}/>} />
          <Route path="/kontakt" element={<Contact active={overlayActive}/>} />
        </Routes>
      </main>
      <footer className='footer'>
        <p>&copy; Copyright 2022 Lorem ipsum  Inc. </p>
        <a href='/'>Privacy Policy</a>
      </footer>
    </div>
  );
}

export default App;
