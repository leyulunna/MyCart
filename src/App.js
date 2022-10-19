import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, getCartData } from './store/cart/cart-actions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);
  const showCart = useSelector(state => state.ui.showCart);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCartData())
  }, [dispatch])

  useEffect(() => {

    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.change) {
      dispatch(sendCartData(cart));
    }


  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && 
        <Notification 
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      }
      <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
