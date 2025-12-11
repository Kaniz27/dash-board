import React, { useState } from "react";
import Sidebar from "../Sidebar";

const CreateInvoice = () => {
  const [items, setItems] = useState([{ name: "", quantity: 1, price: 0 }]);
  const [customerName, setCustomerName] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [date, setDate] = useState("");

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = field === "quantity" || field === "price" ? Number(value) : value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { name: "", quantity: 1, price: 0 }]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8 flex justify-center">
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-4xl">
          <h1 className="text-2xl font-bold mb-6 text-center">Create Invoice</h1>

          {/* Customer Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              placeholder="Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
            />
            <input
              type="text"
              placeholder="Invoice Number"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
            />
          </div>

          {/* Items Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Item Name</th>
                  <th className="border p-2 text-left">Quantity</th>
                  <th className="border p-2 text-left">Price</th>
                  <th className="border p-2 text-left">Total</th>
                  <th className="border p-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="border p-2">
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => handleItemChange(index, "name", e.target.value)}
                        className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                        className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="number"
                        min="0"
                        value={item.price}
                        onChange={(e) => handleItemChange(index, "price", e.target.value)}
                        className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#01cdcc]"
                      />
                    </td>
                    <td className="border p-2">{item.quantity * item.price}</td>
                    <td className="border p-2">
                      <button
                        onClick={() => removeItem(index)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={addItem}
            className="bg-[#01cdcc] text-white px-4 py-2 rounded hover:bg-[#009b9b] mb-4"
          >
            Add Item
          </button>

          {/* Total */}
          <div className="text-right font-semibold text-lg mb-4">
            Total Amount: ${totalAmount}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
              Cancel
            </button>
            <button className="bg-[#01cdcc] text-white px-4 py-2 rounded hover:bg-[#009b9b]">
              Save Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
