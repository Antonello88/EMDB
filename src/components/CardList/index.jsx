import './style.css'
import CardItem from '../CardItem'
import {useState, useEffect} from 'react'
import {GET} from '../../utils/http'


function CardList({searchInput}) {
    // usestate -> questa è lista degli elementi 
    
    const [moviesData, setMoviesData]=useState([]) 
    



    useEffect(() => {
        
        GET().then((data) => setMoviesData(data)); 


    },[])  

    return (

        <div className='CardList'> 
        <h1>Lista dei Film</h1>
        <div className='CardList__wrapper'>
        {moviesData && moviesData.filter((movie)=> movie.title.toLowerCase().includes(searchInput.toLowerCase()))
        .map((movie) => <CardItem cardData={movie} key={movie.id} />)}
        </div>
        </div>

    )




}

export default CardList 