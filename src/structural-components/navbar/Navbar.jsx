import './Navbar.css';
import sonatrach from '../../asset/sonatrach.svg'
import userToggler from '../../asset/user.svg'

const Navbar = () => {
    return (
        <>
            <a href="/" className="nav-icon"
                aria-current="page" aria-label="Sonatrach">
                <img src={sonatrach} alt="logo sonatrach" />
                <span>Wimo</span>
            </a>
            <div className="main-navlinks">
                <button className="hamburger"
                    type='button' aria-expanded="false">
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
                    aria-label='connexion'>
                    <img src={userToggler} alt="user toggler" />
                </a>
                <div className="btns-container">
                    <button type='button'>Connexion</button>
                    <button type='button'>Inscription</button>
                </div>
            </div>
        </>
    )
}

export default Navbar