const initialState = {
    blinkits: JSON.parse(localStorage.getItem("blinkits")) || [],
    blinkit: null,
    isLoading: false
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "ADD_PRODUCT":
            const allDataAdd = [...state.blinkits, action.payload];
            localStorage.setItem("blinkits", JSON.stringify(allDataAdd));
            return {
                ...state,
                blinkits: allDataAdd
            };

        case "GET_ALL_PRODUCTS":
            const prods = JSON.parse(localStorage.getItem("blinkits")) || [];
            return {
                ...state,
                blinkits: prods,
                isLoading: false
            };

        case "DELETE_PRODUCT":
            const allDataDelete = state.blinkits.filter(prod => prod.id !== action.payload);
            localStorage.setItem("blinkits", JSON.stringify(allDataDelete));
            return {
                ...state,
                blinkits: allDataDelete
            };

        case "GET_PRODUCT":
            const product = state.blinkits.find(prod => prod.id.toString() === action.payload.toString());
            return {
                ...state,
                blinkit: product || null
            };

        case "UPDATE_PRODUCT":
            const updatedBlinkits = state.blinkits.map(prod =>
                prod.id.toString() === action.payload.id.toString() ? action.payload : prod
            );
            localStorage.setItem("blinkits", JSON.stringify(updatedBlinkits));
            return {
                ...state,
                blinkits: updatedBlinkits,
                blinkit: null
            };

        default:
            return state;
    }
};