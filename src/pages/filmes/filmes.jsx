import './filmes.css'
import { Fragment } from 'react';
import logo from '/assets/player verde.png'

import BotaoPlayer from '../../components/button/buttonPlayer';
function Filmes(props){
    return(
        <Fragment>
            <header className='cabecalho'>
                <img className='logo' src={logo} alt="" />
                <div className='perfil'>
                    <BotaoPlayer endereco='/inicio' txt='Inicio'/>
                    <BotaoPlayer endereco='/categorias' txt='Categorias'/>
                </div>
            </header>
            <div className='mainFilmes'>
        
                <img className='imagemFilme' src={props.imgAnime} alt="" />
                
                <div className='filmesConteudo'>
                    <h2 className='titlePrincipal'>Sinopse</h2>
                    
                    <p className='paragraph'>{props.sinopse}</p>

                    <h2 className='titlePrincipal'>Anime</h2>
                    
                    <iframe className='video' src={props.linkAnime} frameborder="0"></iframe>
                </div>
                
            </div>
            <footer className='footerFilmes' >
                    <img className='logo' src={logo} alt="" />
            </footer>
        </Fragment>
        
    )
}


export default Filmes;