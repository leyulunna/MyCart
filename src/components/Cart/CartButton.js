import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const quantity = useSelector(state => state.cart.quantity);
  const disptach = useDispatch();

  const toggleCart = () => {
    disptach(uiAction.toggleCart());
  }

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
