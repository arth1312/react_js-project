const initialState = {
    movies: JSON.parse(localStorage.getItem("blinkits")) || [],
    movie: null,
    isLoading: false,
    isError: "",
    isCreated: false,
    isUpdated: false
};

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "ADD_PRODUCT_SUC":
            return {
                ...state,
                isCreated: true
            }

        case "ADD_PRODUCT_REJ":
            return {
                ...state,
                isError: action.payload
            }

        case "GET_ALL_PRODUCTS_SUC":
            return {
                ...state,
                movies: action.payload,
                isLoading: false,
                isCreated: false,
                isUpdated: false,
                isError: ""
            }

        case "GET_ALL_PRODUCTS_REJ":
            return {
                ...state,
                isLoading: false,
                isCreated: false,
                isUpdated: false,
                isError: action.payload
            }

        case "GET_PRODUCT":
            return {
                ...state,
                movie: action.payload
            }

        case "UPDATE_PRODUCT":
            return {
                ...state,
                movie: null,
                isUpdated: true,
            }

        default:
            return state;
    }
};