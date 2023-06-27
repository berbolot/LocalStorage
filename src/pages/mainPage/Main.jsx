import React from "react";
import Modal from "../../components/modal/Modal";
import BasicModal from "../../components/modals/Modals";
import classes from './main.module.css';


const Main = () => {
  const [open, setOpen] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [calor,setCalor] = React.useState(0)
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  React.useEffect(() => {
    // Получение сохраненного cart из localStorage
    const savedCart = localStorage.getItem('cart');
  
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  return (
    <div>
      <div className="countCalor pulse">
        <h2>Cal</h2>
        <div className="count">{calor}/CAL</div>
      </div>
      <button className={classes.btn} onClick={() => setOpen(open ? false : true)}>OPEN CART</button>
      <Modal setCalor={setCalor} cart={cart} open={open} setOpen={setOpen} setCart={setCart}  ></Modal>

      <BasicModal cart={cart} setOpen={setOpen} setCart={setCart} />
    </div>
  );
};

export default Main;
