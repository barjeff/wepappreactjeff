import { useContext } from "react";
import CartContex from "./CartContex";

const ItemCartList = ({ carrito }) => {
    const { deleteItem } = useContext(CartContex)

    return (
        <>
            {carrito.map((articulo) =>
            (<tr key={articulo.id} className=' carditemcarrito   col col-lg-3 col-md-6 col-sm-7'>
                <th ><img className="imagenCart" src={articulo.img} /></th>
                <td>{articulo.cantidad}</td>
                <td className='nombre'>{articulo.marca}</td>
                <td className='precio'>{articulo.precio}</td>
                <td> <button onClick={() => { deleteItem(articulo.id) }}> Eliminar Item</button></td>

            </tr>))}
        </>
    )
}


export default ItemCartList