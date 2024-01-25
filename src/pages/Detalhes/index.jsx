import { useEffect, useState } from "react"
import { useParams } from "react-router"
import "./index.css"
import { Link } from "react-router-dom"



export default function Detalhes(){

    const { id } = useParams()
    const [movie,setMovie] = useState({})
    const image_path = "https://image.tmdb.org/t/p/w500/"

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGQ3ZDA3YmEyNzQzYmJhZGZkYTM2ODhmZDY4YTUyYiIsInN1YiI6IjY1YjE1MmIyMjc5MGJmMDE3MjU2NTg0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qm7cb_lbam8YdZQbCaWB1234oVqEIxmIxIJxLKqxkmA'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-Br`, options)
            .then(response => response.json())
            .then(data => {

                const {title, poster_path, overview,release_date, genres,popularity} = data
                const movie = 
                { 
                titulo : title,
                detalhes :  overview,
                poster : `${image_path}${poster_path}` ,
                generos : (genres).map(genre => genre.name),
                popularidade : popularity,
                dataLancamento: release_date
            }
            setMovie(movie)
            console.log(movie)
            })
            .catch(err => console.error(err));

    },[id])


    return(
        <div>
            <div className="movie">
                <img className="poster" src={movie.poster} alt={movie.detalhes} />
                <div className="details-box">
                    <h1 className="movie-title">{movie.titulo}</h1>
                    <hr></hr>
                    <span className="details">Sinopse: {movie.detalhes}</span>
                    <hr></hr>
                    <span className="release-date">Data de Lançamento: {movie.dataLancamento}</span>
                </div>
                
            </div>
            <Link to='/'><button>Voltar</button></Link>
        </div>
    )
}