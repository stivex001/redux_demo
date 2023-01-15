import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import {cartToggleAction } from '../../store/cartToggle'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const showCartHandler = () => {
    dispatch(cartToggleAction.toggle())
  }

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
