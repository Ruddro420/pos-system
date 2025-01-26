import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import MainContent from "../component/MainContent";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";


const Router = createBrowserRouter([
    {
        path: '/',
        element:
            <MainLayout />
        ,
        children: [
            {
                path: '/',
                element: <MainContent />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />,
    }

])

export default Router;