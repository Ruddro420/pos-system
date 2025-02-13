import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../components/Dashboard"
import Login from "../components/LogIn";
import BrandPage from "../Pages-ad/BrandPage";
import CategoryPage from "../Pages-ad/CategoryPage"
import SubcriptionPage from "../Pages-ad/SubcriptionPage";


const Router = createBrowserRouter([
    {
        path: '/',
        element:
            <MainLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />,
            },
            {
                path: '/brand-page',
                element: <BrandPage/>,
            },
            {
                path: '/category-page',
                element: <CategoryPage/>,
            },
            {
                path: '/subcription-page',
                element: <SubcriptionPage/>,
            },
        ]
    },
    {
        path: '/login',
        element: <Login />,
    }

])

export default Router;