import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import ListadeProductos from './Item';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from './services';
import CartContex from "./CartContex";
import { async } from '@firebase/util';

const ItemListContainer = () => {
    const [loading, setLoading] = useState(false)
    const { setProductos, productosGuardados, display, handleOrders, usuario, handleLogout } = useContext(CartContex)
    const { categoriaid } = useParams()
    useEffect(() => {
        setLoading(true)
        const collectionart = categoriaid ? (query(collection(db, 'productos'), where('categoria', '==', categoriaid)))
            : (collection(db, 'productos'))
        getDocs(collectionart)
            .then(respuesta => {
                const productosFireBase = respuesta.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setProductos(productosFireBase)
                /* localStorage.setItem('productos',JSON.stringify(productosFireBase)) */

            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })

    }, [categoriaid])

    if (loading) {
        return (
            <div>
                <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        
            <div>

            {
                categoriaid ? <div className='container containerHome container-fluid'>
                    <div className='row'>
                        <ListadeProductos productosGuardados={productosGuardados} />
                    </div>
                </div>
                    : <div>
                        <section id="teAyudamos" >
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <h2 class="display-4 hparallx font-weight-bold">Nuevo Galaxy S22+</h2>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className='container  container-fluid'>
                            <div className='row rowitemlist'>
                                <ListadeProductos productosGuardados={productosGuardados} />
                            </div>
                        </div>
                    </div>
            } 

            </div>
        
    )
}


export default ItemListContainer;