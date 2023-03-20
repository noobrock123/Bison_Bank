import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function LoginLayout() {
    const {token} = useStateContext()
        if (token) {
        return <Navigate to='/user' />
    }


    return (
        <div className="login-content-box">
            <h1>Bison Bank</h1>
            <Outlet/>
        </div>
    )
}