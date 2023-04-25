
import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Carregamento from "./carregamento"
import Inicio from "./pages/home/inicio";
import Filmes from "./pages/filmes/filmes.jsx";
import naruto from './assets/naruto img.jpg'
import onepiece from './assets/One-Piece-AstroGeek.jpg'
import death from './assets/DeathNot-Wallpaper.jpg'
import sword from './assets/SwordWallpaper.jpg'
import cavaleiros from './assets/cavaleirosWallpaper.jpg'
import onepunch from './assets/OneWallpaper.jpg'
import boruto from './assets/BorutoWallpaper.jpg'
import baki from './assets/BakiWallpaper.jpg'
import castlevania from './assets/CastlevaniaWallpaper.png'
import cyber from './assets/CyberWallpaper.jpg'
import monster from './assets/MonsterWallpaper.jpg'
import attack from './assets/AttackWallpaper.png'
import Login from "./pages/login e register/login";
import Register from "./pages/login e register/register";
import Categorias from "./pages/categorias/categorias";
import bokura from './assets/BokuraWallpaper.jpg'
import okami from './assets/OokamisanWallpaper.jpg'
import nisekoi from './assets/nisekoiWallpaper.jpg'
import relife from './assets/ReLIFEWallpaper.jpg'
import SchoolRumble from './assets/SchoolRumbleWallpaper.jpg'
import clannad from './assets/ClannadWallpaper.jpg'
import TokyoRevengers from './assets2/TokyoRevengersWallpaper.jpg'
import VinlandSaga from './assets2/VinlandSagaWallpaper.jpg'
import jujutsu from './assets2/JujutsuKaisenWallpaper.jpg'
import SpyxFamily from './assets2/SpyxFamilyWallpaper.jpg'
import EightySix from './assets2/EightySixWallpaper.png'
import fairytail from './assets2/fairytailWallpaper.jpg'
import zeronotsukaima from './assets2/zeronotsukaimaWallpaper.jpg'
import KenjaNoMago from './assets2/KenjanoMagoWallpaper.png'
import Radiant from './assets2/RadiantWallpaper.jpg'
import LogHorizon from './assets2/LogHorizonWallpaper.jpg'
import osomatsusan from './assets2/Osomatsu-sanWallpaper.jpg'
import Hinamatsuri from './assets2/HinamatsuriWallpaper.jpg'
import barakamon from './assets2/BarakamonWallpaper.jpg'
import Spacedandy from './assets2/SpacedandyWallpaper.jpg'
import Nichijou from './assets2/NichijouWallpaper.jpg'
import GoldenBoy from './assets2/GoldenBoyWallpaper.jpg'
import Grandblue from './assets2/GrandblueWallpaper.jpg'
import FLCL from './assets2/FLCLWallpaper.jpg'
import Kimi from './assets/KimiWallpaper.png'
import Sobre from "./pages/Sobre/sobre";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Carregamento/>}/>
        <Route path="/inicio"  element={<Inicio/>}/>
        <Route path="/naruto"  element={<Filmes imgAnime={naruto} sinopse='Naruto é um anime baseado no mangá de mesmo nome escrito por Masashi Kishimoto. A série gira em torno das aventuras vividas por Naruto Uzumaki, um jovem órfão habitante da Aldeia da Folha que sonha em se tornar o quinto Hokage, o maior guerreiro e governante da vila.' linkAnime='https://embed.warezcdn.net/serie/tt0409591'/>}/>

        <Route path="/onepiece" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt0388629' sinopse='One Piece (ワンピース Wan Pīsu?) é uma série de mangá escrita e ilustrada por Eiichiro Oda. Os capítulos têm sido serializados na revista Weekly Shōnen Jump desde julho de 1997, com os capítulos compilados e publicados em 105 volumes tankōbon pela editora Shueisha até março de 2023. One Piece conta as aventuras de Monkey D. Luffy, um jovem cujo corpo ganhou as propriedades de borracha após ter comido uma fruta do diabo acidentalmente. Com sua tripulação, os Piratas do Chapéu de Palha, Luffy explora a Grand Line em busca do tesouro mais procurado do mundo, o "One Piece", a fim de se tornar o próximo Rei dos Piratas.' imgAnime={onepiece}/>}/>


        <Route path="/deathnote" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt0877057' sinopse='Um estudante de repente encontra um caderno que caiu do céu. Trata-se do Death Note, que permite ao seu portador matar qualquer pessoa a partir da mera anotação do nome do alvo em uma de suas páginas. Sob a influência de Ruyk, dono do caderno, ele passa a usá-lo para eliminar criminosos e pessoas que escaparam da justiça. A súbita onda de assassinatos faz com que ele seja endeusado por muitos, que o apelidam de Kira, mas também atrai a atenção de um enigmático e brilhante detetive, chamado L.' imgAnime={death}/>}/>

        <Route path="/sao" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt2250192' sinopse='A história começa com o lançamento do esperado jogo Sword Art Online (SAO), um jogo que, usando a tecnologia do “Nerve Guear”, os jogadores controlam os seus avatares dentro do jogo apenas usando o seu pensamento, ficando o corpo no “mundo real” como se estivesse a dormir.' imgAnime={sword}/>}/>

        <Route path="/cavaleiros" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt0161952' sinopse='O enredo se concentra em um órfão chamado Seiya, forçado a ir ao Santuário na Grécia para obter a Armadura de Bronze de Pégaso, uma veste usada pelos 88 guerreiros da deusa grega Athena, conhecidos como Cavaleiros.Após despertar o poder dos Cavaleiros, que é uma essência espiritual chamada de Cosmo (que se originou com o Big Bang), Seiya rapidamente se torna o Cavaleiro de Pégaso e retorna ao Japão para encontrar sua irmã mais velha, pois esta havia desaparecido no mesmo dia em que ele foi ao Santuário.' imgAnime={cavaleiros}/>}/>


        <Route path="/onepunchman" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt4508902' sinopse='A história se passa em cidades japonesas fictícias, especialmente na chamada de Cidade Z, onde aparecem com grande frequência seres monstruosos que causam vários desastres. Após treinar durante três anos, Saitama, o protagonista, se tornou um herói não oficial incrivelmente forte que derrota monstros ou outros vilões com um único soco. No entanto, devido à sua força esmagadora, Saitama tornou-se entediado e está constantemente tentando encontrar adversários mais fortes que podem lutar de igual contra ele.' imgAnime={onepunch}/>}/>


        <Route path="/boruto" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt6342474' sinopse='Boruto: Naruto Next Generation acompanha Boruto Uzumaki, filho do sétimo Hokage da Aldeia da Folha, Naruto. O jovem sente certo ressentimento pelo pai por ele sempre ter colocado os interesses da aldeia antes da família. Mas mesmo incomodado com as atitudes do pai, ele decide seguir os mesmos caminhos como ninja.' imgAnime={boruto}/>}/>
      
        <Route path="/bakicampeao" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt6357658' sinopse='Enquanto o campeão de artes marciais Baki Hanma treina duro para superar seu lendário pai, cinco presos violentos do corredor da morte descem sobre Tóquio para enfrentá-lo.
        - (Nota: Apesar de não enumerar, esta é na verdade a terceira adaptação em anime. Há outras duas temporadas anteriores. Grappler Baki e Grappler Baki: Saidai Tournament-hen, ambos de 2001).' imgAnime={baki}/>}/>

        <Route path="/castlevania" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt6517102' sinopse='Um caçador de vampiros luta para salvar uma cidade sitiada por um exército de criaturas controladas pelo próprio Drácula. Inspirado no clássico videogame. Assista o quanto quiser.' imgAnime={castlevania}/>}/>

        <Route path="/cyberpunk" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt12590266' sinopse='Para sobreviver em uma realidade distópica na qual a corrupção e os implantes cibernéticos controlam tudo, um jovem talentoso e impulsivo decide se tornar um mercenário.' imgAnime={cyber}/>}/>

        <Route path="/monster" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt0434706' sinopse='A trama gira em torno de Kenzo Tenma, um cirurgião japonês que vive na Alemanha cuja vida é abalada após se ver no caminho de Johan Liebert, um de seus ex-pacientes, que se revela um serial-killer psicótico.' imgAnime={monster}/>}/>

        <Route path="/attackontitan" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt2560140' sinopse='Para escapar dos titãs, gigantes devoradores de homens, a humanidade se refugiou em cidades cercadas por enormes muralhas. Quando eles voltam a atacar, Eren Yeager se junta à luta para combater as criaturas' imgAnime={attack}/>}/>
      
        <Route path="/categorias" element={<Categorias/>} />

        <Route path="/bokuragaita" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt2147761' sinopse='Takahashi Nanami acaba de começar o secundário. Em sua classe, há um menino muito popular, que dizem ter conquistado 2/3 das meninas da escola, Motoharu Yano. Depois de um tempo, Yano e Takahashi começam a namorar, mas muitos problemas começam a surgir entre eles.' imgAnime={bokura}/>}/>

        <Route path="/ookami-san" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt1685410' sinopse='Akai Ringo é uma garota baixinha do primeiro ano do colégio que parece fofinha, com uma aparência angelical, más um comportamento obscuro (seu nome é um jogo de palavras japonêsas com "maçã" e "chapéuzinho vermelho"). Juntas com os seus estranhos amigos, as duas lutam para mudar o mundo, uma questão de cada vez.' imgAnime={okami}/>}/>

        <Route path="/nisekoi" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt3115338' sinopse='Nisekoi conta a história do estudante do ensino médio, Raku Ichijou, filho de um líder da facção yakuza Shuei-Gumi, e Chitoge Kirisaki, a filha de um chefe de uma gangue rival conhecida como Colmeia. Eles inesperadamente se encontram quando Chitoge pula de um muro e dá uma joelhada no rosto de Raku.' imgAnime={nisekoi}/>}/>

        <Route path="/relife" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt5857720' sinopse='A série conta a história de Arata Kaizaki, um homem de 27 anos, que permanece desempregado após abandonar seu último emprego depois de apenas 3 meses de trabalho, alegando que ele "não exige seu potencial máximo".' imgAnime={relife}/>}/>

        <Route path="/SchoolRumble" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt0878036' sinopse='Tenma Tsukamoto é uma estudante do ensino médio que, assim como outras garotas de sua idade, se apaixona. Contudo, ela não consegue confessar seu amor para o seu colega de classe Karasuma. Ela descobre que ele vai se transferir para outra escola no próximo ano e, com a ajuda de suas amigas, tenta confessar seu amor.' imgAnime={SchoolRumble}/>}/>

        <Route path="/clannad" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt1118804' sinopse='A história do jogo é inteiramente contada através dos olhos de Tomoya Okazaki, um estudante delinquente que não sente mais prazer na vida. Em um passado recente, ele vivia brigando violentamente com o pai e, por isso, acabou desenvolvendo feridas físicas e mentais que prejudicaram bastante a sua vida escolar.' imgAnime={clannad}/>}/>

        <Route path="/TokyoRevengers" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt13196080' sinopse='Enredo de Tokyo Revengers
        Com uma linha temporal alterada, Tokyo Revengers é um anime repleto de viagem no tempo e gangues juvenis. Na animação japonesa, um jovem-adulto virgem de 26 anos chamado Takemichi passa por uma experiência de quase-morte ao ser empurrado em direção a um trilho de trem.' imgAnime={TokyoRevengers}/>}/>

        <Route path="/VinlandSaga" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt10233448' sinopse='Vinland Saga é uma criação de Makoto Yukimura e acontece no ano de 1013, onde acompanhamos a jornada de Thorfinn em busca de vingança. Ele trabalha para Askeladd, mas na verdade, seus planos são de um dia desafiar o viking para um duelo e finalmente matá-lo, fazendo assim justiça contra o homem que matou seu pai.' imgAnime={VinlandSaga}/>}/>
      
        <Route path="/JujutsuKaisen" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt12343534' sinopse='O jovem Yuta Okkotsu ganha o controle de um espírito extremamente poderoso, então um grupo de feiticeiros o matriculam na Tokyo Prefectural Jujutsu High School, para ajudá-lo a controlar esse poder e também para ficar de olho nele.' imgAnime={jujutsu}/>}/>

        <Route path="/SpyxFamily" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt13706018' sinopse='O habilidoso espião “Twilight” é instruído a construir uma “família” para se infiltrar em uma tradicional instituição de ensino. Mas a “filha” que ele encontra é uma paranormal que lê mentes! E a “esposa” é uma assassina?!
        Ocultando um do outro suas identidades, essa família temporária terá de enfrentar os perigos dos exames de admissão e do mundo em uma espirituosa comédia doméstica!!' imgAnime={SpyxFamily}/>}/>

        <Route path="/Eighty-Six" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt13718450' sinopse='Os humanos estão enfrentando uma Guerra brutal contra as máquinas há 9 anos e, para que a República de San Magnólia e seus 85 distritos fiquem em segurança, o governo e as forças militares mantém um terrível segredo sobre as frentes do campo de batalha.' imgAnime={EightySix}/>}/>

        <Route path="/fairytail" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt1528406' sinopse='A história segue as aventuras de Lucy Heartfilia, uma jovem maga que sonha em se tornar escritora e Natsu Dragneel, um mago adolescente que é membro da popular guilda de feiticeiros Fairy Tail que está a procura do dragão Igneel.' imgAnime={fairytail}/>}/>

        <Route path="/zeronotsukaima" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt0978553' sinopse='Zero no Tsukaima conta as aventuras de Saito e Louise que, juntos, ajudam seus colegas e amigos, enquanto ocasionalmente enfrentam situações que arriscam suas vidas para salvar um ao outro.' imgAnime={zeronotsukaima}/>}/>

        <Route path="/KenjaNoMago" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt9828724' sinopse='Kenja no Mago conta a estória de Shin, um garoto de 15 anos que vive com seu avô adotivo em uma floresta e aprende a usar magia. Acontece que o anime não começa exatamente aí: o anime começa com Shin na nossa era, porém ele morre atropelado em um acidente e, quando renasce, aí sim ele está com seu avô.' imgAnime={KenjaNoMago}/>}/>

        <Route path="/Radiant" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt9225320' sinopse='Seth é um garoto da área de Pompo Hills que deseja se tornar um grande feiticeiro. Como todos os feiticeiros, ele é um “infectado”, um dos poucos seres vivos que sobreviveram ao contato com os Nêmesis, os monstros que caem do céu dessa terra mística, contaminando e dizimando tudo o que tocam.' imgAnime={Radiant}/>}/>

        <Route path="/LogHorizon" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt2942218' sinopse=' A história começa quando 30.000 japoneses ficam presos dentro de um jogo online chamado Elder Tale. O que outrora era um mundo de fantasias, agora é real. O protagonista Shiroe luta para sobreviver com seu velho amigo Naotsugu e a bela assassina Akatsuki.' imgAnime={LogHorizon}/>}/>


        <Route path="/osomatsu-san" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt4838372' sinopse=' O manga original e o anime de “comédia de alta tensão” centram-se no lar de Matsuno, que tem seis filhos (gémeos) perversos e traquinas . Todos eles , incluindo o mais velho, Osomatsu, estão apaixonados pela mesma rapariga, Totoko. A série original seguia a família quando os filhos tinham 10 anos.' imgAnime={osomatsusan}/>}/>


        <Route path="/Hinamatsuri" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt8253044' sinopse='Nitta, da máfia japonesa Yakuza tem uma grande surpresa quando um objeto misterioso cai sobre ele e uma menina com super poderes aparece em seu campod e visão. A partir diss, Nitta precisa tomar uma grande decisão: usá-la como sua aliada ou tentar se livrar dela de qualquer forma.' imgAnime={Hinamatsuri}/>}/>

        <Route path="/barakamon" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt3660104' sinopse='Como alguém que nunca viveu fora de uma cidade, Handa tem de se adaptar aos seus novos vizinhos malucos, como pessoas que viajam em um trator, visitantes indesejados que nunca usam a porta da frente, crianças irritantes usando sua casa como um playground, etc.' imgAnime={barakamon}/>}/>

        <Route path="/Spacedandy" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt3158246' sinopse='A série de ópera espacial narra as aventuras de Dandy, um caçador de alienígena que é um "dândi no espaço", que busca alienígenas não descobertos e raros, com seu robô assistente QT e um alienígena gato chamado Meow.' imgAnime={Spacedandy}/>}/>

        <Route path="/Nichijou" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt2098308' sinopse='Nichijou conta a vida cotidiana de vários alunos do colegial da cidade de Tokisadame (時定市 Tokisadame-shi). Apesar de coisas absurdas como uma garota robô e um gato que fala, todos os personagens levam uma vida normal.' imgAnime={Nichijou}/>}/>

        <Route path="/GoldenBoy" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt0159145' sinopse='A obra conta a história de Kintaro Ooe, um freeter de 25 anos, "estudante viajante", que embora tinha os requerimentos para se formar em direito, deixou a Universidade de Tokyo sem se graduar. Kintaro vive livremente, viajando pelo Japão de cidade em cidade e de emprego a emprego.' imgAnime={GoldenBoy}/>}/>


        <Route path="/Grandblue" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt8086718' sinopse=' Uma nova vida começa para Kitahara Iori, ele ingressa na faculdade perto do mar na cidade de Izu, emocionado por um novo começo, ele se muda para casa do seu tio, uma loja de mergulho chamada “Grand Blue.” Lá, ele encontra um lindo oceano, belas mulheres, e os homens que gostam de mergulho e álcool….' imgAnime={Grandblue}/>}/>

        <Route path="/Grandblue" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt8086718' sinopse=' Uma nova vida começa para Kitahara Iori, ele ingressa na faculdade perto do mar na cidade de Izu, emocionado por um novo começo, ele se muda para casa do seu tio, uma loja de mergulho chamada “Grand Blue.” Lá, ele encontra um lindo oceano, belas mulheres, e os homens que gostam de mergulho e álcool….' imgAnime={Grandblue}/>}/>

        <Route path="/FLCL" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt0279077' sinopse=' Progressive conta a história de Hidomi, de 14 anos, sua colega de classe Ide e dois seres de outro mundo  “Jinyu” e “Haruha Raharu,”  que estão dispostos a tudo para destravar seu potencial oculto.' imgAnime={FLCL}/>}/>

        <Route path="/Kimi" element={<Filmes linkAnime='https://embed.warezcdn.net/serie/tt12331304' sinopse='  Kimi to Boku no Saigo no Senjou, Arui wa Sekai ga Hajimaru Seisen: Está decorrendo uma grande guerra há anos entre o Império cientificamente avançado e Nebulis, o reino das meninas mágicas, até que o cavaleiro mais jovem a receber o título de mais forte do Império encontra a princesa da nação rival.' imgAnime={Kimi}/>}/>


        <Route path="/Sobre" element={<Sobre/>}/>



      
      </Routes>

      
      
    </BrowserRouter>
      
  )
}

export default App;
