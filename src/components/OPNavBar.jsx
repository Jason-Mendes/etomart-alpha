import React, { useState } from 'react';
import { Button, Img, List, Text } from '../components';
import { CgMenuRound, CgMenuOreos, CgMenuCake, CgClose } from "react-icons/cg";
import { Link } from 'react-router-dom';



function OPNavBar() {
  // console.log('Rendering OPNaxvBar');
  
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
      <nav className="bg-slate-100 text-orange-500 px-4">
      <div className="mt-0  flex items-center justify-between py-0 sm:mx-0 sm:mb-4 md:px-4">

        <div className="flex items-center mt-4 mb-4">
          <h1 className='-mt-2 text-3xl font-bold text-[#df7000] whitespace-nowrap'>Etomart</h1>
        </div>

        <ul className="hidden md:flex">
          <li className='px-4 whitespace-nowrap'>
            <Link to="/LandingPage" className="hover:text-black">LandingPage</Link>
          </li>
          <li className='px-4 whitespace-nowrap'>
            <Link to="/home" className="hover:text-black">Home</Link>
          </li>
          <li className='px-4 whitespace-nowrap'>
            <Link to="/products" className="hover:text-black">Products</Link>
          </li>
          <li className='px-4 whitespace-nowrap'>
            <Link to="/cart" className="hover:text-black">Cart</Link>
          </li>
          <li className='px-4 whitespace-nowrap'>
            <Link to="/user-profile" className="hover:text-black">User Profile</Link>
          </li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <CgClose size={30}/> : <CgMenuRound size={30}/>}
          <div className="mt-0 mb-16 flex items-center justify-between py-0 sm:mx-0 sm:mb-0 sm:px-0 md:px-4">
        <Text className="text-[25px] sm:text-[25px] md:text-[25px] text-orange-500 my-4 ml-4 mr-2" size="txtShrikhandRegular45">
      Etomart
    </Text>
          <ul className='uppercase p-2'>
          <li className='p-2 whitespace-nowrap border-b'>
            <Link to="/LandingPage" className="hover:text-black">Landing Page</Link>
          </li>
          <li className='p-2 whitespace-nowrap border-b'>
            <Link to="/home" className="hover:text-black">Home</Link>
          </li>
          <li className='p-2 whitespace-nowrap border-b'>
            <Link to="/products" className="hover:text-black">Products</Link>
          </li>
          <li className='p-2 whitespace-nowrap border-b'>
            <Link to="/cart" className="hover:text-black">Cart</Link>
          </li>
          <li className='p-2 whitespace-nowrap'>
            <Link to="/user-profile" className="hover:text-black">User Profile</Link>
          </li>
          </ul>
        </div>
      </div>
      </div>
      </nav>
    
    );
}

export default OPNavBar;

//Other Pages Nav Bar