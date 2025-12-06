import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar"; 
import Header from "./Header";
import { FiPlus, FiTrash2, FiEdit } from "react-icons/fi";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">

      {/* Fixed Sidebar */}
      <div className="w-64 fixed left-0 top-0 bottom-0 bg-white shadow-lg z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col overflow-hidden">

        {/* Header above content */}
        <Header />

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-auto">

          {/* Page Title & Add Button */}
          <div className="w-full flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Product List</h1>
            <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700">
              <FiPlus /> Add Product
            </button>
          </div>

          {/* Product Table */}
          <div className="bg-white shadow rounded-lg overflow-hidden">

            {/* Table Head */}
            <div className="grid grid-cols-10 text-sm font-semibold">
              <div className="p-3 bg-purple-200">ID</div>
              <div className="p-3 bg-purple-300">Product</div>
              <div className="p-3 bg-purple-200">Category</div>
              <div className="p-3 bg-purple-300">SKU</div>
              <div className="p-3 bg-purple-200">Price</div>
              <div className="p-3 bg-purple-300">Discount</div>
              <div className="p-3 bg-purple-200">Stock</div>
              <div className="p-3 bg-purple-300">Status</div>
              <div className="p-3 bg-purple-200">Rating</div>
              <div className="p-3 bg-purple-300">Actions</div>
            </div>

            {/* Table Rows */}
            {products.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-10 text-sm border-b hover:bg-purple-50 transition"
              >
                <div className="p-3 bg-purple-50">{item.id}</div>

                <div className="flex items-center gap-3 p-3 bg-purple-100">
                  <img
                    src={item.image}
                    className="w-10 h-10 rounded object-cover"
                    alt={item.product}
                  />
                  <div>
                    <p className="font-medium">{item.product}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>

                <div className="p-3 bg-purple-50">{item.category}</div>
                <div className="p-3 bg-purple-100">{item.sku}</div>
                <div className="p-3 bg-purple-50">${item.price}</div>
                <div className="p-3 bg-purple-100">{item.discount}%</div>
                <div className="p-3 bg-purple-50">{item.stock}</div>
                <div className="p-3 bg-purple-100">{item.status}</div>
                <div className="p-3 bg-purple-50">{item.rating} / 5</div>

                <div className="p-3 bg-purple-100 flex gap-3">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FiEdit size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
