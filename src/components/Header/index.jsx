import './index.css'
import icon from '../../assets/icon.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <div className='header-box'>
            
            <Link className='link' to={'/'}><div className='title-box'>
                <img className='icone' src={icon}></img>
                <h2 className='page-title'>Muuuvies</h2>
            </div></Link>
            <div className='type-box'>
                <Link className='header-type' to={'/popular'}><span>Em Alta</span></Link>
                <Link className='header-type' to={'/toprated'}><span>Melhores Avaliações</span></Link>
                <Link className='header-type' to={'/nowplaying'}><span>Nos Cinemas</span></Link>
                <Link className='header-type' to={'/upcoming'}><span>Em Breve</span></Link>
            </div>
            
            
        </div>
        
    )
}