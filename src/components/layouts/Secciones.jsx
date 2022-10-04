import {Link} from 'react-router-dom'

const Secciones = () => {
    return (
        <>
          <li className="nav-item">
            <Link className="nav-link active" to="/"><button className='btn btn-dark'>Item list Container</button></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/contacto"><button className='btn btn-dark'>Contactos</button></Link>
        </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about"><button className='btn btn-dark'>About</button></Link>
        </li>
        </>
    );
}

export default Secciones;
