import React, { useContext } from "react";
import Carticon from "../Cart/Carticon";
import classes from "./HeaderCartButton.module.css";
import CartContext from '../../store/CartContext';

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) =>{
    return currentNumber + item.amount;
  }, 0)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <Carticon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
