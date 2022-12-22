import Cart from "../assets/img/compra.png"

export default function CartWidget(){
    return(
        <div className="cart">
            <img  src={Cart} alt="Carrito"></img>
            <span>6</span>
        </div>

    );
}