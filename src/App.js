import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Music from './Music';
import { Route,Routes } from 'react-router-dom';
import Onemusic from './Onemusic';


function App() {
 

  return (
  <>
  <Routes>
    <Route path='/' element={<Music/>}/>
    <Route path='/:id' element={<Onemusic/>}/>
  </Routes>
  </>
  );
}

export default App;