import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlinePassword } from "react-icons/md";
import "./Login.css";
import { signInAsync } from "../../Services/Actions/userAction";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);

    const intialState = { email: "", password: "" };
    const [inputForm, setInputForm] = useState(intialState);

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({ ...inputForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signInAsync(inputForm));
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    return (
        <>
            <div className="movie-login-container">
                <div className="movie-login-card">
                    <div className="movie-login-header">
                        <div className="movie-logo-container">
                        </div>
                    </div>
                    <h2 className="movie-login-title">Login or Register</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="movie-input-group">
                            <div className="movie-country-code">@</div>
                            <input
                                type="tel"
                                className="movie-mobile-input"
                                placeholder="Enter Email"
                                name="email"
                                value={inputForm.email}
                                onChange={handleChanged}
                            />
                        </div>
                        <div className="movie-input-group">
                            <div className="movie-country-code"><MdOutlinePassword /></div>
                            <input
                                type="password"
                                className="movie-mobile-input"
                                placeholder="Enter password"
                                name="password"
                                value={inputForm.password}
                                onChange={handleChanged}
                            />
                        </div>

                        <button className="movie-continue-btn" type="submit">
                            Login
                        </button>
                    </form>

                    <p className="movie-terms-text">
                        Create an Account ? <Link className="" to={"/register"}>Register</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
