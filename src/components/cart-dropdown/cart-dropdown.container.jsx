import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartDropdown from './cart-dropdown.component';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const CartDropdownContainer = connect(mapStateToProps)(
  withRouter(CartDropdown)
);

export default CartDropdownContainer;
