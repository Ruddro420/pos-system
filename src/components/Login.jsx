import { Link } from 'react-router-dom';
import './css/Login.css'
const Login = () => {
    return (
        <>
            <div className='mainContainer'>

                <div className="container">
                    <div className="header">
                        <img src="/public/1713780930444.png" alt="" />
                    </div>
                    <div className="login-box">
                        <h3>Sign into your account!</h3>
                        <p>Nice to see you! Please log in with your account.</p>

                        <div className="media-options">

                            <img src="./google.svg" alt="" className="google-img" />
                            <a href="">Sign with Google</a>

                        </div>

                        <form>
                            <div className="input-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" placeholder="Enter Email" required />
                            </div>
                            <div className="input-group">
                                <label for="password">Password</label>
                                <input type="password" id="password" placeholder="Password" required />
                            </div>
                            <div className="options">
                                <Link to="/forget" class="forgot-password">Forgot Password?</Link>
                                <label className="remember-me">
                                    <input type="checkbox" /> Remember Me
                                </label>
                            </div>
                            <button type="submit" className="login-btn">Log In</button>
                        </form>
                        <p className="create-account">Don't have an account? <Link to="/register">Create New Account</Link></p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;