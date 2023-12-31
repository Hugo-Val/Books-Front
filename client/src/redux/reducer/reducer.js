import * as types from '../actions/types';

const initialState = {
    libros: [],
    librosOriginal: [],
    libro: {},
    DetalleLibro: {},
    LibroActualizado: {},
    LibroEliminado: {},
    LibroAgregado: {},
    LibroFiltrado: [],
    LibroOrdenado: [],
    PaginaActual: 1,
    localizaciones: []
}



const rootReducer = (state = initialState,{ type, payload }) => {
    switch (type) {
        case types.OBTENER_TODOS_LIBROS:
            return {
                ...state,
                libros: payload,
                librosOriginal: payload
            }
        case types.OBTENER_LIBRO_POR_ID:
            return {
                ...state,
                libro: payload
            }
        case types.AGREGAR_LIBRO:
            return {
                ...state,
                LibroAgregado: payload
            }
        case types.ELIMINAR_LIBRO:
            return {
                ...state,
                LibroEliminado: payload
            }
        case types.ACTUALIZAR_LIBRO:
            return {
                ...state,
                LibroActualizado: payload
            }
        case types.FILTRAR_LIBROS:
            return {
                ...state,
                LibroFiltrado: payload
            }
        case types.QUITAR_FILTRO:
            return {
                ...state,
                libros: state.librosOriginal
            }
        case types.ORDENAR_LIBROS:
            
        case types.QUITAR_ORDEN:
            return {
                ...state,
                libros: state.librosOriginal
            }
        case types.SIGUIENTE_PAGINA:
            return {
                ...state,
                PaginaActual: state.PaginaActual + 1
            }
        case types.PAGINA_ANTERIOR:
            return {
                ...state,
                PaginaActual: state.PaginaActual - 1
            }
        case types.AGREGAR_LOCALIZACION:
            return {
                ...state,
                localizaciones: payload
            }
        case types.BUSCAR_LIBRO_POR_TITULO:
            return {
                ...state,
                libro: payload
            }
        default:
            return state


}





}

export default rootReducer
