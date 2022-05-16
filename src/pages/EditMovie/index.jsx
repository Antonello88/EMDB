
import styles from './styles.module.scss'
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {GET} from '../../utils/http'
import CardItem from '../../components/CardItem'
import CreateCardForm from '../../components/CreateCardForm'


function EditMovie () {
    const location = useLocation();
    const [movieData, setMovieData] = useState({});
    const movieId = location.pathname.split("/").reverse()[0] 

    useEffect (() => {
        GET(movieId).then(data => setMovieData(data))
    },[]);

    

    return(
        <div className={styles.EditMovie}>
        <CardItem cardData={movieData} />
        <CreateCardForm setModalVisibility={false} />
        </div>
    )


}

export default EditMovie