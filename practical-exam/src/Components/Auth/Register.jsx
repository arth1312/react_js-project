import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlinePassword } from "react-icons/md";
import "./Register.css";
import { registerAsync } from "../../Services/Actions/userAction";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isCreated } = useSelector((state) => state.userReducer);

    const intialState = { email: "", password: "", cpass: "" };
    const [inputForm, setInputForm] = useState(intialState);

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({ ...inputForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputForm.password !== inputForm.cpass) {
            alert("Password and Confirm Password must match!");
            return;
        }
        dispatch(registerAsync({ email: inputForm.email, password: inputForm.password }));
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/login");
        }
    }, [isCreated]);

    return (
        <>
            <div className="movie-login-container">
                <div className="movie-login-card">
                    <div className="movie-login-header">
                        <div className="movie-logo-container">
                        </div>
                    </div>
                    <h2 className="movie-login-title">Create Account</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="movie-input-group">
                            <div className="movie-country-code">@</div>
                            <input
                                type="text"
                                className="movie-mobile-input"
                                placeholder="Enter Email"
                                name="email"
                                value={inputForm.email}
                                onChange={handleChanged}
                            />
                        </div>

                        <div className="movie-input-group">
                            <div className="movie-country-code">
                                <MdOutlinePassword />
                            </div>
                            <input
                                type="password"
                                className="movie-mobile-input"
                                placeholder="Enter Password"
                                name="password"
                                value={inputForm.password}
                                onChange={handleChanged}
                            />
                        </div>

                        <div className="movie-input-group">
                            <div className="movie-country-code">
                                <MdOutlinePassword />
                            </div>
                            <input
                                type="password"
                                className="movie-mobile-input"
                                placeholder="Confirm Password"
                                name="cpass"
                                value={inputForm.cpass}
                                onChange={handleChanged}
                            />
                        </div>

                        <button className="movie-continue-btn" type="submit">
                            Register
                        </button>
                    </form>


                    <p className="movie-terms-text">
                        Already have an Account?{" "}
                        <Link to={"/login"}>Login</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;
