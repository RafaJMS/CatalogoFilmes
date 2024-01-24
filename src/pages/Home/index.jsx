import Cards from "../../components/Cards"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "./index.css"
 
 export default function Home() {
    
    return(
        <>
        <div className="movie-box">
        <h1>Filmes</h1>

        <Cards/>

        </div>
        </>
    )
    
}