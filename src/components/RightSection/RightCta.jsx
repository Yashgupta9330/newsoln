import React from "react";

function RightCta() {
  return (
    <div className=" w-[426px] h-[525px] rounded-[16px] bg-[#0052FE] flex-col justify-center items-center text-white p-[40px] ">
        <h1 className="text-[24px] font-bold text-center m-[10px] leading-[40px] ">
          Get Started with KoinX for FREE
        </h1>

      <p className="leading-[24px] text-[14px] font-semibold ">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>

      <div className="flex items-center justify-center m-8 ">
        <img src="src\assets\Frame.png" alt="" />
      </div>
      <div className="w-fit h-fit m-auto">
        <button className=" flex items-center justify-center w-[237px] h-[48px] rounded-[8px] bg-white text-black font-semibold ">
        Get Started for FREE
        <img src="src\assets\arrow-right.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default RightCta;
