import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contato from './pages/Contato';
import AreaProf from './pages/AreaProf';
import QuemSomos from './pages/QuemSomos';

function App()
{
  return(
    <div>
     
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre-nos" element={<QuemSomos/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/nossas-unidades" />
          <Route path="/area-prof/*" element={<AreaProf/>}/>  
        </Routes>

      <Footer />

    </div>
  )  
}

export default App;
