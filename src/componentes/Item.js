import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


    const ListadeProductos = ({ productosGuardados }) => {  
            return (
                
        <>
        {productosGuardados.map((articulo) => 
        (<div key={articulo.id} className='col col-lg-4
         col-md-6 col-sm-8'>
            <div  className='card' >
            <div className='contenerdorTexto'>
            <img className='imagencard'  src={articulo.img} alt='fotos'></img>
            <p  className='nombre'>{articulo.marca}</p>
            <p className='precio'>{articulo.precio}</p>
           <button ><Link className='nav-link ' to={`/detail/${articulo.id}`}> VER MAS </Link></button> 
            </div>
        </div>  
        </div>
        ))}
        </>   
    )}

        

    


export default ListadeProductos;