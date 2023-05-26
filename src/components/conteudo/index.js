import './conteudo.css'
import Fone from '../images/fone.png'
import SSD from '../images/ssd.png'
import Nome from '../navbar';

function Conteudo({produto, titulo, descricao, especificacao}) {
    return (
      <div>
        <div className='centralizar'>
          <h1><u>Produtos Disponíveis</u></h1>
          
          <div className='box1'>
            <div className='produto'>
              <img src={produto} alt={titulo} className='produtos'/>
               </div>
            <div className='Informacao'>
            <h2>{titulo}</h2>
              <br></br>
              <p>
              <strong><u>Descrição:  </u></strong>
               
               {descricao}
             
              <br></br>

              <u>Especificações:</u>
                {especificacao}
              </p>
            </div>  
          </div>

      
        </div>





      </div>
    );
  }
  
  export default Conteudo;