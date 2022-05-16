import {Link} from "react-router-dom";
import styles from './styles.module.scss'
import {DELETE} from '../../utils/http'

//cardData è la chiave che conterra il singolo movie 
function CardItem({cardData}) {
    
    const onCardDelete = () => {
        DELETE(cardData.id).then((data) => window.location.reload("/"));
    }


    return (

        <div className={styles.CardItem}>

            <Link to={`/edit-movie/${cardData.id}`}>
             <h2> {cardData.title} </h2>
             </Link>
             <button onClick={onCardDelete} className={styles.CardItem__btn}>❌</button>

             <p>{cardData.year}</p>
             <img src={cardData.poster} alt={cardData.title}></img>

             <p> 
             {cardData.description}
             </p>

                <div className={styles.genre}>
                    <ul>
                    {cardData.genres && cardData.genres.map((genre,i) => (<li key={i}>{genre}</li>))}
                        
                    </ul>
                </div>
        </div>

    );



}

export default CardItem