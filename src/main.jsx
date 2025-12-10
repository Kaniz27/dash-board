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
import Logout from "./Components/Logout/Logout";
import Login from "./Components/Layout/Login";
import SocialSIdebar from'./Components/SocialMedia/SocialSidebar'
import PostGeneration from "./Components/SocialMedia/PostGeneration";
import Chatbot from "./Components/SocialMedia/Chatbot";
import SocialComments from "./Components/SocialMedia/SocialComments";
import OrderList from "./Components/Order/OrderList";
import OrderConfirm from "./Components/Order/OrderConfirm";
import OrderCancel from "./Components/Order/OrderCancel";
import Profile from "./Components/Profile/Profile";
import Users from "./Components/Profile/Users";
import Couriarlist from "./Components/Courier/Couriarlist";
import CourierBooking from "./Components/Courier/CourierBooking";
import Tracking from "./Components/Courier/Tracking";
import Refund from "./Components/Courier/Refund";
import Income from "./Components/Account/Income";
import Sells from "./Components/Account/Sells";
import Payment from "./Components/Account/Payment";
import DebitCredit from "./Components/Account/DebitCredit";
import ProfitLoss from "./Components/Account/ProfitLoss";


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
      // number
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
      // social media
      {
        path: "/socialmedia/post",
        element:<PostGeneration></PostGeneration>,
      },
      {
        path: "/socialmedia/add",
        element:<SocialSIdebar></SocialSIdebar>,
      },
      {
        path: "/socialmedia/post",
        element:<PostGeneration></PostGeneration>,
      },
      {
        path: "socialmedia/chatbot",
        element:<ChatList></ChatList>,
      },
      {
        path: "socialmedia/comments",
        element:<SocialComments></SocialComments>,
      },
      {
        path: "/socialmedia/call",
        element:<CallGeneration></CallGeneration>,
      },
      // orderlist
       {
        path: "/orders/list",
        element:<OrderList></OrderList>
      },
       {
        path: "/orders/confirm",
        element:<OrderConfirm></OrderConfirm>,
      },
       {
        path: "/orders/reject",
        element:<OrderCancel></OrderCancel>
       },
      //  payment
      {
        path: "/courier/list",
        element:<Couriarlist></Couriarlist>,
       },
       {
        path: "/courier/list",
        element:<Couriarlist></Couriarlist>,
       },
       {
        path: "/courier/:courierId/bookings",
        element:<CourierBooking></CourierBooking>
       },
       {
        path: "courier/tracking",
        element:<Tracking></Tracking>,
       },
       {
        path: "/courier/refund",
        element:<Refund></Refund>,
       },
      //  account
      {
        path: "account",
        element:<Income></Income>,
       },
       {
        path: "account/income",
        element:<Income></Income>,
       },
       {
        path: "/account/sells",
        element:<Sells></Sells>,
       },
       {
        path: "/account/refund",
        element:<Refund></Refund>,
       },
       {
        path: "account/payment",
        element:<Payment></Payment>,
       },
       {
        path: "/account/debit-credit",
        element:<DebitCredit></DebitCredit>,
       },
       {
        path: "/account/profit-loss",
        element:<ProfitLoss></ProfitLoss>,
       },
      //  payment

       {
        path: "/payment",
        element:<ProfitLoss></ProfitLoss>,
       },
       {
        path: "payment/bill",
        element:<ProfitLoss></ProfitLoss>,
       },
       {
        path: "/payment/voice",
        element:<ProfitLoss></ProfitLoss>,
       },
       {
        path: "Topup/Recharge",
        element:<ProfitLoss></ProfitLoss>,
       },
       {
        path: "/payment/topup",
        element:<ProfitLoss></ProfitLoss>,
       },
       {
        path: "/payment/transactions",
        element:<ProfitLoss></ProfitLoss>,
       },
       {
        path: "/payment/courier-history",
        element:<ProfitLoss></ProfitLoss>,
       },
      //  basic setup
      {
        path: "/setup/profile",
        element:<Profile></Profile>,
       },
       {
        path: "/setup/users",
        element:<Users></Users>,
       },

      // logout
      {
        path: "/logout",
        element:<Logout></Logout>,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
