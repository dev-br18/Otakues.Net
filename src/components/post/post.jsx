
import BotaoPlayer from '../button/buttonPlayer';
import './post.css'

function Post(props){
    return(
        <div className="Card">
            <img className='imgCard' src={props.img} alt="" />
            <p className="cardTitle">{props.title}</p>
            <div className='centralizar'>
                <BotaoPlayer endereco={props.endereco} txt={props.txt}/>
            </div>
            
        </div>
    )
}


export default Post;