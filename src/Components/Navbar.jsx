import React, { useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill, BsFillSafeFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import {MdFavorite,MdHelp} from 'react-icons/md'


const Navbar = () => {

    const [nav,setNav]=useState(false)

    function handleMenu(){
        setNav(!nav)

    }

    function handleCloseMenu(){
        setNav(!nav)
    }
     
  return (
    <div className='ml-4 mr-4 max-w-[1640px] border-gray-950 mx-auto flex justify-between'>

        <div className='flex items-center'>
            <div className='cursor-pointer'>
                <AiOutlineMenu  onClick={handleMenu} size={30}/>
            

            </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2' >
                Best <span className='font-bold'> Eats</span>

                </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
            

        </div>
        {/* search  */}

        <div className='bg-gray-200  rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20}/>
            <input className='bg-transparent p-2 w-full focus:outline-none  ' type='text' placeholder='Search foods'/>
        </div>

        <div>
            {/* cart */}
            <button className='bg-black text-white   flex items-center py-2 rounded-full'>
                <BsFillCartFill size={22} className='mr-3'/> Cart
            </button>

        </div> 
        {/* mobile menu */}
        {/* Overlay */}
        {nav?  <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
        </div> :''}
       
          {/*sider drawer menu */}
        <div className={nav? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
          
            <AiOutlineClose size={30} onClick={handleCloseMenu}  className=' absolute right-4 top-4 cursor-pointer'/>

            <h2 className='text-2xl p-4'> 
                Best <span className='font-bold'>Eats</span>
            </h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
                    <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4'/>Favourites</li>
                    <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4'/>Wallet</li>
                    <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4'/>Help</li>
                    <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4'/>Promotions</li>
                    <li className='text-xl py-4 flex'><BsFillSafeFill size={25} className='mr-4'/>Best Ones</li>
                    <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>

                </ul>
            </nav>


        </div>
        
        
       
    
    </div>
  )
}

export default Navbar 