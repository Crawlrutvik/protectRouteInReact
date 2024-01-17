
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const storeg = localStorage.getItem('accessToken')
    let location = useLocation();
    if (!storeg && location.pathname !== "/login") {
        return <Navigate to="/login"  />;
    }
    if (storeg && location.pathname === "/login") {
        return <Navigate exact to="/"  />;
    }

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoute