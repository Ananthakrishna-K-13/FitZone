import React from 'react'
import './Login.css'
import loginImage from '../../assets/login.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const baseUrl = "http://localhost:5000/api"

const Login = () => {
    let nav = useNavigate();
    const handleShowClick = () => {
        let ele = document.getElementById('password');
        if (ele.type === 'text') ele.type = 'password';
        else ele.type = 'text';
    }
    const [credentials, setCredentials] = useState({ name: "", password: "" })
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.id]: e.target.value })
    }
    const handleLoginClick = async () => {
        let res = await fetch(`${baseUrl}/auth/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ username: credentials.username, password: credentials.password })
        })
        res = await res.json();
        if (res.success) {
            localStorage.setItem('token', res.authtoken);
            nav('/');
        }
        else {
            toast.error("Invalid Credentials entered");
        }
    }
    return (
        <div className='login-container'>
            <div className="login-text">
                <Link className='home-button' to='/'>Go to Home<i className='bx bxs-right-arrow'></i></Link>
                <h1>Log in to Continue</h1>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={onchange} />
                <label htmlFor="password">Password</label>
                <div className='password-cont'>
                    <input type="password" id="password" onChange={onchange} />
                    <i onClick={handleShowClick} className='bx bxs-show bx-md'></i>
                </div>
                <button onClick={handleLoginClick}>Login</button>
                <p>Dont have an account?&nbsp;&nbsp;<Link to='/signup'>Sign up</Link></p>
            </div>
            <img src={loginImage} alt="" />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Login