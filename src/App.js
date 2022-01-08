import './App.css';
import React from 'react';
// import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contato from './pages/Contato';
import AreaProf from './pages/AreaProf';
import Intro from "./components/Intro";

function App()
{
  return(
    <div>
      
      <BrowserRouter>
        <Header/>
        <Intro/>  
        <Routes>
          <Route path="/" />
          <Route path="/sobre-nos" />
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/nossas-unidades" />
          <Route path="/area-prof/*" element={<AreaProf/>}/>  
        </Routes>
      </BrowserRouter>

      <Footer/>

    </div>
  )  
}

export default App;