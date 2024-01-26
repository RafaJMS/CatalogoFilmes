import { useState, useEffect } from "react"
import "./index.css"
import { Link } from "react-router-dom"


export default function UpComing(){

    const [movies,setMovies] = useState()
    const image_path = "https://image.tmdb.org/t/p/w500/"

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGQ3ZDA3YmEyNzQzYmJhZGZkYTM2ODhmZDY4YTUyYiIsInN1YiI6IjY1YjE1MmIyMjc5MGJmMDE3MjU2NTg0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qm7cb_lbam8YdZQbCaWB1234oVqEIxmIxIJxLKqxkmA'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1&region=BR', options)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setMovies(data.results)}
    )
            .catch(err => console.error(err));

    },[])
    

    return(
        <>
        <h1 id="title-page"> Em Breve </h1>
        <ul className="movie-list">
            
            {movies && movies.map((movies) =>(
                    <li className="movie-unity" key={movies.id}>

                        <Link to={`/details/${movies.id}`}><img className="movie-poster" src={`${image_path}${movies.poster_path}`} alt={`Poster de ${movies.title}`}></img></Link>
                        <span className="title">{movies.title}</span>
                    </li>
            ))}
        </ul>
        </>
    )
}