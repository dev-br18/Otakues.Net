import './carregamento.css'
import img from  './assets/player branco.png'
import React, { Fragment, useEffect ,useState} from 'react';
import { useNavigate} from 'react-router-dom';

function Carregamento() {
    const navigate = useNavigate();

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        navigate('/inicio');
      }, 3000);
      return () => clearTimeout(timeoutId);
    }, [navigate]);
  return (
    <Fragment>
    <div className="caixa">
      <div className="container">
        <h1 className='title'>Otakus.Net</h1>
        <img className='img' src={img} alt="" />
     </div>
     <div className='loading'></div></div>
    
    </Fragment>
  )
}

export default Carregamento;