import { Link } from 'react-router-dom';
import './css/Login.css'

const ForgetPass = () => {
    return (
        <div>
            <div className='mainContainer'>
                <div className="container">
                    <div className="header">
                        <img src="/public/1713780930444.png" alt="" />
                    </div>
                    <div className="login-box">
                        <h3>Reset Password</h3>
                        <p>To reset your password, please add your <br /> registered email.</p>
                        <form>
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="Enter Email" required />
                            </div>
                            <button type="submit" className="login-btn">Send Password Reset Link</button>
                        </form>
                        <p className="create-account">Don&apos;t have an account? <Link to="/signup">Sign In.</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPass;