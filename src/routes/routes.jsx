import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllFoodItems from "../pages/AllFoodItems";
import Blog from "../pages/Blog";
import LoginPage from "../pages/LoginPage";
import AddProducts from "../pages/AddProducts";
import SignupPage from "../pages/SignupPage";
import UpdateFood from "../pages/UpdateFood";
import Details from "../pages/Details";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: '/allFoodItems',
                element: <AllFoodItems></AllFoodItems>,
                // loader: () => fetch(`http://localhost:5000/foods`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addProducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/updateFood/:id',
                element: <UpdateFood></UpdateFood>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: '/foods/:id',
                element: <Details></Details>,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: '/signup',
                element: <SignupPage></SignupPage>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
        ]
    }
]);

export default routes;