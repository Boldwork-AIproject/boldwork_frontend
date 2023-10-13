import React from 'react';
import './App.css';
import Login from './Login.js'
import Navigation from './Navigation.js'
import Main from './Main.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navigation />
      <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
