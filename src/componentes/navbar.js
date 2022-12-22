import "./navbar.css"
import CartWidget from "./cartWidget";
import Logo from "../assets/img/cplant.png"

function Header(){
    return(
        <header className='header'>
            <div className="logo">
                <a href='index.js'>
                <div className="logo2">
                    <img  src={Logo} alt="Logo"></img>
                </div>
                    <p className='nombreBrand'> BePlant </p>
                </a>
            </div>
            <div className='navbar'>
                <a href='index.js' className='menuEnlace'> INICIO </a>
                <a href='index.js' className='menuEnlace'> SEMILLAS </a>
                <a href='index.js' className='menuEnlace'> PLANTAS </a>
                <a href='index.js' className='menuEnlace'> MACETAS </a>
                <a href='index.js' className='menuEnlace'> CONTACTO </a>
            </div>
            <div>
                <CartWidget />
            </div>
        </header>

    );
}

export default Header;