import React from 'react'

function Navbar() {
  return (
    <div className='h-[80px] w-full flex justify-around items-center shadow-md '>
      <div className='w-[96px] h-[72px]   '>
        <img src="src\assets\logo.png" alt="logo" />
      </div>
        <div className=' w-[909px] flex items-center h-full justify-between '>
        <div className='flex justify-end items-center w-[728px] h-full gap-[25px] font-semibold '>
            <a href="#">Crypto Taxes</a>
            <a href="#">Free Tools</a>
            <a href="#">Resource Center</a>
        </div>
      <div className='flex justify-end items-center h-full font-semibold '>
        </div>
            <button className=' w-[136px] h-[40px] bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white p-[8px] rounded-[8px]
 '>
                <a href="#">Get Started</a>
            </button>
        </div>
    </div>
  )
}

export default Navbar;
