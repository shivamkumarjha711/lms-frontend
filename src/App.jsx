import './App.css';
import React, { Fragment } from 'react';
import HomePage from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import NotFound from './Pages/NotFound';

function App() {

  return (
    <Fragment>
     <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </Fragment>
  )
}

export default App
