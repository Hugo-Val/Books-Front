import estilos from './Card.module.css';
import Carta from '../Card/Card';

const Cards = ({libros, onClose}) =>{
    return(
        <div className={style.contenedorcartas}>
            {libros.map(({idlibro,nombrelibro, desclibro, fotolibro, preciolibro, nombregenero, pages, raiting}) => {
                return(
                    <Carta
                        key={idlibro}
                        idlibro={idlibro}
                        nombrelibro={nombrelibro}
                        fotolibro={fotolibro}
                        preciolibro={preciolibro}
                        author={author}
                        edition={edition}
                        year={year}
                        desclibro={desclibro}
                        nombregenero={nombregenero}
                        pages={pages}
                        raiting={raiting}
                        />
                )
            })}
        </div>
    )
}
export default Cards;