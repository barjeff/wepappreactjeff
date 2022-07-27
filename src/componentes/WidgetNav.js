
import CartContex from "./CartContex";
import { useContext } from "react";

const WidgetNav = () => {
  const { cantidad } = useContext(CartContex)
  return (
    <div className="CartWidget">
      <img src="../cart.svg" alt='cart' className='CartImg' />
      {cantidad}
    </div>
  );
}

export default WidgetNav