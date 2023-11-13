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
import PrivateRoute from "./PrivateRoute";
import Bookings from "../pages/Bookings";
import ChoiceFood from "../pages/ChoiceFood";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://restaurant-public-server-jmrq3szqz.vercel.app/foods')
            },
            {
                path: '/allFoodItems',
                element: <PrivateRoute><AllFoodItems></AllFoodItems></PrivateRoute>,
                // loader: () => fetch(`https://restaurant-public-server-jmrq3szqz.vercel.app/foods`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/choices',
                element: <ChoiceFood></ChoiceFood>,
                loader: () => fetch('https://restaurant-public-server-jmrq3szqz.vercel.app/foods')
            },
            {
                path: '/addProducts',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path: '/updateFood/:id',
                element: <UpdateFood></UpdateFood>,
                loader: ({params}) => fetch(`https://restaurant-public-server-jmrq3szqz.vercel.app/foods/${params.id}`)
            },
            {
                path: '/foods/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('https://restaurant-public-server-jmrq3szqz.vercel.app/foods')
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
                // loader: () => fetch(`https://restaurant-public-server-jmrq3szqz.vercel.app/bookings`)
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