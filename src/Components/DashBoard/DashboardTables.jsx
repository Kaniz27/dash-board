// components/DashboardTablesWithImages.jsx
export default function DashboardTables() {
  const products = [
    {
      name: "Wireless Earbuds",
      category: "Electronics",
      status: "In Stock",
      units: "1,240",
      revenue: "$24,800",
      image: "https://via.placeholder.com/40", // Replace with real image link
    },
    {
      name: "Smart Watch",
      category: "Electronics",
      status: "Low Stock",
      units: "980",
      revenue: "$49,000",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "iPhone 15 Pro",
      category: "Electronics",
      status: "In Stock",
      units: "1,100",
      revenue: "$1,320,000",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Luxury Perfume",
      category: "Beauty",
      status: "Low Stock",
      units: "780",
      revenue: "$46,800",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Hydrating Beauty Cream",
      category: "Beauty",
      status: "In Stock",
      units: "620",
      revenue: "$18,600",
      image: "https://via.placeholder.com/40",
    },
  ];

  const orders = [
    {
      customer: "Alice Johnson",
      customerAvatar: "https://via.placeholder.com/40",
      product: "Wireless Earbuds",
      productImage: "https://via.placeholder.com/40",
      status: "Delivered",
      date: "11 Sep 2025",
    },
    {
      customer: "Michael Smith",
      customerAvatar: "https://via.placeholder.com/40",
      product: "Smart Watch",
      productImage: "https://via.placeholder.com/40",
      status: "Pending",
      date: "10 Sep 2025",
    },
    {
      customer: "Sophia Lee",
      customerAvatar: "https://via.placeholder.com/40",
      product: "Gaming Laptop",
      productImage: "https://via.placeholder.com/40",
      status: "Cancelled",
      date: "09 Sep 2025",
    },
    {
      customer: "Olivia Brown",
      customerAvatar: "https://via.placeholder.com/40",
      product: "Luxury Perfume",
      productImage: "https://via.placeholder.com/40",
      status: "Delivered",
      date: "06 Sep 2025",
    },
    {
      customer: "Liam Johnson",
      customerAvatar: "https://via.placeholder.com/40",
      product: "Winter Jacket",
      productImage: "https://via.placeholder.com/40",
      status: "Pending",
      date: "05 Sep 2025",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Top Selling Products */}
      <div className="bg-white p-6 rounded-lg shadow flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-700 font-semibold text-lg">Top Selling Products</h2>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-3">Product</th>
                <th className="py-2 px-3">Category</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3">Units Sold</th>
                <th className="py-2 px-3">Revenue</th>
                <th className="py-2 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-3 flex items-center gap-2">
                    <img src={product.image} alt={product.name} className="w-10 h-10 rounded object-cover" />
                    {product.name}
                  </td>
                  <td className="py-2 px-3">{product.category}</td>
                  <td className="py-2 px-3">{product.status}</td>
                  <td className="py-2 px-3">{product.units}</td>
                  <td className="py-2 px-3">{product.revenue}</td>
                  <td className="py-2 px-3 text-blue-600 cursor-pointer">View</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-6 rounded-lg shadow flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-700 font-semibold text-lg">Recent Orders</h2>
          <button className="text-sm text-purple-600 font-medium hover:underline">See All</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-3">Customer</th>
                <th className="py-2 px-3">Product</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-3 flex items-center gap-2">
                    <img src={order.customerAvatar} alt={order.customer} className="w-10 h-10 rounded-full object-cover" />
                    {order.customer}
                  </td>
                  <td className="py-2 px-3 flex items-center gap-2">
                    <img src={order.productImage} alt={order.product} className="w-10 h-10 rounded object-cover" />
                    {order.product}
                  </td>
                  <td className="py-2 px-3">{order.status}</td>
                  <td className="py-2 px-3">{order.date}</td>
                  <td className="py-2 px-3 text-blue-600 cursor-pointer">View</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
