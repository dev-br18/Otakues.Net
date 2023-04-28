import { Fragment } from 'react';
import './login.css'
import logo from '/assets/player verde.png'
import BotaoPlayer from '../../components/button/buttonPlayer';

function Register(){
    return(
        <Fragment>
            <div className='container3'>
                <div className='box1'>
                    <div className='card2'>
                        <header className='cabecalhoLogin'>
                        <img className='logo' src={logo} alt="" />
                    </header>
                        <label className='itens' htmlFor="">Usuario:</label>
                        <input type="text" />
                        <label className='itens'  htmlFor="">Senha:</label>
                        <input type="password" />
                        <label className='itens'  htmlFor="">Confirme senha:</label>
                        <input type="password" />
                        <div className='centralizar'>
                            <BotaoPlayer endereco='/inicio' txt='Register'/>
                            <BotaoPlayer endereco='/login' txt='Ja tenho conta'/>
                        </div>
                </div>
                </div>
                
            </div>
        </Fragment>
    )
}


export default Register;