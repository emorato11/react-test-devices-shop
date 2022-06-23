import ApiClient from "../helpers/ApiClient";

export const getProducts = () => {
    return ApiClient.get('/product').then(res => res)
}

export const getProduct = (productId) => {
    return ApiClient.get(`/product/${productId}`).then(res => res)
}
