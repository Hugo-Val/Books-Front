import * as types from './types';

export const obtener_Todos_Libros = () => ({})
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
export const agregar_Localizacion = (path) => ({
    type: types.AGREGAR_LOCALIZACION,
    payload: path
})
export const buscar_Libro_Por_Titulo = () => ({})
