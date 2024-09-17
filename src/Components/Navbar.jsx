import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSafeFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [delivery, setDelivery] = useState(true);
  const [pickup, setPickup] = useState(false);

  function handleDelivery() {
    setDelivery(true);
    setPickup(false);
  }
  function handlePickup() {
    setDelivery(false);
    setPickup(true);
  }

  function handleMenu() {
    setNav(!nav);
  }

  function handleCloseMenu() {
    setNav(!nav);
  }

  function handleLogin() {
    <Link to="/about" />;
  }

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="ml-4 mr-4 max-w-[1640px] border-gray-950 mx-auto flex justify-between">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu onClick={handleMenu} size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold"> Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          {delivery ? (
            <button
              style={{
                backgroundColor: "black", // bg-black
                color: "white", // text-white
                display: "flex", // flex
                alignItems: "center", // items-center
                padding: "0.5rem", // py-2 (padding: 8px on top and bottom)
                borderRadius: "9999px",
              }}
              onClick={handleDelivery}
            >
              <p>Delivery</p>
            </button>
          ) : (
            <button
              style={{
                backgroundColor: "white", // bg-black
                color: "black", // text-white
                display: "flex", // flex
                alignItems: "center", // items-center
                padding: "0.5rem", // py-2 (padding: 8px on top and bottom)
                borderRadius: "9999px",
              }}
              onClick={handleDelivery}
            >
              <p>Delivery</p>
            </button>
          )}

          {pickup ? (
            <button
              style={{
                backgroundColor: "black", // bg-black
                color: "white", // text-white
                display: "flex", // flex
                alignItems: "center", // items-center
                padding: "0.5rem", // py-2 (padding: 8px on top and bottom)
                borderRadius: "9999px",
              }}
              onClick={handlePickup}
            >
              <p>Pickup.. </p>
            </button>
          ) : (
            <button
              style={{
                backgroundColor: "white", // bg-black
                color: "black", // text-white
                display: "flex", // flex
                alignItems: "center", // items-center
                padding: "0.5rem", // py-2 (padding: 8px on top and bottom)
                borderRadius: "9999px",
              }}
              onClick={handlePickup}
            >
              <p>Pickup</p>
            </button>
          )}
        </div>
      </div>
      {/* search  */}

      <div className="bg-gray-200  rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none  "
          type="text"
          placeholder="Search foods"
        />
      </div>

      <div>
        {/* cart */}
        <button className="bg-black text-white   flex items-center py-2 rounded-full">
          <BsFillCartFill size={22} className="mr-3" /> Cart
        </button>
      </div>
      {/* mobile menu */}
      {/* Overlay */}
      {nav ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 0,
          }}
        ></div>
      ) : (
        ""
      )}

      {/*sider drawer menu */}
      <div
        style={
          nav
            ? {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "white",
                zIndex: 10,
                transitionDuration: "300ms",
              }
            : {
                position: "fixed",
                top: 0,
                left: "-100%",
                width: "300px",
                height: "100vh",
                backgroundColor: "white",
                zIndex: 10,
                transitionDuration: "300ms",
              }
        }
      >
        <AiOutlineClose
          size={30}
          onClick={handleCloseMenu}
          style={{
            position: "absolute",
            right: "16px", // Assuming 1rem = 16px in your design
            top: "16px", // Assuming 1rem = 16px in your design
            cursor: "pointer",
          }}
        />

        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <button
                onClick={() => handleNavigate("/orders")}
                className="flex items-center"
              >
                <TbTruckDelivery size={25} className="mr-4" />
                Orders
              </button>
            </li>
            <li className="text-xl py-4 flex">
              <button
                onClick={() => handleNavigate("/favourites")}
                className="flex items-center"
              >
                <MdFavorite size={25} className="mr-4" />
                Favourites
              </button>
            </li>
            <li className="text-xl py-4 flex">
              <button
                onClick={() => handleNavigate("/wallet")}
                className="flex items-center"
              >
                <FaWallet size={25} className="mr-4" />
                Wallet
              </button>
            </li>
            <li className="text-xl py-4 flex">
              <button
                onClick={() => handleNavigate("/help")}
                className="flex items-center"
              >
                <MdHelp size={25} className="mr-4" />
                Help
              </button>
            </li>
            <li className="text-xl py-4 flex">
              <button
                onClick={() => handleNavigate("/promotions")}
                className="flex items-center"
              >
                <AiFillTag size={25} className="mr-4" />
                Promotions
              </button>
            </li>
            <li className="text-xl py-4 flex">
              <button
                onClick={() => handleNavigate("/best-ones")}
                className="flex items-center"
              >
                <BsFillSafeFill size={25} className="mr-4" />
                Best Ones
              </button>
            </li>
            <li className="text-xl py-4 flex">
              <button
                onClick={() => handleNavigate("/adminLogin")}
                className="flex items-center"
              >
                <FaUserFriends size={25} className="mr-4" />
                Login As Admin
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
