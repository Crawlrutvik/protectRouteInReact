import axios from 'axios'
import React, { useState } from 'react'
import login_img from "../../img/login.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const getUserData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value, "role": "ADMIN" })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://api.freeapi.app/api/v1/users/login', user)
            .then(function (response) {
                console.log('response: ', response);
                if (response?.data?.statusCode) {
                    toast.success("Login successfully");
                    navigate("/")
                }
                setUser({
                    username: '',
                    password: '',
                });
                localStorage.setItem("accessToken", response?.data?.data?.accessToken);

            })
            .catch(function (error) {
                if (!error?.response?.data?.success) {
                    toast.error("Something went wrong");
                }
                console.log(error);
            });
    };
    return (
        <>
            <div className='login_img_wrap'>
                <div className="left-img">
                    <img src={login_img} alt="login img" />
                </div>
                <div class="login-container">
                    <div class="login-card">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" id="username" name="username" placeholder="Enter your username" required onChange={getUserData} value={user?.username} />
                            <input type="password" id="password" name="password" placeholder="Enter your password" required onChange={getUserData} value={user?.password} />
                            <button type="submit">Login</button>
                        </form>
                        <div>
                            <p>Don't have an account? <Link to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login