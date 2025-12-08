import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../Sidebar';
import { FaSyncAlt, FaShoppingCart, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const BuyNumber = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const fetchPhoneNumbers = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        'https://engine.careon.io/api/phone_numbers/available/',
        {
          method: 'GET',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzY3NzYxODU3LCJpYXQiOjE3NjUxNjk4NTcsImp0aSI6IjA0ZDVkY2M0ZjRlNjQ3MzZhZjQyY2I3YTI1MmIzYTQ3IiwidXNlcl9pZCI6IjIifQ.Fsr6Irm00g0E8MTke7ZcdaaiAXRMqi7eU7kXUZQHsgQ'
          }
        }
      );

      const data = await res.json();
      if (data.status === 'success') setPhoneNumbers(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhoneNumbers();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const countryOptions = [
    ...new Set(
      phoneNumbers.map((num) => num.iso_country).filter(Boolean)
    )
  ].slice(0, 10);

  const filteredNumbers =
    selectedCountries.length > 0
      ? phoneNumbers.filter((num) => selectedCountries.includes(num.iso_country))
      : phoneNumbers;

  const toggleCountry = (country) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country]
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar collapsed={collapsed} />

      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          collapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Buy Numbers</h1>

        {/* Filter Section */}
        <div className="p-4 rounded-xl flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
          <button
            onClick={fetchPhoneNumbers}
            className="flex items-center gap-2 px-4 py-2 bg-[#01cdcc] text-white rounded hover:bg-[#006766] transition"
          >
            <FaSyncAlt /> Refresh Numbers
          </button>

          {/* Dropdown */}
          <div className="relative w-full md:w-64" ref={dropdownRef}>
            <div
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center border border-gray-300 rounded bg-white p-2 cursor-pointer"
            >
              <span className="flex-1 text-gray-700">
                {selectedCountries.length === 0
                  ? 'Select Countries'
                  : selectedCountries.join(', ')}
              </span>

              {dropdownOpen ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </div>

            {dropdownOpen && (
              <div className="absolute w-full bg-white border border-gray-300 rounded shadow mt-1 max-h-56 overflow-y-auto z-50">
                {countryOptions.map((country, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCountries.includes(country)}
                      onChange={() => toggleCountry(country)}
                    />
                    <span className="capitalize">{country}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Header */}
        <div className="hidden md:flex bg-gray-200 p-2 rounded-t-xl font-semibold border border-gray-200">
          <span className="w-1/6">Phone Number</span>
          <span className="w-1/6">Friendly Name</span>
          <span className="w-1/6">Region</span>
          <span className="w-1/6">Country</span>
          <span className="w-1/6">Price</span>
          <span className="w-1/6 text-center">Action</span>
        </div>

        {/* Rows */}
        {loading ? (
          <p className="text-center text-lg font-semibold mt-6">
            Loading phone numbers...
          </p>
        ) : filteredNumbers.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-6">
            No phone numbers available
          </p>
        ) : (
          <div className="flex flex-col gap-2 mt-2">
            {filteredNumbers.map((num, index) => (
              <div
                key={index}
                className="flex md:flex-row flex-col justify-between items-center bg-white p-3 rounded-xl border border-gray-200 shadow hover:shadow-md transition"
              >
                <span className="w-1/6">{num.phone_number}</span>
                <span className="w-1/6">{num.rate_center || 'N/A'}</span>
                <span className="w-1/6">{num.region || 'N/A'}</span>
                <span className="w-1/6">{num.iso_country || 'N/A'}</span>
                <span className="w-1/6">${num.price}</span>

                <div className="w-1/6 flex justify-center">
                  <button className="flex items-center gap-1 px-3 py-2 bg-[#01cdcc] text-white rounded text-sm hover:bg-[#006766] transition">
                    <FaShoppingCart /> Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyNumber;
