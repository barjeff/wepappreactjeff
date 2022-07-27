import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc,doc } from 'firebase/firestore';
import { db} from './services';

const ItemDetailContainer = () => {
    const [articulos,setarticulos] = useState ()
    const { detailProductid } = useParams()
   
    useEffect(()=>{
        const docArt = doc(db, 'productos',detailProductid )

        getDoc(docArt).then( doc => {
            const productoFireDetail = {id: doc.id, ...doc.data()}
            setarticulos(productoFireDetail)
        }).catch(error => {
            console.log(error)
        })
        },[detailProductid])
    

    return (
        <>
        <h1 className="hunoDetail"> Detalles del producto</h1>
        <div className="container containerDetail">

        <ItemDetail {...articulos}/>
        </div>
        </>
    )
}

export default ItemDetailContainer