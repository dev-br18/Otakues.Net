import { useNavigate} from 'react-router-dom';

import './button.css'

function BotaoPlayer(props){
    const navigate = useNavigate()

    function handleClick() {
    navigate(props.endereco);
  }
    
    return <button onClick={handleClick} className="buttonCard">{props.txt}</button>
}


export default BotaoPlayer;