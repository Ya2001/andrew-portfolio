import './App.scss';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


// import Sidebar from './components/sidebar';

function App() {
  // in case I forget how Browser Router works https://www.javatpoint.com/browserrouter-in-react
  return (

     <Routes> 
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>

  );
}


export default App;
