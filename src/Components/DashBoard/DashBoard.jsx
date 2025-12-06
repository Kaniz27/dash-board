import Layout from "./Layout";
import { FaHome } from "react-icons/fa";
import SalesBar from "./SalesBar";
import DashboardStats from "./DashBoardStarts";
import DashboardCards from "./DashboardCards";
import TopCustomers from "./TopCustomers";
import RevenueChart from "./RevenueChart";
// import DashboardTables from "./DashboardTables";
import DashboardCardLast from "./DashBoardcardLast";
import TopCategories from "./TopCategories";
import SocialMedia from "./SocialMedia";
import OrderStatisticsCard from "./OrderStatisticsCard";

export default function DashBoard() {
  return (
    <div>
      <Layout>
        <div className="w-full p-4 ">
          {/* Main Top Breadcrumb Bar */}
          <div className="w-full p-4 rounded flex items-center justify-between">
            {/* Left: Dashboard Title */}
            <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>

            {/* Right: Breadcrumb */}
            <div className="flex items-center gap-2 text-gray-600">
              <FaHome
                className="hover:text-violet-300 text-gray-400 cursor-pointer"
                size={16}
              />
              <span className="text-gray-400">›</span>
              <span className="cursor-pointer hover:text-violet-300">
                Dashboard
              </span>
              <span className="text-gray-900">›</span>
            </div>
          </div>

          {/* Bottom 2 Columns */}
          <div className="flex w-full min-h-screen gap-2">
            {/* Left Column */}
            <div className="w-[65%] flex flex-col gap-4">
              {/* Welcome Card */}
              <div className="bg-white p-6 rounded shadow">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  {/* Left Side: Text + Button */}
                  <div className="flex-1 flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-gray-800">
                      Welcome Back, Charlie!
                    </h1>
                    <p className="text-gray-500">
                      Here’s a quick look at your store’s performance today. Stay on top of your sales, orders, and customers.
                    </p>
                    <div className="text-gray-800 font-semibold text-2xl">৳25,56k</div>
                    <div className="text-gray-400 font-medium">
                      Monthly Sales <span className="text-[#01cdcc]">5.2%</span>
                    </div>
                    <button className=" bg-[#01cdcc] text-white px-4 py-2 rounded hover:bg-[#006766] w-max">
                      View Details
                    </button>
                  </div>

                  {/* Right Side: Image */}
                  <div className="flex-1">
                    <img
                      src="https://codebucks.in/aquiry/html/ltr/assets/images/dashboard/ecommerce/welcome.png"
                      alt="Dashboard illustration"
                      className="w-full h-auto object-cover rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Sales & Stats */}
              <div className="pt-4">
                <SalesBar />
              </div>
              <div className="pt-4">
                <DashboardStats />
              </div>
              <div className="mt-2">
                <DashboardCards />
              </div>
              <div className="mt-2">
                <TopCustomers />
              </div>

              {/* Left Extra Div */}
              
            </div>

            {/* Right Column */}
            <div className="w-[35%] flex flex-col gap-2">
              <div className="  rounded text-black font-bold">
                <SocialMedia></SocialMedia>
              </div>
              <div className="  rounded text-black font-bold">
               <OrderStatisticsCard></OrderStatisticsCard>
              </div>
              <div className=" rounded  font-bold">
                <TopCategories></TopCategories>
              </div>
            </div>
          </div>

          {/* Niche Extra Div */}
          <div className="  mt-4 rounded  text-white text-center">
           <RevenueChart></RevenueChart>
          </div>
          <div className=" rounded   text-center">
           {/* <DashboardTables></DashboardTables> */}
          </div>
          <div className="  mt-4 rounded   text-center">
          <DashboardCardLast></DashboardCardLast>
          </div>
        </div>
      </Layout>

      {/* Optional: Outside Layout */}
      <div className="text-center mt-6">
       
      </div>
    </div>
  );
}
