import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root';
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <div>Hello</div>
            },
            {
                path: "/login",
                element: <Login/>
            }
        ]
    },
]);

export default router;