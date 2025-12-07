import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


export default function Root() {
  return (
    <div className="flex">
      
     

     
      <div className="flex-1 flex flex-col min-h-screen">
        
        <Header />

       
        <main className="flex-1 p-4 mt-16">
          <Outlet />
        </main>

      
        <Footer />
      </div>
    </div>
  );
}
