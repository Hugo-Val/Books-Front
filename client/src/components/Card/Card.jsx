import estilos from './Card.module.css';

const Carta = ({idlibro, nombrelibro, fotolibro, paginas, raiting, preciolibro}) =>{
    return(
        <div className={estilos.contenedor}>
            <div className={estilos.titulo}>{nombrelibro}</div>{/*nombre del libro*/}
            <div className={estilos.portada}>{fotolibro}</div>{/*imagen del libro*/}
            <div className={estilos.datos}>{/* páginas, costo y clasificación del libro*/}
                <section className={estilos.orden}>
                    <div className={estilos.paginas}>{paginas} pags.</div>
                    <div className={estilos.costo}>{preciolibro}</div>
                    <div className={estilos.clasificacion}>{raiting}</div>
                </section>
            </div>
        </div>
    )
}
export default Carta;