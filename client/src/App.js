import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import ButtonAppBar from './components/Nav/Nav';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { agregar_Localizacion, buscar_Libro_Por_Titulo } from './redux/actions/actions';

document.title = "Book Club";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(agregar_Localizacion(location.pathname));
  }, [location, dispatch]);

  function onSearch(titulo) {
    if (titulo !== '') {
      return dispatch(buscar_Libro_Por_Titulo(titulo));
    }
    
  }

  return (
    <div className="App">
      { location.pathname !== "/" && <ButtonAppBar onSearch={onSearch}/>}
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
        <Route path="/feed" element={<h1>Feed</h1>} />
        <Route path="/book/:id" element={<h1>Get by Id</h1>} />
        <Route path="/home" element={<h1>Get All</h1>} />
        <Route path="/agregarlibro" element={<h1>Add</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>

    </div>
  );
}

export default App;
