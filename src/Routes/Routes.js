import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CheckOut from "../pages/CheckOut/CheckOut";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Orders from "../pages/Orders/Orders";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/orders',
                element: <PrivateRoute> <Orders></Orders></PrivateRoute>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://ginious-car-server.vercel.app/services/${params.id}`)
            },
        ]
    }
])