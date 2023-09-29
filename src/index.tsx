import * as React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./StyleSheet.less"
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from "./Pages/Layout";
import Main from "./Pages/Main";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        // loader: put something here,
        children: [
            {
        path: "/Main",
        element: <Main/>,
        //         loader: teamLoader,
            },
        ],

    },
]);

ReactDOM.createRoot(document.getElementById("root")as HTMLElement).render(
    <RouterProvider router={router} />
);