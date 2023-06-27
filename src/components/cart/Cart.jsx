import React, { useState, useEffect } from 'react';
import css from './cart.module.css';

const Cart = ({ setCalor, cart, onDelete }) => {
  const [gramm, setGramm] = useState('');

  useEffect(() => {
    // When the component mounts, try to retrieve the saved value from local storage
    const savedGramm = localStorage.getItem('gramm');
    if (savedGramm) {
      setGramm(savedGramm);
    }
}, []);

  const handleGrammChange = (event) => {
    const value = event.target.value;
    setGramm(value);
    // Save the value to local storage when it changes
    localStorage.setItem('gramm', value);
  };

  const handleDelete = () => {
    onDelete(cart.id); // Invoke the onDelete function and pass the cart item
    localStorage.clear()
  };
  console.log(cart);

  return (
    <div className={css.cart}>
      <img src={cart.srcj} alt="" />
      <span>{cart.name}</span>
      <span style={{ display: 'block' }}>{cart.cal}</span>
      <input type="text" value={gramm} onChange={handleGrammChange} />
      <p>{gramm}</p>
      
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => { setCalor((cart.cal * gramm).toFixed(3)) }}>Calculate</button>
    </div>
  );
}

export default Cart;
