import React, { useEffect, useState } from "react";

function TrendingCoin() {
  const [data, setData] = useState({});
  useEffect(() => {
    try {
      url = "https://api.coingecko.com/api/v3/search/trending";
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="w-[427px] h-[225px] p-[24px] gap-[24px] rounded-[8px] bg-white  ">
      <h2 className="text-[#0F1629] font-semibold text-[24px] text-left my-[10px] ">
        Trending Coins (24h)
      </h2>

        <div className="flex-col h-fit justify-center items-start py-[10px] ">
            <div className=" mb-[10] h-fit flex items-center justify-between">
                <div className="flex items-center justify-start gap-5">
                    <div>
                        <img src="src\assets\eth.png" alt="" />
                    </div>
                    <div>Ethereum(ETH)</div>
                </div>

                <div className="w-[84px] h-[28] rounded-[4px] bg-[#EBF9F4] text-[#14B079] flex justify-center items-center gap-2 ">
                <img src="src\assets\Polygon 2.svg" alt="" />
                    <span> 8.21% </span>
                </div>
            </div>
            <div className=" mb-[10] h-fit flex items-center justify-between">
                <div className="flex items-center justify-start gap-5">
                    <div>
                        <img src="src\assets\btc.png" alt="" />
                    </div>
                    <div>Bitcoin (BTC)</div>
                </div>

                <div className="w-[84px] h-[28] rounded-[4px] bg-[#EBF9F4] text-[#14B079] flex justify-center items-center gap-2 ">
                <img src="src\assets\Polygon 2.svg" alt="" />
                    <span> 8.21% </span>
                </div>
            </div>
            <div className=" mb-[10] h-fit flex items-center justify-between">
                <div className="flex items-center justify-start gap-5">
                    <div>
                        <img src="src\assets\poly.png" alt="" />
                    </div>
                    <div>Polygon (MATIC)</div>
                </div>

                <div className="w-[84px] h-[28] rounded-[4px] bg-[#EBF9F4] text-[#14B079] flex justify-center items-center gap-2 ">
                <img src="src\assets\Polygon 2.svg" alt="" />
                    <span> 8.21% </span>
                </div>
            </div>
        </div>

    </div>
  );
}

export default TrendingCoin;
