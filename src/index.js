import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/pages/Home';
import User from './componentes/pages/User';
import Sobre from './componentes/pages/Sobre';
import './App.css'






const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
 <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/user/' element={<User/>} />
    <Route path='/sobre/:id' element={<Sobre/>} />
  </Routes>
 </BrowserRouter>
);


