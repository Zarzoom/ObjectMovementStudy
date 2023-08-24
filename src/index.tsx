import * as React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from "./Pages/Layout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        // loader: put something here,
        // children: [
        //     {
        //         path: "team",
        //         element: <Team />,
        //         loader: teamLoader,
        //     },
        // ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")as HTMLElement).render(
    <RouterProvider router={router} />
);