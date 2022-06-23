export const productReducer = ( state = [], action) => {
    if(action.type === 'SET_PRODUCTS') {
        return state.concat(action.payload)
    }
    return state
}

export const setNewProducts = (products) => {
    return {
        type: "SET_PRODUCTS",
        payload: products
    }
}
