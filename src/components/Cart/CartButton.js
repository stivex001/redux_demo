import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import {cartToggleAction } from '../../store/cartToggle'

const CartButton = (props) => {
  const cartQty = useSelector(state => state.myCart.totalQty)
  const dispatch = useDispatch()
  
  const showCartHandler = () => {
    dispatch(cartToggleAction.toggle())
  }

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQty}</span>
    </button>
  );
};

export default CartButton;
