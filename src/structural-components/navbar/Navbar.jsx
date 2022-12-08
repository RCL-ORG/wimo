import './Navbar.css'
import sonatrach from '../../asset/sonatrach.svg';
import user from '../../asset/user.svg';

const Navbar = () => {
    return (
        <nav>

            <a href="/" className="nav-icon"
                aria-current="page"
                aria-label='GG'>
                <img src={sonatrach} alt="sonatrach" />
                <span>Wimo</span>
            </a>

            <div className="main-navlinks">
                <button className="humburger" type="button"
                    aria-label="navigation" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="navlinks-container">
                    <a href="/" aria-current="page">Principale</a>
                    <a href="/">Exemple</a>
                    <a href="/">Exemple</a>
                    <a href="/">Exemple</a>
                    <a href="/">Exemple</a>
                </div>
            </div>
            <div className="nav-authentication">
                <a href="/" className="user-toggler"
                    aria-label="connexion">
                    <img src={user} alt="connexion" />
                </a>
                <div className="btns-container">
                    <button type="button">Connexion</button>
                    <button type="button">Inscription</button>
                </div>
            </div>



        </nav>
    )
}

export default Navbar;