import Login from "./Login"
import Register from "./Register"
import { useContext } from "react";
import CartContex from "./CartContex"

const Ingreso = () => {
    const { usuario, datausuario, handleLogout } = useContext(CartContex);

    return (
        <div className="container containergoutlogin">

            {usuario
                ? <div>
                    <h3 className="hCompraExitosa" > Ya has iniciado Sesion  </h3>
                    <table class="table ">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">Nombre</th>
                                <th scope="col">correo</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-light">
                                <td>{usuario.displayName || datausuario.nombre}</td>
                                <td>{usuario.email}</td>
                                <td><button onClick={handleLogout}>Logout</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                : <div className="row rowlogoutlogin ">
                <div className="col-lg-5 col-sm-8 cologoutlogin">
                    <Register />
                </div>
                    <div className="col-lg-5 col-sm-8 cologoutlogin">
                        <Login />
                    </div>
                </div>
            }
        </div>

    )
}


export default Ingreso