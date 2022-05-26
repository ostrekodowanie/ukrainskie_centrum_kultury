import { Route, Routes } from 'react-router-dom';
import './sass/App.css';
import Header from './components/Header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import OurMission from './pages/our-mission/OurMission';
import Contact from './pages/contact/Contact';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/nasza-misja" element={<OurMission />} />
          <Route path="/kontakt" element={<Contact />} />
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
