import * as types from './types';
import axios from "axios";

export const obtener_Todos_Libros = () => {
    return async (dispatch) => {
        try {
          const { data } = await axios.get(`http://localhost:3001/obtenerLibros?pagina=2&limite=20`);
          console.log(data.libros)
          dispatch({
            type: types.OBTENER_TODOS_LIBROS,
            payload: data.libros,
          });
        } catch (error) {
          throw new Error(error.message);
        }
      };
};
export const obtener_Libro_Por_Id = () => ({})
export const agregar_Libro = () => ({})
export const eliminar_Libro = () => ({})
export const actualizar_Libro = () => ({})
export const filtrar_Libros = () => ({})
export const quitar_Filtro = () => ({})
export const ordenar_Libros = () => ({})
export const quitar_Orden = () => ({})
export const siguiente_Pagina = () => ({})
export const pagina_Anterior = () => ({})
export const agregar_Localizacion = () => ({})
export const buscar_Libro_Por_Titulo = () => ({})
