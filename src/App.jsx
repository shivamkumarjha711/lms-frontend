import './App.css';
import React, { Fragment } from 'react';
import HomePage from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Fragment>
     <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </Fragment>
  )
}

export default App
