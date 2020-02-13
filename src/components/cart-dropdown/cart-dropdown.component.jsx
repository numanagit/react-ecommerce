import React from "react";

import CustomButtom from "../custom-buttom/custom-buttom.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomButtom>PAGAR</CustomButtom>
  </div>
);

export default CartDropdown;
