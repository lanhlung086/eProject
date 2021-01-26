export const initialState = {
    cart: [],
}

export const getBasketPriceTotal = (cart) => {
    return cart.reduce((total, e) => {
        return total + (e.price * e.itemCount);
    }, 0)
}


export const getBasketItemTotal = (cart) =>
    cart.reduce((total, e) => {
        return total + e.itemCount;
    }, 0)


export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            let checkItem = state.cart.every((e) => {
                return e.id !== action.item.id
            })
            if(checkItem) {
                return {
                    ...state,
                    cart: [...state.cart, action.item]
                }
            }
            else {
                let index = state.cart.findIndex((e) => {
                    return e.id === action.item.id
                })
                state.cart[index].itemCount = action.item.itemCount;
                return {
                    ...state,
                    cart: [...state.cart]
                }
            }
        case 'REMOVE_FROM_CART':
            let newCart = state.cart.filter((e) => {
                return e.id !== action.id;
            })
            return {
                ...state,
                cart: newCart
            }
        default:
            return state;
    }
}