import React from "react";
import { Admincategories } from "../../Data/data.js";
import { useSelector } from "react-redux";

function AdminLogin() {
  const username=useSelector((state)=>state.Login.LoginUser.UserName)

  
  


  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-8">
        Welcome {username} to Admin Site 
      </h1>
      {/* Category */}
      <div className="flex flex-col gap-6 py-6">
        {Admincategories.map((item, index) => (
          <button style={{ backgroundColor: "white", borderColor: "white" }}>
            <div
              key={index}
              className="bg-white p-6 flex items-center shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg border border-gray-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-full border border-gray-300 mr-6"
              />
              <h2 className="font-bold text-xl text-gray-800 flex-grow">
                {item.name}
              </h2>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AdminLogin;
