import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CrearLibro from './components/CrearLibro/CrearLibro';

document.title = "Club del libro";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Landing Page</h1>} />
        <Route path="/ingresar" element={<h1>Login</h1>} />
        <Route path="/registro" element={<h1>Register</h1>} />
        <Route path="/panel" element={<h1>Dashboard</h1>} />
        <Route path="/perfil" element={<h1>Profile</h1>} />
        <Route path="/ajustes" element={<h1>Settings</h1>} />
        <Route path="/feed" element={<h1>Feed</h1>} />
        <Route path="/libro/:id" element={<h1>Get by Id</h1>} />
        <Route path="/inicio" element={<h1>Get All</h1>} />
        <Route path="/crear" element={<CrearLibro />} />
        <Route path="/equipo" element={<h1>About</h1>} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
