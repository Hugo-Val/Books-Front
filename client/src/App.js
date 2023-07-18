import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

document.title = "Book Club";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Landing Page</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
        <Route path="/feed" element={<h1>Feed</h1>} />
        <Route path="/book/:id" element={<h1>Get by Id</h1>} />
        <Route path="/book" element={<h1>Get All</h1>} />
        <Route path="/createbook" element={<h1>Add</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>

    </div>
  );
}

export default App;
