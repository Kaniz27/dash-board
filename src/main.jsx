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

import DashBoard from "./Components/DashBoard/DashBoard";
import Dashboard from "./Components/Sidebar";
import VoiceAgent from "./Components/AIagent/VoiceAgent";
import VoiceLibrary from "./Components/AIagent/VoiceLibrary";
import UnPublished from "./Components/AIagent/UnPublished";
import Published from "./Components/AIagent/Published";
import SystemTrained from "./Components/AIagent/SystemTrained";
import BuyNumber from "./Components/Number/BuyNumber";
import ActiveNumber from "./Components/Number/ActiveNumber";
import SIPRegistration from "./Components/Number/SIPRegistration";
import CallGeneration from "./Components/Number/CallGeneration";

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
        element: <DashBoard></DashBoard>,
      },
      {
        path: "dashboard/main",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/aiagent",
        element: <VoiceAgent></VoiceAgent>,
      },
      {
        path: "/aiagent/create",
        element: <VoiceAgent></VoiceAgent>,
      },
      {
        path: "/aiagent/voice-library",
        element: <VoiceLibrary></VoiceLibrary>,
      },
      {
        path: "/aiagent/unpublished",
        element: <UnPublished></UnPublished>,
      },
      {
        path: "/aiagent/published",
        element:<Published></Published>,
      },
      {
        path: "/aiagent/system-trained",
        element:<SystemTrained></SystemTrained>,
      },
      {
        path: "/number",
        element:<BuyNumber></BuyNumber>,
      },
      {
        path: "/number/buy",
        element:<BuyNumber></BuyNumber>,
      },
      {
        path: "/number/active",
        element:<ActiveNumber></ActiveNumber>,
      },
      {
        path: "/number/sip",
        element:<SIPRegistration></SIPRegistration>,
      },
      {
        path: "/number/call",
        element:<CallGeneration></CallGeneration>,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
