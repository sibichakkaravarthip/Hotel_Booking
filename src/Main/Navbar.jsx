import { Link } from 'react-router-dom';
import './Main.css';

export function Navbar(){
    return(
        <>
        <div className="cont">
        <div className="logo">
            <h1>StayComfort</h1>
        </div>
        <div className="nav">
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </nav>
                <button className="/login" ><Link to="login">Login</Link></button>
                <button className="/Singin"><Link to="singin">SingIn</Link></button>
        </div>

        </div>
        </>
    )
}

