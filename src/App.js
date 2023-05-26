import 'bootstrap/dist/css/bootstrap.min.css';

import Conteudo from './components/conteudo';
import itens from './Json/Db.json'
import Navzin from './components/navbar';
import Nome from './components/navbar';

function App() {
  return (
    <div >
      <Nome/>
      {itens.map((produtos) =>{
        return <Conteudo titulo={produtos.titulo} produto={produtos.produto} descricao={produtos.descricao} especificacao={produtos.especificacao} key={produtos.id}/>
      })}
    </div>
  );
}

export default App;
