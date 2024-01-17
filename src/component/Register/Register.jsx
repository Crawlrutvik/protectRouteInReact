import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import register_img from "../../img/register.jpg"


import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const getUserData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value, "role": "ADMIN" })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://api.freeapi.app/api/v1/users/register', user)
            .then(function (response) {
                if (response?.data?.statusCode) {
                    toast.success("Registered successfully");
                }
                setUser({
                    username: '',
                    email: '',
                    password: '',
                });
                navigate("/login")
                
            })
            .catch(function (error) {
                if (!error?.response?.data?.success) {
                    toast.error("Something went wrong");
                }
            });
    };
    return (
        <div className='login_img_wrap'>
            <div class="login-container">
                <div class="login-card">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="username" name="username" placeholder="Enter your name" required onChange={getUserData} value={user?.username} />
                        <input type="email" id="useremail" name="email" placeholder="Enter your email" required onChange={getUserData} value={user?.email} />
                        <input type="password" id="password" name="password" placeholder="Enter your password" required onChange={getUserData} value={user?.password} />
                        <button type="submit">Register</button>
                    </form>
                    <div>
                        <p>have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
            <div className='right-img'>
                <img src={register_img} alt="register-img" />

            </div>
            <ToastContainer />
        </div>
    )
}

export default Register