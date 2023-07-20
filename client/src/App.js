import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import librosJSON from './libros.json';
import axios from 'axios';
import LandingPage from './components/LandingPage/LandingPage';
import NotFoundPage from './components/NotFound/NotFound';
document.title = "Book Club";

// codigo para agregar libros
 // URL del endpoint del backend para guardar los libros
 const backendURL = 'http://localhost:3001/agregaLibro';


 // Función para enviar un libro al backend
 async function enviarLibro(libro) {
   try {
     const response = await axios.post(backendURL, libro);
     console.log(`Libro "${libro.nombrelibro}" enviado correctamente.`);
     return response.data;
   } catch (error) {
     console.error(`Error al enviar el libro "${libro.nombrelibro}": ${error.message}`);
     throw error;
   }
 }
 
 // Función para recorrer y enviar todos los libros
 async function enviarLibros() {
   for (const libro of librosJSON) {
     try {
      console.log(libro)
       await enviarLibro(libro);
     } catch (error) {
       console.log(error.message)
     }
   }
 }


 enviarLibros();

function App() {

 

// Llamar a la función para enviar los libros
// useEffect(() => {
//   enviarLibros();
// }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
        <Route path="/feed" element={<h1>Feed</h1>} />
        <Route path="/book/:id" element={<h1>Get by Id</h1>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/createbook" element={<h1>Add</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>

    </div>
  );
}

export default App;
