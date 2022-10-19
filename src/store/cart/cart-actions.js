import { uiAction } from '../ui-slice';
import { cartAction } from './cart-slice';

export const getCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://redux-cart-76d73-default-rtdb.firebaseio.com/cart.json');

      if (!response.ok) {
        throw new Error('Cannot Fetch Data!')
      }

      const cartData = response.json();

      return cartData;
    }

    try {
      const cartRes = await fetchData();
      dispatch(cartAction.fetchCart(
        {
          items: cartRes.items || [],
          quantity: cartRes.quantity
        }
      ))
    } catch (error) {
      dispatch(uiAction.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sent cart data failed!'
      }))
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiAction.showNotification(
      {
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }
    ))
    
    const fetchData = async () => {
      const response = await fetch('https://redux-cart-76d73-default-rtdb.firebaseio.com/cart.json'
      , { method: 'PUT', body: JSON.stringify(
        {
          items: cart.items,
          quantity: cart.quantity
        }) 
      })

      if (!response.ok) {
        throw new Error('Getting cart data failed');
      }
    }

    try {
      await fetchData();

      dispatch(uiAction.showNotification(
        {
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        }
      ))

    } catch(error) {
      dispatch(uiAction.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sent cart data failed!'
      }))
    }
  }
}