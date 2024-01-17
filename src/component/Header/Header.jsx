import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


const Header = () => {
    const storeg = localStorage.getItem("accessToken");
    const navigate = useNavigate();
    const login = () => {
        navigate('/login');
    }
    const register = () => {
        navigate('/register');
    }
    const HeadData = [
        {
            "id": 1,
            "name": "Home",
            "route": "/"
        },
        {
            "id": 2,
            "name": "About",
            "route": "/about"
        },
        {
            "id": 3,
            "name": "Service",
            "route": "/service"
        },
        {
            "id": 4,
            "name": "Contect Us",
            "route": "/contect"
        },
    ]
    return (
        <>
            <header>
                <div className='h_wrap'>
                    <ul>
                        {
                            HeadData.map((value) => {
                                return <li key={value?.id}>
                                    <NavLink to={value?.route}>
                                        {value?.name}
                                    </NavLink>
                                </li>
                            })
                        }
                    </ul>
                    {
                        !storeg && (
                            <div className='login_wrap'>
                                <div className='login_bnt '>
                                    <button onClick={login}>Login</button>
                                </div>
                                <div className='reg_bnt '>
                                    <button onClick={register}>Register</button>
                                </div>

                            </div>
                        )
                    }

                </div>
            </header>
        </>
    )
}

export default Header