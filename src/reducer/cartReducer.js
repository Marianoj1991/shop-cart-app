export const initialState = JSON.parse(localStorage.getItem('cart')) || [];

function saveToLocalStorage (state) {
  localStorage.setItem('cart', JSON.stringify(state))
}

const ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

const ACTION_CART = {

  [ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const product = action.payload;
    const indexInCart = state.findIndex(prod => prod.id === product.id)
    if(indexInCart >= 0) {
      // const newState = estructuredClone(state);
      // newState[indexInCart].quantity += 1;

      const newState = [
        ...state.slice(0, indexInCart),
        {...state[indexInCart], quantity: state[indexInCart].quantity + 1},
        ...state.slice(indexInCart + 1)
      ]

      saveToLocalStorage(newState);
      return newState;
    }


    const newState = [
      ...state,
      {
        ...action.payload,
        quantity: 1
      }
    ]

    saveToLocalStorage(newState);
    return newState;

  },

  [ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const id = action.payload;
    const newState = state.filter(prod => prod.id != id);
    saveToLocalStorage(newState)
    return newState
  },

  [ACTION_TYPES.CLEAR_CART]: () => {
    localStorage.clear('cart');
    return [];
  } 


}

export const cartReducer = (state, action) => {
  const actionType = action.type;
  const actionFunction = ACTION_CART[actionType];
  return actionFunction ? actionFunction(state,action) : state;
}