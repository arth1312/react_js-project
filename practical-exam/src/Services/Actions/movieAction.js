import axios from 'axios';

export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const addMovieSUC = () => {
    return {
        type: "ADD_PRODUCT_SUC",
    }
}

export const addMovieRej = (err) => {
    return {
        type: "ADD_PRODUCT_REJ",
        payload: err
    }
}

export const getAllMovies = (data) => {
    return {
        type: "GET_ALL_PRODUCTS_SUC",
        payload: data
    }
}

export const getMoviesRej = (err) => {
    return {
        type: "GET_ALL_PRODUCTS_REJ",
        payload: err
    }
}

export const getMovie = (data) => {
    return {
        type: "GET_PRODUCT",
        payload: data
    }
}

export const updateMovie = () => {
    return {
        type: "UPDATE_PRODUCT"
    }
}

export const getAllMovieAsync = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.get('http://localhost:3000/movie')
            dispatch(getAllMovies(res.data));
        } catch (error) {
            console.log(error);
            dispatch(getMoviesRej(error.message))
        }

    }
}

export const addMovieAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.post('http://localhost:3000/movie', data)
            dispatch(addMovieSUC());
        } catch (error) {
            console.log(error);
            dispatch(addMovieRej(error.message))
        }
    }
}

export const deleteMovieAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.delete(`http://localhost:3000/movie/${id}`)
            dispatch(getAllMovieAsync());
        } catch (error) {
            console.log(error);
            dispatch(addMovieRej(error.message))
        }
    }
}

export const getMovieAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.get(`http://localhost:3000/movie/${id}`)
            dispatch(getMovie(res.data));
        } catch (error) {
            console.log(error);
            dispatch(addMovieRej(error.message))
        }
    }
}

export const updateMovieAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.put(`http://localhost:3000/movie/${data.id}`, data)
            dispatch(updateMovie());
        } catch (error) {
            console.log(error);
            dispatch(addMovieRej(error.message))
        }
    }
}