import axios from 'axios';

export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const addProductSUC = () => {
    return {
        type: "ADD_PRODUCT_SUC",
    }
}

export const addProductRej = (err) => {
    return {
        type: "ADD_PRODUCT_REJ",
        payload: err
    }
}

export const getAllProducts = (data) => {
    return {
        type: "GET_ALL_PRODUCTS_SUC",
        payload: data
    }
}

export const getProductsRej = (err) => {
    return {
        type: "GET_ALL_PRODUCTS_REJ",
        payload: err
    }
}

export const getProduct = (data) => {
    return {
        type: "GET_PRODUCT",
        payload: data
    }
}

export const updateProduct = () => {
    return {
        type: "UPDATE_PRODUCT"
    }
}

export const getAllProductAsync = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.get('http://localhost:3000/products')
            dispatch(getAllProducts(res.data));
        } catch (error) {
            console.log(error);
            dispatch(getProductsRej(error.message))
        }

    }
}

export const addProductAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.post('http://localhost:3000/products', data)
            dispatch(addProductSUC());
        } catch (error) {
            console.log(error);
            dispatch(addProductRej(error.message))
        }
    }
}

export const deleteProductAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.delete(`http://localhost:3000/products/${id}`)
            dispatch(getAllProductAsync());
        } catch (error) {
            console.log(error);
            dispatch(addProductRej(error.message))
        }
    }
}

export const getProductAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.get(`http://localhost:3000/products/${id}`)
            dispatch(getProduct(res.data));
        } catch (error) {
            console.log(error);
            dispatch(addProductRej(error.message))
        }
    }
}

export const updateProductAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.put(`http://localhost:3000/products/${data.id}`, data)
            dispatch(updateProduct());
        } catch (error) {
            console.log(error);
            dispatch(addProductRej(error.message))
        }
    }
}