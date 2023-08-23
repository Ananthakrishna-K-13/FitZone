import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import loginImage from '../../assets/login.png'
import './Login.css'
import { useState } from 'react'
const baseUrl = "http://localhost:5000/api";


const Signup = () => {
    let nav = useNavigate()
    const [credentials, setCredentials] = useState({ username: '', password: '', confirmpassword: '' })
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.id]: e.target.value })
    }
    const handleShowClick = () => {
        let ele = document.getElementById('password');
        if (ele.type === 'text') ele.type = 'password';
        else ele.type = 'text';
    }
    const handleShowClickconfirm = () => {
        let ele = document.getElementById('confirmpassword');
        if (ele.type === 'text') ele.type = 'password';
        else ele.type = 'text';
    }
    const handleSignUpClick = async () => {
        if (credentials.password !== credentials.confirmpassword) {
            toast.error("Passwords dont match")
            return
        }
        let response = await fetch(`${baseUrl}/auth/signup`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                username: credentials.username,
                password: credentials.password
            })
        })
        response = await response.json()
        if (response.success) {
            localStorage.setItem('token', response.authtoken);
            nav('/');
        }
        else {
            return toast.warning("Username already exists. Provide a different username.")
        }
    }
    return (
        <div className='login-container'>
            <div className="login-text">
                <Link className='home-button' to='/'>Go to Home<i className='bx bxs-right-arrow'></i></Link>
                <h1>Create new account</h1>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={onchange} />
                <label htmlFor="password">Password</label>
                <div className='password-cont'>
                    <input type="password" id="password" onChange={onchange} />
                    <i onClick={handleShowClick} className='bx bxs-show bx-md'></i>
                </div>
                <label htmlFor="password">Confirm Password</label>
                <div className='password-cont'>
                    <input type="password" id="confirmpassword" onChange={onchange} />
                    <i onClick={handleShowClickconfirm} className='bx bxs-show bx-md'></i>
                </div>
                <button onClick={handleSignUpClick}>Sign Up</button>
                <p>Already have an account?&nbsp;&nbsp;<Link to='/login'>Login</Link></p>
            </div>
            <img src={loginImage} alt="" />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
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

export default Signup