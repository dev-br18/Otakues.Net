import Post from '../../components/post/post';
import { Fragment } from 'react';
import Cabecalho from '../../components/header/header'
import img from '/assets/NarutoPost.jpg'
import onepiece from '/assets/Onepiece.jpg'
import death from '/assets/DeathNote.jpg'
import sword from '/assets/Sword.jpg'
import cavaleiros from '/assets/cavaleiros.jpg'
import onepunch from '/assets/one.jpg'
import boruto from '/assets/Boruto.jpg'
import baki from '/assets/Baki.jpg'
import castlevania from '/assets/Castlevania.jpg'
import cyber from '/assets/Cyber.jpg'
import monster from '/assets/Monster.jpg'
import attack from '/assets/Attack.jpg'
import logo from '/assets/player verde.png'
import './inicio.css'

function Inicio(){
    return( 
        <Fragment>
        <Cabecalho endereco={'/categorias'} txt='Categorias'/>
        
        <div className="container1">
            <h1 className="txt">Bem-Vindo a Otakus.net</h1>
            <p  className="txt">Aqui é aonde você encontra todos os animes favoritos</p>
            
            <div className="gridContainer">
                <div className='mainContent'>
                    <Post title='Naruto' img={img} txt='Assistir' endereco='/naruto'/>
                    <Post title='Onepiece' img={onepiece} txt='Assistir' endereco='/onepiece'/>
                    <Post title='Death Note' img={death} txt='Assistir' endereco='/deathnote'/>
                    <Post title='Sword Art Online' img={sword} txt='Assistir' endereco='/Sao'/>
                    <Post title='Os Cavaleiros Dos Zodiacos' img={cavaleiros} txt='Assistir' endereco='/cavaleiros'/>
                    <Post title='One Punch Man' img={onepunch} txt='Assistir' endereco='/onepunchman'/>
                    <Post title='Boruto' img={boruto} txt='Assistir' endereco='/boruto'/>
                    <Post title='Baki-O Campeão' img={baki} txt='Assistir' endereco='/bakicampeao'/>
                    <Post title='Castlevania' img={castlevania} txt='Assistir' endereco='/castlevania'/>
                    <Post title='CyberPunk Mercenarios' img={cyber} txt='Assistir' endereco='/cyberpunk'/>
                    <Post title='Monster' img={monster} txt='Assistir' endereco='/monster'/>
                    <Post title='Attack On Titan' img={attack} txt='Assistir' endereco='/attackontitan'/>
                </div>
                <div className='sidebarContent'>
                    <iframe src="https://otakutalkbr.online/chat" frameborder="0"></iframe>
                </div>
            </div>
            
        </div>
        <footer className='footerFilmes' >
                    <img className='logo' src={logo} alt="" />
        </footer>
        </Fragment>
    )    
}



export default Inicio;