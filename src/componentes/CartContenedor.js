import ItemCartList from "./ItemCartList";
import { useContext, useState} from "react";
import CartContex from "./CartContex";
import { Link } from "react-router-dom";


const CartContenedor =() =>  {
    const {carrito}  = useContext(CartContex)
    const {vaciarCarrito}  = useContext(CartContex)
    const {getTotalPrice}  = useContext(CartContex)
    const total = getTotalPrice()
    const {handleOrders} = useContext(CartContex)
  

    return (
        <div className="container container-fluid contenedorCarrito">
             <div className='row' >
        
                {
                carrito.length > 0 
            ?       <div>
              
                <table class="table">
                <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Cantidad</th>
            <th scope="col">productos</th>
            <th scope="col">Precio</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
                <ItemCartList carrito={carrito}/>
                <tr>
            <th></th>
            <th></th>
            <th>Total</th>
            <th>
            {total}    
             </th>
           </tr>
        </tbody>
        </table>
                <div className=" row rowButton">
                <div className="col colbutton"><button classname="btnCompra" onClick={vaciarCarrito}> Vaciar carrito</button></div>
                 <div className="col colbutton"><Link to='/checkout'><button>checkout</button></Link></div>
                </div>
                  </div>

            :       <div>
                <h1 className="hcartcontainer" >No hay productos</h1>
                <Link to='/'><button>IR A HOME</button></Link>
                </div>
                }
            </div>
    </div>
            )
}




export default CartContenedor