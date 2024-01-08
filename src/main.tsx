import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import App2 from "./App2.tsx";
import Home from "./Home.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Single",
    element: <App />,
  },
  {
    path: "Multi",
    element: <App2 />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);