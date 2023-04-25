
import logo from '../../assets/player verde.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import './header.css'
import Botao from '../button/button';
import BotaoPlayer from '../button/buttonPlayer';

function Cabecalho(props){
    return(
        <header className="cabecalho">
            <img className='logo' src={logo} alt="" />
            <h1 className='titleLogo'>OTAKUS.NET</h1>
            <div className='perfil'>
                
                
                <BotaoPlayer endereco='/Sobre' txt='Sobre'/>
                <BotaoPlayer endereco='/categorias' txt='Categorias'/>
            </div>
        </header>
    )
}


export default Cabecalho;