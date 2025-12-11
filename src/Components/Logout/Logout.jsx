import { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1️⃣ Token / auth data remove
    localStorage.removeItem("token");
    sessionStorage.clear();

    // 2️⃣ Tailwind Toast create & show
    const toast = document.createElement("div");
    toast.className =
      "fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-slideDown z-[9999]";
    toast.innerText = "Logged out successfully!";
    document.body.appendChild(toast);

    // 3️⃣ Remove toast after 3 seconds
    setTimeout(() => {
      toast.remove();

      // 4️⃣ Redirect to login page
      navigate("/login");
    }, 3000);
  }, [navigate]);

  return null;
};

export default Logout;
