const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        cartTotal.amount += amount;
        const cartItemTotal = price * amount;
        console.log(cartItemTotal);

        cartTotal.total += cartItemTotal;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, amount, total };
  }
  return state;
};
export default reducer;
