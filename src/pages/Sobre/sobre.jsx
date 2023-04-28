import { Fragment } from "react";
import logo from '/assets/player verde.png'
import BotaoPlayer from "../../components/button/buttonPlayer";
function Sobre(){
    return(
        <Fragment>
            <header className='cabecalhoFilmes'>
                <img className='logo' src={logo} alt="" />
                <div className='buttons'>
                    <BotaoPlayer endereco='/inicio' txt='Inicio'/>
                    <BotaoPlayer endereco='/categorias' txt='Categorias'/>
                </div>
            </header>
            <div className='mainFilmes'>
        
                
                <div className='filmesConteudo'>
                    <h2 className='titlePrincipal'>Sobre</h2>
                    
                    <p className='paragraph'>A pagina Otakus.net é uma plataforma de streaming e chat integrado para todos os fãs de animes se comunicarem com outros.A plataforma ainda esta em desenvolvimento, pode acontecer varios erros, pois ainda não terminamos a plataforma</p>

                    <h2 className='titlePrincipal'>Pedido animes</h2>
                    <p className='paragraph'>Em Desenvolvimento</p>
                </div>
                
            </div>
            <footer className='footerFilmes' >
                    <img className='logo' src={logo} alt="" />
            </footer>
        </Fragment>
    )
}

export default Sobre;