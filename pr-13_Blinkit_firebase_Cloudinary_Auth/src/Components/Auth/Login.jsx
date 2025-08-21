import './Login.css'
import loginLogo from '../../assets/img/app_logo.svg'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlinePassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { signInAsync, signInWithGoogleAsync } from '../../Services/Actions/userAction';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, error } = useSelector(state => state.userReducer);
    const intialState = {
        email: "",
        password: "",
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
        dispatch(signInAsync(inputForm));
    };

    const handleGoogleLogin = () => {
        dispatch(signInWithGoogleAsync());
    }

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user]);

    return (
        <>
            <div className="blinkit-login-container">
                <div className="blinkit-login-card">
                    <div className="blinkit-login-header">
                        <div className="blinkit-logo-container">
                            <div className="blinkit-logo">
                                <img src={loginLogo} alt="" />
                            </div>
                        </div>
                    </div>
                    <h2 className="blinkit-login-title">Login or Register</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="blinkit-input-group">
                            <div className="blinkit-country-code">@</div>
                            <input
                                type="tel"
                                className="blinkit-mobile-input"
                                placeholder="Enter Email"
                                name="email"
                                value={inputForm.email}
                                onChange={handleChanged}
                            />
                        </div>
                        <div className="blinkit-input-group">
                            <div className="blinkit-country-code"><MdOutlinePassword /></div>
                            <input
                                type="password"
                                className="blinkit-mobile-input"
                                placeholder="Enter password"
                                name="password"
                                value={inputForm.password}
                                onChange={handleChanged}
                            />
                        </div>

                        <button className="blinkit-continue-btn" type="submit">
                            Login
                        </button>
                    </form>

                    <div className="blinkit-or-divider">
                        <span>or</span>
                    </div>

                    <div className="blinkit-social-login">
                        <button className="blinkit-google-btn " onClick={handleGoogleLogin}>
                            <span className="blinkit-social-icon"><FcGoogle /></span>
                            Continue with Google
                        </button>
                    </div>

                    <p className="blinkit-terms-text">
                        Create an Account ? <Link className="" to={"/register"}>Register</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;