import { createBrowserRouter } from "react-router-dom";
import Connexion from "../pages/Connexion.tsx";
import Home from "../pages/home.tsx";
import { STRING_ROUTE_DASHBOARD, STRING_ROUTE_HOME, STRING_ROUTE_OUT, STRING_ROUTE_CATEGORIE, STRING_ROUTE_ORDERS, STRING_ROUTE_COUPON,STRING_ROUTE_REGISTER,STRING_ROUTE_CONNEXION,TRING_ROUTE_LISTPRODUIT, TRING_ROUTE_ADD } from "./const.ts";
import TestPage from "../pages/testPage.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import Categori from "../pages/Categori.tsx";
import Orders from "../pages/Orders.tsx";
import Coupon from "../pages/Coupon.tsx";
import Register from "../pages/Register.tsx";
import ListProduit from "../pages/produits/ListProduit.tsx";
import AddProduct from "../pages/produits/AddProduct.tsx";

const router = createBrowserRouter([
    
    {
        path: STRING_ROUTE_CONNEXION,
        element: <Connexion />
    },
    {
        path: STRING_ROUTE_REGISTER,
        element: <Register />
    },
    {
        path: STRING_ROUTE_HOME,
        element: <Home />,
        children: [
            {
                // path: STRING_ROUTE_DASHBOARD,
                element: <Dashboard />,
                index: true
            },
            {
                path: STRING_ROUTE_CATEGORIE,
                element: < Categori />
            },

            {
                path: STRING_ROUTE_ORDERS,
                element: <Orders />
            },
            {
                path: STRING_ROUTE_COUPON,
                element: <Coupon />
            },
            {
                path: TRING_ROUTE_LISTPRODUIT,
                element: <ListProduit />
            },
            {
                path: TRING_ROUTE_ADD,
                element: <AddProduct />
            },
            // {
            //     path: STRING_ROUTE_TEST,
            //     element: <TestPage/>,
            // },
        ]
    }
]);

export default router;

