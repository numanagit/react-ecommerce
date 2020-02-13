import React from "react";
import { connect } from "react-redux";

import CustomButtom from "../custom-buttom/custom-buttom.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItems.id} item={cartItem} />
      ))}
    </div>
    <CustomButtom>PAGAR</CustomButtom>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
