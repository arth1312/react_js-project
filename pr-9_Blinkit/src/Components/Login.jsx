import loginLogo from '../assets/img/app_logo.svg'
import './Login.css'

const Login = () => {
    return (
        <div className="blinkit-login-container">
            <div className="blinkit-login-card">
                <div className="blinkit-login-header">
                    <div className="blinkit-logo-container">
                        <div className="blinkit-logo">
                            <img src={loginLogo} alt="" />
                        </div>
                    </div>
                </div>
                <h2 className="blinkit-login-title">Login or Signup</h2>

                <div className="blinkit-input-group">
                    <div className="blinkit-country-code">+91</div>
                    <input
                        type="tel"
                        className="blinkit-mobile-input"
                        placeholder="Enter mobile number"
                    />
                </div>

                <button className="blinkit-continue-btn">
                    Continue
                </button>

                <div className="blinkit-or-divider">
                    <span>or</span>
                </div>

                <div className="blinkit-social-login">
                    <button className="blinkit-google-btn">
                        <span className="blinkit-social-icon">G</span>
                        Continue with Google
                    </button>
                    <button className="blinkit-email-btn">
                        <span className="blinkit-social-icon">@</span>
                        Continue with Email
                    </button>
                </div>

                <p className="blinkit-terms-text">
                    By continuing, you agree to our <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>
                </p>
            </div>
        </div>
    );
};

export default Login;