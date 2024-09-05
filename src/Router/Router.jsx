import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root';
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <div>Hello</div>
            }
        ]
    },
]);

export default router;