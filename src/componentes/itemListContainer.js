import "./navbar.css"
import Icon from "../assets/img/soon.png"
export default function ItemListContainer(){
    return(
        <div className="greeting">
            <p className="bienvenida"> Bienvenidos a BePlant </p>
            <p className="proximamente"> Proximamente podras ver nuestros productos </p>

            <div className="icon">
                <img  src={Icon} alt="Icono"></img>
            </div>
        </div>

    );
}