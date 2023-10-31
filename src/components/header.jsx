
import { Link } from 'react-router-dom';
import Logo from '../assets/ms1.png';
export default function Header() {
    return (
       <>
           <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
              <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <img src={Logo} alt="React Logo" width="80" height="80" className="bi me-2 p-1"/>
                <span className="fs-4">Alphaqueb Consulting S.A.S.</span>
              </a>
              <ul className="nav nav-pills">
                <li className="nav-item"><Link to="/" className="nav-link active" style={{backgroundColor: '#6f42c1', color: '#fff'}} aria-current="page">Home</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="/users" className="nav-link">Users</Link></li>
              </ul>
           </header>

       </>
    )
}