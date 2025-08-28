import axios from "axios";

export const userLoading = () => ({ type: "USER_LOADING" });

export const userRegisterSuccess = () => ({ type: "USER_REGISTER_SUCCESS" });
export const userRegisterFail = (err) => ({ type: "USER_REGISTER_FAIL", payload: err });

export const userLoginSuccess = (data) => ({ type: "USER_LOGIN_SUCCESS", payload: data });
export const userLoginFail = (err) => ({ type: "USER_LOGIN_FAIL", payload: err });

export const logoutUser = () => ({ type: "USER_LOGOUT" });

export const registerAsync = (data) => {
    return async (dispatch) => {
        dispatch(userLoading());
        try {
            await axios.post("http://localhost:3000/user", data);
            dispatch(userRegisterSuccess());
        } catch (error) {
            dispatch(userRegisterFail(error.message));
        }
    };
};

export const signInAsync = (data) => {
    return async (dispatch) => {
        dispatch(userLoading());
        try {
            let res = await axios.get(
                `http://localhost:3000/user?email=${data.email}&password=${data.password}`
            );
            if (res.data.length > 0) {
                dispatch(userLoginSuccess(res.data[0]));
            } else {
                dispatch(userLoginFail("Invalid email or password"));
            }
        } catch (error) {
            dispatch(userLoginFail(error.message));
        }
    };
};
