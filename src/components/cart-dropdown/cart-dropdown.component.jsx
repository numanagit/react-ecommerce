import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Tu carrito esta vacio</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        // No es necesario el dispatch
        dispatch(toggleCartHidden());
      }}
    >
      PAGAR
    </CustomButton>
  </div>
);

export default CartDropdown;
