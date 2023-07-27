import './App.scss';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
// import Sidebar from './components/sidebar';

function App() {

  // in case I forget how Browser Router works https://www.javatpoint.com/browserrouter-in-react
  return (
    <Routes>
          {/* The layout route is for moderating the layout of all the components in the page */}
          <Route exacr path ="/{andrew-portfolio}" element = {<Layout />} >
            {/* <Route element = {<Sidebar />}/> */}
              <Route index element = {<Home />} />
          </Route>
    </Routes>
  );
}

export default App;
