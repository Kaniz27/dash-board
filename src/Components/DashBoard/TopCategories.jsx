import React from "react";

const TopCategories = () => {
  const categories = [
    { name: "Luxury Perfumes", rating: 4.4, price: 129, img: "https://codebucks.in/aquiry/html/ltr/assets/images/apps/ecommrece/product-3.png" },
    { name: "Smart Watch", rating: 4.3, price: 179, img: "https://codebucks.in/aquiry/html/ltr/assets/images/apps/ecommrece/product-2.png" },
    { name: "Smartphone", rating: 4.7, price: 799, img: "https://codebucks.in/aquiry/html/ltr/assets/images/apps/ecommrece/iphone.png" },
    { name: "Wireless Earbuds", rating: 4.5, price: 99, img: "https://codebucks.in/aquiry/html/ltr/assets/images/apps/ecommrece/buds.png" },
    { name: "Leather Jacket", rating: 4.6, price: 99, img: "https://codebucks.in/aquiry/html/ltr/assets/images/apps/ecommrece/jacket.png" },
    { name: "Gaming Laptop", rating: 4.8, price: 1299, img: "https://codebucks.in/aquiry/html/ltr/assets/images/apps/ecommrece/laptop.png" },
    { name: "DSLR Camera", rating: 4.8, price: 899, img: "https://codebucks.in/aquiry/html/ltr/assets/images/apps/ecommrece/buds.png" },
    { name: "Organic Honey", rating: 4.7, price: 499, img: "https://codebucks.in/aquiry/html/ltr/assets/images/apps/ecommrece/honey.png" },
    { name: "Hydrating Cream", rating: 4.4, price: 129, img: "https://codebucks.in/aquiry/html/ltr/assets/images/apps/ecommrece/product-1.png" },
    { name: "Makeup Set", rating: 4.7, price: 499, img: "https://codebucks.in/aquiry/html/ltr/assets/images/apps/ecommrece/product-4.png" },

    // Added 3 new categories
    { name: "Running Shoes", rating: 4.5, price: 150, img: "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=" },
    { name: "Backpack", rating: 4.3, price: 79, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFR0jprpieheiWmle3y_nNfo1HV-NIRz85g&s" },
    { name: "Sunglasses", rating: 4.6, price: 99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnql-l_C7j9TPCfjB1zxms3zROQmJLg7iQw&s" },
  ];

  return (
    <div className="flex-1 bg-white  p-5 shadow rounded-lg overflow-y-auto">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Top Categories</h3>
        <button className="text-blue-600">See All →</button>
      </div>

      <div className="mt-4 pb-4.5 space-y-4">
        {categories.map((c, i) => (
          <div key={i} className="flex justify-between items-center rounded-lg p-2 hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <img src={c.img} alt={c.name} className="w-12 h-12 rounded" />
              <div>
                <p className="font-semibold">{c.name}</p>
                <p className="text-yellow-500 text-sm">⭐ {c.rating}</p>
              </div>
            </div>
            <p className="font-semibold"><span className="font-serif">৳</span>{c.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
