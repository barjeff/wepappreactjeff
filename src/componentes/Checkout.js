
import { useContext } from "react";
import CartContex from "./CartContex";

const Checkout = () => {
  const { alertStates, carrito, idCompra, handleChange, handleSubmit, inputs, datausuario, usuario, loading } = useContext(CartContex)


  if (loading) {
    return (
      <div>
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
        <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }


  return (
    <>
      {
        carrito.length !== 0
          ? <div className="container container-fluid containerchek ">
            <div className=" d-flex containerchekout">

              <form className="divform " onSubmit={handleSubmit}>
                <div><p> <b>Llenar formulario para finalizar compra</b></p></div>
                <label >nombre:</label>
                <input className="input"
                  type="text"
                  name="nombre"
                  value={inputs.nombre || ""}
                  onChange={handleChange}
                />
                <label>direccion: </label>
                <input className="input"
                  type="text"
                  name="direccion"
                  value={inputs.direccion || ""}
                  onChange={handleChange}
                />


                <button className="label" type="submit"> Enviar Datos y Comprar</button>
              </form>
            </div>
          </div>
          : <div >
            {alertStates()}
            <div className="hCompraExitosa">
              <h2 className="hDatos "> Compra exitosa </h2>
              <table class="table ">
                <thead>
                  <tr className="table-dark">
                    <th scope="col">codigo de compra</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Direccion</th>
                    <th scope="col">correo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-light">
                    <th scope="row">{idCompra}</th>
                    <td>{usuario.displayName || datausuario.nombre}</td>
                    <td>{datausuario.direccion}</td>
                    <td>{usuario.email}</td>
                  </tr>

                </tbody>
              </table>

            </div>
          </div>
      }
    </>
  )

}



export default Checkout