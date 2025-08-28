const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isLoading: false,
    isError: "",
    isCreated: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOADING":
            return { ...state, isLoading: true };

        case "USER_REGISTER_SUCCESS":
            return { ...state, isCreated: true, isLoading: false };

        case "USER_REGISTER_FAIL":
            return { ...state, isError: action.payload, isLoading: false };

        case "USER_LOGIN_SUCCESS":
            localStorage.setItem("user", JSON.stringify(action.payload));
            return { ...state, user: action.payload, isLoading: false };

        case "USER_LOGIN_FAIL":
            return { ...state, isError: action.payload, isLoading: false };

        case "USER_LOGOUT":
            localStorage.removeItem("user");
            return { ...state, user: null };

        default:
            return state;
    }
};
