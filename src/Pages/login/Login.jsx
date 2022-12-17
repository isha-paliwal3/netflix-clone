import './Login.scss'
import logo from './logo.png'
export default function Login() {
    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img src={logo} alt="Netflix" className='logo' />
                </div>
            </div>

            <div className="container">
                <form action="">
                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or phone Number'/>
                    <input type="password" placeholder='Password'/>
                    <button className="loginButton">Sign In</button>

                    <span>New to Netflix? <a>Sign up now.</a></span>
                    <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <a>Learn more.</a>
                    </small>

                </form>
            </div>
        </div>
    )
}
