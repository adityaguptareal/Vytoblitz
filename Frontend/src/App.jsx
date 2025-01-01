import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/Logo.png'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import Navbar from './Components/Navbar';
import Event from './Screens/Event';
import About from './Screens/About'
import Registration from './Screens/Registration'
import Error from './Screens/Error'
import ArtistryArena from "./Screens/ArtistryArena"
import CulturalEvent from "./Screens/CulturalEvent"
import Esports from "./Screens/Esports"
import Quizathon from "./Screens/Quizathon"
import Hackathon from "./Screens/Hackathon"
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/event' element={<Event />} />
          <Route path='/event/artistryarena' element={<ArtistryArena />} />
          <Route path='/event/cultural' element={<CulturalEvent />} />
          <Route path='/event/esports' element={<Esports />} />
          <Route path='/event/hackathon' element={<Hackathon />} />
          <Route path='/event/quizathon' element={<Quizathon />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/registration' element={<Registration />} />

          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}


export default App
