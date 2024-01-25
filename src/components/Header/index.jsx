import './index.css'
import icon from '../../assets/icon.svg'

export default function Header() {
    return(
        <div className='header-box'>
            
            <div className='title-box'>
                <img className='icone' src={icon}></img>
                <h2 className='page-title'>Muuuvies</h2>
            </div>
            <div className='type-box'>
                <span className='header-type'>Em alta</span>
            </div>
            
            
        </div>
        
    )
}