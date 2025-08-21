import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';


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
            let result = [];
            let resRef = await getDocs(collection(db, 'blinkits'));
            resRef.forEach((doc) => {
                result.push({ ...doc.data(), id: doc.id });
            });
            dispatch(getAllProducts(result));
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
            let res = await setDoc(doc(db, "blinkits", data.id), data);
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
            await deleteDoc(doc(db, "blinkits", id));
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
            let res = await getDoc(doc(db, "blinkits", id));
            dispatch(getProduct({ ...res.data(), id: res.id }));
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
            await updateDoc(doc(db, "blinkits", data.id), data)
            dispatch(updateProduct());
        } catch (error) {
            console.log(error);
            dispatch(addProductRej(error.message))
        }
    }
}