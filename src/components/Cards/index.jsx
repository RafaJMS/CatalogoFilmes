import { useState } from "react"
import "./index.css"

export default function Cards(){

    const [movie,setMovie] = useState()
    
    const movies = [
    {
        title:"Shrek 1",
        image_url:"https://upload.wikimedia.org/wikipedia/pt/e/e6/Shrek_Poster.jpg"

    },
    {
        title:"Shrek 2 ",
        image_url:"https://upload.wikimedia.org/wikipedia/pt/thumb/7/78/Shrek_2_Poster.jpg/230px-Shrek_2_Poster.jpg"
    },
    {
        title:"Shrek Para Sempre",
        image_url:"https://d2d7ho1ae66ldi.cloudfront.net/ArquivoTitulos/1d2c1add-7fab-11ea-86d1-1c1bb54b8682/800_Shrek+Forever+After_poster.jpg"
    }

    ]

    return(
        
        <ul className="movie-list">
            
            {movies.map(movie=>{
                return(
                    <li className="movie-unity">
                    
                    <a href="https://www.youtube.com/watch?v=dLHCS6oL7lo" target="blank">
                        <img src={movie.image_url} alt="é o sherek"></img>
                    </a>  
                        <span className="title">{movie.title}</span>
                    </li>
                )
            })   }

        </ul>
    )
}