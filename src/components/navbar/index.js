import '../../index.css'
import btn from '../scrip';



function Nome() {
  
  return (
    
   
      <header>
        <nav className='navigation'>
          <a href='#' className='logo'> C<span>K</span></a>

          <ul className='nav-menu'>
            <li className='mav-item'><a href=''>Home</a></li>
            <li className='mav-item'><a href=''>About </a></li>
            <li className='mav-item'><a href=''>Produtos</a></li>

            <span className='pesquisa'>
              <input type='search' className='pesquisa-input' disabled/>
              <i className="fa-sharp fa-solid fa-magnifying-glass voa"></i>
            </span>
            
          </ul>

          <div className='menu'>

            <button onClick={btn}>
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
              
            </button>
          </div>

        </nav>
      </header>

    
  );
}

export default Nome;