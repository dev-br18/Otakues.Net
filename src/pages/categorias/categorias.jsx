import { Fragment } from "react";
import Cabecalho from "../../components/header/header";
import './categorias.css'
import MovieCarousel from "./carrossel";
import {motion} from 'framer-motion'
import Post from "../../components/post/post";
import img from '../../assets/Kimi.jpg'
import Bokura from '../../assets/Bokura.jpg'
import Ookami from '../../assets/Ookamisan.jpg'
import Nisekoi from '../../assets/Nisekoi.jpg'
import ReLIFE from '../../assets/ReLIFE.jpg'
import SchoolRumble from '../../assets/SchoolRumble.jpg'
import Clannad from '../../assets/Clannad.jpg'
import attack from '../../assets/Attack.jpg'
import TokyoRevengers from '../../assets2/TokyoRevengers.jpg'
import VinlandSaga from '../../assets2/VinlandSaga.jpg'
import JujutsuKaisen from '../../assets2/JujutsuKaisen.jpg'
import SpyxFamily from '../../assets2/SpyxFamily.jpg'
import cyber from '../../assets/Cyber.jpg'
import EightySix from '../../assets2/Eighty-Six.jpg'
import img2 from '../../assets/NarutoPost.jpg'
import sword from '../../assets/Sword.jpg'
import FairyTail from '../../assets2/FairyTail.jpg'
import ZeronoTsukaima from '../../assets2/ZeronoTsukaima.jpg'
import  KenjanoMago from '../../assets2/KenjanoMago.jpg'
import Radiant from '../../assets2/Radiant.jpg'
import LogHorizon from '../../assets2/LogHorizon.jpg'
import Osomatsusan from '../../assets2/Osomatsu-san.jpg'
import Hinamatsuri from '../../assets2/Hinamatsuri.jpg'
import Barakamon from '../../assets2/Barakamon.jpg'
import SpaceDandy from '../../assets2/SpaceDandy.jpg'
import Gintama from '../../assets2/Gintama.jpg'
import Nichijou from '../../assets2/Nichijou.jpg'
import GalaxyAngel from '../../assets2/GalaxyAngel.jpg'
import GoldenBoy from '../../assets2/GoldenBoy.jpg'
import GrandBlue from '../../assets2/GrandBlue.jpg'
import FLCL from '../../assets2/FLCL.jpg'
import logo from '../../assets/player verde.png'
function Categorias(){
    
    return(
        <Fragment>
            
            <div className="main">
                <Cabecalho txt='inicio' endereco='/inicio' /> 
                <div className="categorias">
                    <motion.h1  className="title-categorias">Romance</motion.h1>
                    <div className='div-carrosel' v>
                        <MovieCarousel post={[<Post title='Kimi to Boku no Saigo no Senjou' img={img} txt='Assistir' endereco='/Kimi'/>,<Post title='Bokura ga ita' img={Bokura} txt='Assistir' endereco='/Bokuragaita'/>,<Post title='Ookami-san' img={Ookami} txt='Assistir' endereco='/ookami-san'/>,<Post title='Nisekoi' img={Nisekoi} txt='Assistir' endereco='/nisekoi'/>,<Post title='ReLIFE' img={ReLIFE} txt='Assistir' endereco='/relife'/>,<Post title='School Rumble' img={SchoolRumble} txt='Assistir' endereco='/SchoolRumble'/>,<Post title='Clannad' img={Clannad} txt='Assistir' endereco='/clannad'/>,]}/>
                    </div>
                    <motion.h1  className="title-categorias">Ação</motion.h1>
                    <div className='div-carrosel' v>
                        <MovieCarousel post={[<Post title='Attak on Titan' img={attack} txt='Assistir' endereco='/attackontitan'/>,<Post title='Tokyo Revengers' img={TokyoRevengers} txt='Assistir' endereco='/TokyoRevengers'/>,<Post title='Vinland Saga' img={VinlandSaga} txt='Assistir' endereco='/VinlandSaga'/>,<Post title='Jujutsu Kaisen' img={JujutsuKaisen} txt='Assistir' endereco='/JujutsuKaisen'/>,<Post title='Spy x Family' img={SpyxFamily} txt='Assistir' endereco='/SpyxFamily'/>,<Post title='CyberPunk Mercenarios' img={cyber} txt='Assistir' endereco='/cyberpunk'/>,<Post title='Eighty Six' img={EightySix} txt='Assistir' endereco='/Eighty-Six'/>,<Post title='Naruto' img={img2} txt='Assistir' endereco='/naruto'/>, <Post title='Sword Art Online' img={sword} txt='Assistir' endereco='/Sao'/>]}/>
                    </div>

                    <motion.h1  className="title-categorias">Fantasia</motion.h1>
                    <div className='div-carrosel' v>
                        <MovieCarousel post={[<Post title='Fairy Tail' img={FairyTail} txt='Assistir' endereco='/fairytail'/>,<Post title='Zero no Tsukaima' img={ZeronoTsukaima} txt='Assistir' endereco='/zeronotsukaima'/>,<Post title='Kenja no Mago' img={KenjanoMago} txt='Assistir' endereco='/KenjaNoMago'/>,<Post title='Radiant' img={Radiant} txt='Assistir' endereco='/Radiant'/>,<Post title='Log Horizon' img={LogHorizon} txt='Assistir' endereco='/LogHorizon'/>]}/>
                    </div>

                     <motion.h1  className="title-categorias">Comedia</motion.h1>
                    <div className='div-carrosel' v>
                        <MovieCarousel post={[<Post title='Osomatsu-san' img={Osomatsusan} txt='Assistir' endereco='/osomatsu-san'/>,<Post title='Hinamatsuri' img={Hinamatsuri} txt='Assistir' endereco='/Hinamatsuri'/>,<Post title='Barakamon' img={Barakamon} txt='Assistir' endereco='/barakamon'/>,<Post title='Space Dandy' img={SpaceDandy} txt='Assistir' endereco='/Spacedandy'/>,<Post title='Nichijou' img={Nichijou} txt='Assistir' endereco='/Nichijou'/>,<Post title='Golden Boy' img={GoldenBoy} txt='Assistir' endereco='/GoldenBoy'/>,<Post title='Grand Blue' img={GrandBlue} txt='Assistir' endereco='/Grandblue'/>,<Post title='FLCL' img={FLCL} txt='Assistir' endereco='/FLCL'/>]}/>
                    </div>
                </div>
                
            </div>
            <footer className='footerFilmes' >
                    <img className='logo' src={logo} alt="" />
            </footer>
        </Fragment>
         
    )    
}


export default Categorias;