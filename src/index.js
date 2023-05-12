import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Navbars from './components/Navbars';
//import Usuario from './screens/Usuario.tsx';
import PantallaUsuarios from './screens/PantallaUsuarios'
import Formulario from './screens/Formulario'
import Home from './screens/Home'
import Login from './screens/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbars/>
      <Routes>
        <Route path='/PantallaUsuarios' element={<PantallaUsuarios/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path="/Formulario/:id" element={<Formulario/>} />


      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
