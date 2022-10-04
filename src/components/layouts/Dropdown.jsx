import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
const Dropdow = ({lista}) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const listaDrop = lista.map((categoria, indice) => 
      <Link key={indice} className='dropdown-item' to={`/categoria/${indice + 1}`}>{categoria}</Link>
    )
    setList(listaDrop)
    
  }, []);
   

    return (
        <>
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle btn btn-dark" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Filtrar</button>
          <div className="dropdown-menu">
            {list}
          </div>
          </li>  
        </>
    );
}

export default Dropdow;
