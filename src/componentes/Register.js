import { useState,useContext } from "react"
import CartContex from "./CartContex"
import  {useNavigate} from 'react-router-dom'
import { async } from "@firebase/util"

const Register = () => {
    const [error,setError] = useState('')
const {singup} = useContext(CartContex)
const navigate = useNavigate(CartContex)

const [user, setUser] = useState({
    email: '',
    password:'',
})
const handleRegisterChange =( event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser(values => ({...values, [name]: value}))
    
}
const handleRegistersubmit = async (e) => {
    e.preventDefault()
    console.log(user)
    setError('')
    try {
      await  singup(user.email,user.password)
        navigate('/')
    } catch (error) {
        setError(error.code)
     
        
    }
    
}
    return (
        <div  className=" d-flex containerform">
          
            {error && <p><b>{error}</b></p>}
            <form className=" formloginlogout" onSubmit={handleRegistersubmit}>
                <div><h3>Registro</h3></div>
                <div>
                <label className="labelinput"  htmlFor="email">Email</label>
                <input className="input"type='text' name="email" id="email" placeholder="youremail@gmail.com" onChange={handleRegisterChange}/>
                <label className="labelinput" htmlFor="password">password</label>
                <input className="input" type='password' name='password' id="password" onChange={handleRegisterChange}/>
                </div>
                <button> enviar</button>
            </form>
        </div>
    )
}

export default Register