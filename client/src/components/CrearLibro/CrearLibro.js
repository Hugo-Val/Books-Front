import React, { useState } from 'react';
import './CrearLibro.css';

const CrearLibro = () => {
  const [autor, setAutor] = useState('');
  const [nombreLibro, setNombreLibro] = useState('');
  const [genero, setGenero] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes realizar cualquier acción con los datos y la imagen.
    // Por ejemplo, enviarlos a un servidor utilizando fetch o axios.

    // Limpia los campos del formulario después de enviarlo
    setAutor('');
    setNombreLibro('');
    setGenero('');
    setImagen(null);
  };

  const handleImagenChange = (event) => {
    const file = event.target.files[0];
    setImagen(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Autor/a:
        <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} required />
      </label>
      <label>
        Nombre del libro:
        <input type="text" value={nombreLibro} onChange={(e) => setNombreLibro(e.target.value)} required />
      </label>
      <label>
        Género:
        <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} required />
      </label>
      <label>
        Cargar imagen:
        <input type="file" accept="image/*" onChange={handleImagenChange} />
      </label>
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default CrearLibro;
