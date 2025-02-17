import { Link } from 'react-router-dom';
import './css/Login.css'
/* import Login from './Login'; */
const CreateAccount = () => {
    return (
        <>
            <div className='mainContainer'>

                <div className="container">
                    <div className="header">
                        <img src="/public/1713780930444.png" alt="" />
                    </div>
                    <div className="login-box">
                        <h3>Sign up for your account!</h3>
                        <p>Start your 30-day trial, no credit card required</p>

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
                                <label className="remember-me">
                                    <input type="checkbox" />By signing up, you agree to the terms of service
                                </label>
                            </div>
                            <button type="submit" className="login-btn">Sign up</button>
                        </form>
                        <p className="create-account">Already have account ?   <Link to="/">Login</Link></p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default CreateAccount;