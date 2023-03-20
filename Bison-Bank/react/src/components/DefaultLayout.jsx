import {Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout() {
    const {user, token} = useStateContext()

    if (!token) {
        return <Navigate to="/login" />
    }
    return (
        <div className="default">
            <div className="header">
                <div className="title">Bison Bank</div>
                <div className="nav">
                    <Link to="user/new_account">New Bank Account</Link>
                    <Link to="user/my_account">My Bank Account</Link>
                    <Link to="user/transaction_history">Transaction History</Link>
                    <Link>Logout</Link>
                </div>
            </div>
            <div className="container">
                <Outlet/>
            </div>
        </div>
    )
}