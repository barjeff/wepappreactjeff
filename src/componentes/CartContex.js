import Swal from 'sweetalert2'
import React, { useState,useEffect, createContext,useRef } from 'react'
import { addDoc, collection, writeBatch, getDocs, query, where, documentId, doc, updateDoc,deleteDoc } from 'firebase/firestore'
import { auth, db } from './services/index'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut,GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import { async } from '@firebase/util';

const CartContex = createContext()

export const CartProvider = ( { children}) => {
  const [productosGuardados,setProductos] = useState([])
  const renderRef = useRef(0)
  const [cantidad,setCantidad] = useState(0)
  const [datausuario,setDatausuario] = useState({})
   const [carrito,setCarrito] = useState([])

  const alertStates = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Felicidades compra realiza con exito',
      showConfirmButton: false,
      timer: 1500
  })
  }
 
 
  useEffect(()=> {
      const cartLocalStorage = localStorage.getItem('cart')
      const parseDataLocal = JSON.parse(cartLocalStorage)
      setCarrito(parseDataLocal)
  },[])

  useEffect(()=> {
    if(renderRef.current > 0) {
      localStorage.setItem('cart',JSON.stringify(carrito))
    }
    renderRef.current += 1 
  },[carrito])

 

useEffect(() =>{
  let cantidad = 0 
  carrito?.forEach(articulo => {
      cantidad += articulo.cantidad
  });
  setCantidad(cantidad)
},[carrito])

  const agregarItem = (productoParagregar) => {
      if (!carrito.some(articulo => articulo.id === productoParagregar.id)) {
        setCarrito([...carrito,productoParagregar])
      }
    }

  const deleteItem = (ide) => {
    const productosNoEliminados = carrito.filter(art => art.id !== ide)
  
    setCarrito(productosNoEliminados)
  }

  const vaciarCarrito = () => {
    const cartvacio = []
    setCarrito( cartvacio)
  }

  const getTotalPrice =() => {
    let total = 0
    carrito?.forEach(prod =>{
      total += prod.cantidad * prod.precio
    })

    return total
  }


  /** CHEKOUT  **/

  const [idCompra, setId] = useState('')
  
  const [inputs, setInputs] = useState( {
    nombre: '',
    direccion: '',

});

const [display,SetdisplayNone] = useState("d-none")
const [values,setValues]= useState("")

const filtrarUser = (response) => {
  let filtered = productosGuardados.filter( (articulo) => (articulo.marca).toLowerCase().includes(response))
    if (filtered.length < 0 ) {
     return filtered = []

    } else {
      setProductos(filtered)
    
    }
 
}
 
const handleOnChange =(e)=> {
 setValues(...values,e.target.value)
 filtrarUser(values)

}

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))
}

const handleOrders = async () => {
 /*deleteDoc(doc(db, "orders", ""));
 const docRef = doc(db, 'productos', 'Wa3GKNVyNKlmqZoXQhai')

 await updateDoc(docRef, { stock: 50 }) */
} 

const [loading, setLoading] = useState(false);
const total = getTotalPrice()

const handleSubmit = (event) => {
  setLoading(true)
  event.preventDefault();
  const datosOrder =  {
        comprador: {
            nombre:(inputs.nombre) ,
            direccion:(inputs.direccion),
           
        },
        items:carrito,
        total: total
    }

    const batch = writeBatch(db)
    const outOfStock = []
    const idCart = carrito.map(prod => prod.id)
    const collectionRef = collection(db, 'productos')
  

    getDocs(query(collectionRef,where(documentId(),'in', idCart)))
      .then(response => {
       
        response.docs.forEach(doc => {

          const dataDoc = doc.data()
          const prod = carrito.find(prod => prod.id === doc.id)
          const productCantidad = prod.cantidad
          
          if(dataDoc.stock >= productCantidad) {
            batch.update(doc.ref, { stock: dataDoc.stock - productCantidad})
          } else {
            outOfStock.push({id: doc.id,...dataDoc})
          }
        })

      }).then(()=> {
        if(outOfStock.length === 0) {

          const collectionRef = collection(db, 'orders')
          return addDoc(collectionRef, datosOrder)

        }else {
          return Promise.reject({type: 'out_of_stock',products: outOfStock})
        }

      }).then(({id}) => {
          batch.commit()
          setId(id)
          setDatausuario(datosOrder.comprador)
          vaciarCarrito()
      }).catch(error => {
          if(error.type === 'out_of_stock') {
            console.log('no hay stock')
          } else {
            console.log(error)
          }
         }).finally(() => {
          setLoading(false)
      })
      } 


      /** LOGIN */
      
    const [usuario, setUser] = useState(null)
   

     const singup = (email,passeword) => { 
      return createUserWithEmailAndPassword (auth,email,passeword);
     }
     const login = (email,passeword) => { 
      return signInWithEmailAndPassword (auth,email,passeword);
     }
     const logout = ()=> {
      signOut(auth)
     }
     useEffect (()=> {
      const unsubuscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
      
      })
      return ()=> unsubuscribe();
    },[])

    const loginwitgoogle =()=> {
     const googleProvider = new GoogleAuthProvider()
     return signInWithPopup(auth,googleProvider) 

    }
    
    const handleLogout = async ()=> {
      try {
          await logout();
        } catch (error) {
          console.error(error.message);
        }
      };
  
    const clickLoginlogout = () => {
      const display =  'flex'
      const displays = display ? 'flex containerLogut ' : 'd-none'
      SetdisplayNone(displays)
    }
    return (
        <CartContex.Provider value={{
          handleLogout,
          display,
        clickLoginlogout,
          loginwitgoogle,
          agregarItem,
        deleteItem,
        cantidad,
        vaciarCarrito,
        getTotalPrice,
        handleChange,
        handleSubmit,
        inputs,
        idCompra,
        handleOrders,
        filtrarUser,
        handleOnChange,
        productosGuardados,
        setProductos,
        display,
        alertStates,
        datausuario,
        singup,
        login,
        usuario,
        carrito,
        logout,
        loading}}>
            {children}
        </CartContex.Provider>
    )
}
   

export default CartContex