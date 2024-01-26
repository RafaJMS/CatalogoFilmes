import "./index.css"
import icon from "../../assets/icon.svg"
import { Link } from "react-router-dom"


 export default function Home() {
    
    return(
        <div className="container">
        <div className="movie-box">
            <img src={icon} alt="icone do muuvies"></img>
            <div className="home-box">
                <span className="home-title"> BEM VINDO AO MUUUVIES</span>
                <span className="home-description">Projeto de catalogo de filmes realizado pelo aluno Rafael Mecenas para conclusão do curso FullStack</span>
            </div>
            
        </div>
        <Link to={"/popular"}><button id="inicio">Começar a explorar!</button></Link>
        </div>
    )
    
}