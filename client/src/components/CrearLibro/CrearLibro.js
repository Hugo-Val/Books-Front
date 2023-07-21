import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import './CrearLibro.css';





const CrearLibro = () => {
  const requiredString = Yup.string().required("Campo requerido");

  // Al menos 8 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula, un número y un carácter especial
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

 const initialValues = {
    autor: '',
    nombreLibro: '',
    genero: '',
    imagen: null, // Imagen inicialmente es null
  };

  const esquemaValidacion = Yup.object({
    nombre: Yup.string().required('El nombre es obligatorio'),
    correoElectronico: Yup.string().email('El formato del correo electrónico no es válido').required('El correo electrónico es obligatorio'),
    // Agrega más validaciones para otros campos si es necesario
  });
  

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
    <Formik
      initialValues={{
        autor: '',
        nombreLibro: '',
        genero: '',
      }}
      validationSchema={esquemaValidacion}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Autor/a:
          <Field type="text" name="autor" required />
        </label>
        <label>
          Nombre del libro:
          <Field type="text" name="nombreLibro" required />
        </label>
        <label>
          Género:
          <Field type="text" name="genero" required />
        </label>
        <label>
          Cargar imagen:
          <Field type="file" name="imagen" accept="image/*" />
        </label>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
};

export default CrearLibro;
