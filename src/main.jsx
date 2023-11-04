import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./Routes/Route";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <div className="max-w-7xl mx-auto">
        <React.StrictMode>
           <AuthProvider> <RouterProvider router={route}></RouterProvider></AuthProvider>
        </React.StrictMode>
    </div>
);
