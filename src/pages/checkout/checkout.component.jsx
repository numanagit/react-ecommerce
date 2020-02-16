import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-blocks'>
        <span>Producto</span>
      </div>
      <div className='header-blocks'>
        <span>Descripción</span>
      </div>
      <div className='header-blocks'>
        <span>Cantidad</span>
      </div>
      <div className='header-blocks'>
        <span>Precio</span>
      </div>
      <div className='header-blocks'>
        <span>Quitar</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
    <div className='test-warning'>
      Usar esta tarjeta de prueba
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - cvv: 123
    </div>
    <StripeButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
