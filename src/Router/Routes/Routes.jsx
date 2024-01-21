import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Admin/Login/Login";
import PreventLogIn from "../PreventLogin/PreventLogIn";
import AdminSite from "../../Layouts/AdminSite/AdminSite";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyRestaurants from "../../pages/Admin/MyRestaurant/MyRestaurant";
import Statistics from "../../pages/Admin/Statistics/Statistics";
import ErrorPage from "../../pages/Shared/ErrorPage/ErrorPage";
import ViewAsMyProfile from "../../pages/Admin/ViewEmployee/ViewAsMyProfile";
import OngoingOrders from "../../pages/Admin/Orders/OngoingOrders/OngoingOrders";
import DishCategory_Add from "../../pages/Admin/Dish_Category/DishCategory_Add/DishCategory_Add";
import DishCategory_List from "../../pages/Admin/Dish_Category/DishCategory_List/DishCategory_List";
import DishCategory_Edit from "../../pages/Admin/Dish_Category/DishCaregory_Edit/DishCatgory_Edit";
import AddEmployee from "../../pages/Admin/Employee/AddEmployee/AddEmployee";
import Dish_Add from "../../pages/Admin/DishManage/Dish_Add/Dish_Add";
import Dish_Edit from "../../pages/Admin/DishManage/DishEdit/Dish_Edit";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute><AdminSite /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MyRestaurants />
            },
            {
                path: '/my-profile',
                element: <ViewAsMyProfile />
            },
            {
                path: '/restaurant/:res_id/branch/:branchID',
                element: <Statistics />
            },
            {
                path: '/restaurant/:res_id/branch/:branchID/category',
                element: <DishCategory_List />
            },
            {
                path: '/restaurant/:res_id/branch/:branchID/add-category',
                element: <DishCategory_Add />
            },
            {
                path: '/restaurant/:res_id/branch/:branchID/edit-category/:categoryID',
                element: <DishCategory_Edit />
            },
            {
                path: '/restaurant/:res_id/branch/:branchID/dish',
                element: < ></>
            },
            {
                path: '/restaurant/:res_id/branch/:branchID/add-dish',
                element: <Dish_Add />
            },
            {
                path: '/restaurant/:res_id/branch/:branchID/edit-dish/:id',
                element: <Dish_Edit />
            },
            {
                path: '/restaurant/:res_id/branch/:branchID/add-employee',
                element: <AddEmployee />
            },
            {
                path: '/restaurant/:res_id/branch/:branchID/ongoing-orders',
                element: <OngoingOrders />
            },


        ]

    },
    {
        path: '/login',
        element: <PreventLogIn><Login /></PreventLogIn>
    }


])
