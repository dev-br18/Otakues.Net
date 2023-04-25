import { useNavigate} from 'react-router-dom';

import './button.css'

function Botao(props){
    const navigate = useNavigate()

    function handleClick() {
    navigate(props.endereco);
  }
    
    return <a href={props.link}><button onClick={handleClick} className="botao">{props.txt}</button></a> 
}


export default Botao;