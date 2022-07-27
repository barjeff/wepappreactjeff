import Contador from './Itemcontador'
import { useState, useContext } from 'react'
import CartContex from './CartContex'
import { Link } from 'react-router-dom'


const ItemDetail = ({ id, marca, precio, img, descripcion, stock }) => {
    const { agregarItem } = useContext(CartContex)
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const handleOnAdd = (cantidad) => {
        console.log(`se agregaron ${cantidad} ${marca}`)
        agregarItem({ id, marca, precio, descripcion, cantidad, img })
        setCantidadAgregada(cantidad)
    }

    return (
        <>
            <div className='  col coldetail col-lg-8 col-md-10 col-sm-6'>
                <div className='cards carddetail d-flex  ' >
                    <div className='imgdetail'>
                        <img className='imagencard' src={img} alt='fotos'></img>
                    </div>
                    <div className='contenerdorTextoB'>
                        <h3 className='nombre'>{marca}</h3>
                        <div className='textdescripcion'> <p className='descripcion'>{descripcion}</p></div>
                        <p className='precio'> Precio: <b>{precio} ars.</b></p>
                        {cantidadAgregada === 0
                            ? <Contador stock={stock} initial={1} onAdd={handleOnAdd} />
                            : <Link to='/carrito'> terminar compra</Link>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;