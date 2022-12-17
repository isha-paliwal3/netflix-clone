import { ArrowForwardIosOutlined } from '@material-ui/icons'
import { useRef, useState } from 'react'
import logo from './logo.png'
import './Register.scss'

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () =>{
        setPassword(emailRef.current.value)
    }

    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img src={logo} alt="Netflix" className='logo' />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>

            <div className="container">
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>

                {!email? (
                    <div className="input">
                        <input type="email" placeholder='Email address' ref={emailRef} />
                        <button className='registerButton' onClick={handleStart}>Get Started
                            <ArrowForwardIosOutlined className='icon' />
                        </button>
                    </div>
                ):(
                <form className="input">
                    <input type="password" placeholder='Password' ref={passwordRef} />
                    <button className='registerButton' onClick={handleFinish}>Start Membership
                    </button>
                </form>

                )}
            </div>
        </div>
    )
}
