import {createBrowserRouter, Navigate} from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout";
import LoginLayout from "./components/LoginLayout";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Tansaction from "./views/Transaction";
import TransactionHist from "./views/TransactionHist";
import NewAccount from "./views/NewAccount";
import User from "./views/User";
import Account from "./views/Account";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to='/login'/>
            },
            {
                path: '/login',
                element: <Login />
            },

        ]
    },
    {
      path: '/',
      element: <DefaultLayout/>,
      children: [
            {
                path: '/user',
                element: <User />
            },
            {
                path: '/user/transaction',
                element: <Tansaction />
            },
            {
                path: '/user/transaction_history',
                element: <TransactionHist />
            },
            {
                path: '/user/new_account',
                element: <NewAccount />
            },
            {
                path: '/user/my_account',
                element: <Account />,
            }
      ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;