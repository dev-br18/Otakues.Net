import { Fragment } from 'react';
import './login.css'
import Botao from '../../components/button/button';
import Cabecalho from '../../components/header/header';
import logo from '../../assets/player verde.png'
import BotaoPlayer from '../../components/button/buttonPlayer';

function Login(){
    return(
        <Fragment>
            <div className='container3'>
                <div className='box'>
                    <div className='card1'>
                        <header className='cabecalhoLogin'>
                        <img className='logo' src={logo} alt="" />
                    </header>
                        <label className='itens' htmlFor="">Usuario:</label>
                        <input type="text" />
                        <label className='itens'  htmlFor="">Senha:</label>
                        <input type="password" />
                        <div className='centralizar'>
                            <BotaoPlayer endereco='/inicio' txt='Login'/>
                            <BotaoPlayer endereco='/register' txt='Não tenho conta'/>
                    </div>
                </div>
                </div>
                
            </div>
        </Fragment>
    )
}


export default Login;