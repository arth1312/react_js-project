import loginLogo from "../../assets/img/app_logo.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { MdOutlinePassword } from "react-icons/md";
import { registerAsync } from "../../Services/Actions/userAction";
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error, isCreated } = useSelector((state) => state.userReducer);

    const intialState = {
        email: "",
        password: "",
        cpass: "",
    };
    const [inputForm, setInputForm] = useState(intialState);

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputForm.password !== inputForm.cpass) {
            alert("Password and Confirm Password must match!");
            return;
        }
        dispatch(registerAsync(inputForm));
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/login");
        }
    }, [isCreated]);

    return (
        <>
            <div className="blinkit-login-container">
                <div className="blinkit-login-card">
                    <div className="blinkit-login-header">
                        <div className="blinkit-logo-container">
                            <div className="blinkit-logo">
                                <img src={loginLogo} alt="App Logo" />
                            </div>
                        </div>
                    </div>
                    <h2 className="blinkit-login-title">Create Account</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="blinkit-input-group">
                            <div className="blinkit-country-code">@</div>
                            <input
                                type="text"
                                className="blinkit-mobile-input"
                                placeholder="Enter Email"
                                name="email"
                                value={inputForm.email}
                                onChange={handleChanged}
                            />
                        </div>

                        <div className="blinkit-input-group">
                            <div className="blinkit-country-code">
                                <MdOutlinePassword />
                            </div>
                            <input
                                type="password"
                                className="blinkit-mobile-input"
                                placeholder="Enter Password"
                                name="password"
                                value={inputForm.password}
                                onChange={handleChanged}
                            />
                        </div>

                        <div className="blinkit-input-group">
                            <div className="blinkit-country-code">
                                <MdOutlinePassword />
                            </div>
                            <input
                                type="password"
                                className="blinkit-mobile-input"
                                placeholder="Confirm Password"
                                name="cpass"
                                value={inputForm.cpass}
                                onChange={handleChanged}
                            />
                        </div>

                        <button className="blinkit-continue-btn" type="submit">
                            Register
                        </button>
                    </form>


                    <p className="blinkit-terms-text">
                        Already have an Account?{" "}
                        <Link to={"/login"}>Login</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;
