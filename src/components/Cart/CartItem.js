import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartAction } from '../../store/cart/cart-slice';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const increaseItem = () => {
    dispatch(cartAction.addItemToCart({
      id: id,
      title: title,
      price: price
    }))
  }

  const decreaseItem = () => {
    dispatch(cartAction.removeItemFromCart(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {`${total.toFixed(2)}\n`}
          <span className={classes.itemprice}>{`${price.toFixed(2)}/item`}</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseItem}>-</button>
          <button onClick={increaseItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
