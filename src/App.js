import './App.css';
import React from 'react';
// import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import CardHome from './components/CardHome'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contato from './pages/Contato';
// import Intro from "./components/intro"

function App()
{
  return(
    <div>
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/"S />
          <Route path="/sobre-nos" />
          <Route path="/contato" element={Contato}/>
          <Route path="/nossas-unidades" />
          <Route path="/login" />  
        </Routes>
      </BrowserRouter>
      <Intro/>
      <CardHome/>
      <Footer/>
    </div>
  )  
}

export default App;