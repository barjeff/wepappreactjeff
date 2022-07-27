

    import { useState,useContext } from "react"
    import CartContex from "./CartContex"
    import  {useNavigate} from 'react-router-dom'
    import { async } from "@firebase/util"
    
    const Login = ()=> {
        const [error,setError] = useState('')
    const {login,loginwitgoogle,carrito } = useContext(CartContex)
    const navigate = useNavigate(CartContex)
    
    const [user, setUser] = useState({
        email: '',
        password:'',
    })
    const handleloginOnChange =( event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({...values, [name]: value}))
        
    }
    const handlelogin = async (e) => {
        e.preventDefault()
        console.log(user)
        setError('')
        try {
          await  login(user.email,user.password)
          if (carrito.length >= 1) {
            navigate('/checkout')
          
          } else {
            navigate('/')
          }
            
        } catch (error) {
            
         
            
        }
    }
    const handlegoogle = async ()=>{
        try {
         await loginwitgoogle()
         if (carrito.length >= 1) {
            navigate('/checkout')
          
          } else {
            navigate('/')
          }
        } catch (error) {
            setError(error.code)
        }
    }
        return (
            <div  className="d-flex containerform">
      
                {error && <p><b>{error}</b></p>}
                <form className=" formloginlogout"  onSubmit={handlelogin}>
                    <div><h3> Login</h3></div>
                    <div>
                    <label className="labelinput"  htmlFor="email">Email</label>
                    <input className="input" type='text' name="email" id="email" placeholder="youremail@gmail.com" onChange={handleloginOnChange}/>
                    <label className="labelinput"  htmlFor="password">Password</label>
                    <input className="input" type='password' name='password' id="password" onChange={handleloginOnChange}/>
                    </div>
                    <button> Login </button>
                    <button onClick={handlegoogle}> Login wit Google</button>
                </form>
                    
            </div>
        )
    }
    
   

export default Login