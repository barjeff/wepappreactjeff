import { Link } from 'react-router-dom';
import CartContex from "./CartContex";
import { useContext } from "react";

const NavSearch = () => {
  const { carrito, cantidad, handleOnChange, clickLoginlogout, handleLogout } = useContext(CartContex)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to='/' className="navbar-brand lia"  > HOME </Link>
              <Link to='/categoria/tablets' className="navbar-brand lia"  >Tablets</Link>
              <Link to='/categoria/celular' className="navbar-brand lia" >Celulares</Link>
              <Link to='/categoria/Notebook' className="navbar-brand lib"  >Notebook</Link>
            </ul>
            <div className="searchform" >
            <form className="d-flex searchform" role="search" onSubmit={handleSubmit}>
              <input className="form-control me-2" type='text' onChange={(e) => handleOnChange(e)} />
              <button className="btn btnseacrh btn-outline-success" type="submit">Search</button>
            </form>
            </div>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Login/logout
                <img src="../login.svg" alt='cart' className='CartImg' />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" onClick={handleLogout} >logout</a></li>
                <li><Link to='/ingreso' className="dropdown-item"  >Login</Link></li>
              </ul>
            </div>
            {carrito.length > 0
              ? <div className="CartWidget">
                <Link to='/carrito'><img src="../cart.svg" alt='cart' className='CartImg' /></Link>
                {cantidad}
              </div>
              : <> </>
            }
          </div>
        </div>
      </nav>
</>
)
}

export default NavSearch