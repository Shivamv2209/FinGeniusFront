import React from "react";
import Bar from "./Bar";
import StockShow from "./StockShow";

function StocksDisplay(){
    return(
        <div className="w-screen h-[86vh] bg-zinc-900">
            <hr className="text-zinc-600"/>
            <Bar />
            <hr className="text-zinc-600"/>
            <StockShow />
        </div>
    )
}

export default StocksDisplay;