import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root';
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import Profile from "../Pages/ProfilePage";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <Signup/>
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                path: "/products",
                element: <Products/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ]
    },
]);

export default router;