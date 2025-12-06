import Sidebar from "../Sidebar";
import Header from "../Header";
import Footer from "../Footer"; // <-- Footer Import

export default function Layout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar Fixed */}
      <div className="fixed left-0 top-0 h-screen z-50">
        <Sidebar />
      </div>

      {/* Right Section */}
      <div className="ml-64 w-full flex flex-col transition-all">

        {/* Header Fixed */}
        <div className="fixed top-0 left-64 right-0 h-16 z-40 bg-white shadow-sm">
          <Header />
        </div>

        {/* Page Content */}
        <div className="mt-16 mb-16 p-6 overflow-auto h-screen bg-[#f6f7f9]">
          {children}
        </div>

        {/* Footer Fixed */}
        <div className="fixed bottom-0 left-64 right-0 h-16 bg-white shadow-sm flex items-center justify-center z-40">
          <Footer />
        </div>

      </div>
    </div>
  );
}
