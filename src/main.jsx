import "./index.css";
import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Root from "./Root/Root";
import Home from "./Components/Home/Home";
import ProductList from "./Components/ProductList";
import Calender from "./Components/Calendar";
import Email from "./Components/Email";

import ChatList from "./Components/ChatList";
import Ecommrece from "./Components/DashBoard/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "dashboard",
        element: <Ecommrece></Ecommrece>,
      },
      {
        path: "hospital",
        element: <h1>hi</h1>,
      },
      {
        path: "products",
        element: <ProductList></ProductList>,
      },
      {
        path: "chat",
        element: <ChatList></ChatList>,
      },
      {
        path: "calendar",
        element: <Calender></Calender>,
      },
      {
        path: "email",
        element: <Email></Email>,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
