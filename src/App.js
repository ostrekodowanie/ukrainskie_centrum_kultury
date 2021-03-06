import { useLocation } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import './sass/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import OurMission from './pages/our-mission/OurMission';
import Contact from './pages/contact/Contact';
import { useState, useEffect } from 'react';

export default function App() {
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
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home active={overlayActive}/>} />
            <Route path="/o-nas" element={<About active={overlayActive}/>} />
            <Route path="/nasza-misja" element={<OurMission active={overlayActive}/>} />
            <Route path="/kontakt" element={<Contact active={overlayActive}/>} />
          </Routes>
        </ScrollToTop>
      </main>
      <Footer />
    </div>
  );
}

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
}