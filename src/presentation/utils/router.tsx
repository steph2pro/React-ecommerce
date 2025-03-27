import {createBrowserRouter} from "react-router-dom";
import Connexion from "../pages/Connexion.tsx";
import Home from "../pages/home.tsx";
import {STRING_ROUTE_DASHBOARD, STRING_ROUTE_HOME, STRING_ROUTE_LOGING, STRING_ROUTE_OUT,} from "./const.ts";
import TestPage from "../pages/testPage.tsx";
import Dashboard from "../pages/Dashboard.tsx";

const router = createBrowserRouter([
    {
        path: STRING_ROUTE_LOGING,
        element: <Connexion/>,
    },
    {
        path: STRING_ROUTE_HOME,
        element: <Home/>,
        children: [
            {
                // path: STRING_ROUTE_DASHBOARD,
                element: <Dashboard/>,
                index:true
            },
            {
                path: STRING_ROUTE_OUT,
                element: <Connexion/>
            },
            // {
            //     path: STRING_ROUTE_TEST,
            //     element: <TestPage/>,
            // },
        ]
    }
]);

export default router;