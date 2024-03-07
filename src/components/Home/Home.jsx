import React, { useState } from "react";
import TradingViewWidget from "../Widget/TradingViewWidget";
import RightCta from "../RightSection/RightCta";
import TrendingCoin from "../RightSection/TrendingCoin";

function Home() {
  const [usdPrice, setUsdPrice] = useState("46,953.04");
  const [inrPrice, setInrPrice] = useState("39,42,343");
  const [priceChange, setPriceChange] = useState("2.51");

  return (
    <div className=" w-screen h-screen p-[40px] bg-[#EFF2F5] text-center ">
      <div className=" w-[187.34px] h-[17px] flex items-center mx-[30px] mb-[20px] ">
        <span className="flex items-center gap-2">
          <p className=" font-[14px] text-[#3E5765]">Cryptocurrencies</p>
          <img src="src\assets\icon.png" alt="icon" />
        </span>
        <span className=" p-4 font-[14px] ">Bitcoin</span>
      </div>

      <div className="main flex h-[740px] justify-between items-center m-[30px] bg-white p-[40px] ">

        <div className=" left w-[860px] h-[711px] ">
          <div className="flex w-full h-[40px] items-center justify-start gap-[20px] mb-6 mt-6 ">
            <div>
              <img src="src\assets\bitcoin.png" alt="" />
            </div>
            <div
              className="w-[80px] h-[40px] text-center
             border-1 rounded-[8px] bg-[#808A9D] flex items-center justify-center text-white font-[16px] "
            >
              Rank #1
            </div>
          </div>

          <div className="w-[568.72px] h-[66px] flex justify-start items-start gap-4 mb-6  ">
            <div className="prices flex-col justify-start items-start ">
              <div className="usdPrice text-2xl text-left font-bold mb-[4px] ">
                ${usdPrice}
              </div>

              <div className="inrPrice text-lg text-left  font-semibold ">
                ₹{inrPrice}
              </div>
            </div>
            <div className="changes gap-2 flex items-center justify-center p-2 ">
              <div className=" w-[84px] h-[28px] rounded-[4px] flex items-center justify-center gap-[4px] text-[#14B079] font-semibold bg-[#EBF9F4] ">
                <img src="src\assets\Polygon 2.svg" alt="" />
                {priceChange}%
              </div>
              <span className="text-[#768396] ">(24H)</span>
            </div>
          </div>

          <div className=" w-full h-[460px] mt-4">
            <TradingViewWidget />
          </div>
        </div>

        <div className="right flex-col justify-self-start items-start h-full ">
            <RightCta/>
            <TrendingCoin/>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
