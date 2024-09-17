import React from "react";
import { categories } from "../Data/data.js";

const Category = () => {
  console.log(categories);
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Category */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 ">
        {categories.map((item, index) => (
          <button style={{ backgroundColor: "white",borderColor:"white" }}>
            <div
              key={index}
              className="bg-gray-100 
             p-4  flex justify-between items-center shadow-lg hover:scale-105 duration-300 rounded-lg"
            >
              <h2 className="font-bold sm:text-xl"> {item.name}</h2>
              <img src={item.image} alt={item.name} className="w-20 " />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
