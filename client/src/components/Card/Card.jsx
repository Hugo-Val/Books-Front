import estilos from './Card.module.css';

const Carta = ({name, image, pages, raiting, cost}) =>{
    return(
        <div className={estilos.contenedor}>
            <div className={estilos.titulo}>{name}</div>{/* nombre del libro */}
            <div className={estilos.portada}></div>{/* imagen del libro */}
            <div className={estilos.datos}>{/* páginas, costo y clasificación del libro */}
                <section className={estilos.orden}>
                    <div className={estilos.paginas}>{pages} pags.</div>
                    <div className={estilos.costo}>{cost}</div>
                    <div className={estilos.clasificacion}>{raiting}</div>
                </section>
            </div>
        </div>
    )
}
export default Carta;