import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ListePlantes from './pages/ListePlantes';
import ParId from './pages/ParId';
import Cree from './pages/Cree';
import Update from './pages/Update';


const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/all" element={<ListePlantes />} />
          <Route path="/all/:id" element={<ParId />} />
          <Route path="/post" element={<Cree />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
