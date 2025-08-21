const initialState = {
    blinkits: JSON.parse(localStorage.getItem("blinkits")) || [],
    blinkit: null,
    isLoading: false,
    isError: "",
    isCreated: false,
    isUpdated: false
};

export const productReducer = (state = initialState, action) => {
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
                blinkits: action.payload,
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
                blinkit: action.payload
            }

        case "UPDATE_PRODUCT":
            return {
                ...state,
                blinkit: null,
                isUpdated: true,
            }

        default:
            return state;
    }
};