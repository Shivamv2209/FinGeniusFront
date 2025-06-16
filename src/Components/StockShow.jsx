import React from "react";
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
import { IoMdArrowDropdown } from "react-icons/io";


function StockShow(){

    const user = useSelector((state)=> state.user)

    const MostTraded = [
        {name:"Reliance Power", price:"₹66.98", return:"0.07" ,increase:"0.10%",image:"/reliance.png",color:"red"} ,
        {name:"Tata Motors", price:"₹686.65", return:"25.40" ,increase:"3.57%",image:"/tata.png" , color:"red"} ,
        {name:"BSE", price:"₹2697.40", return:"13.80" ,increase:"0.51%",image:"/bse.png",color:""} ,
        {name:"Indraprasth Gas", price:"₹212.33", return:"13.45" ,increase:"6.76%",image:"/indra.png",color:""} ,
    ]

    const TopGainers = [
         {name:"Reliance Power", price:"₹66.98", return:"0.07" ,increase:"0.10"} ,
        {name:"Tata Motors", price:"₹686.65", return:"25.40" ,increase:"3.57"} ,
        {name:"BSE", price:"₹2697.40", return:"13.80" ,increase:"0.51"} ,
        {name:"Indraprasth Gas", price:"₹212.33", return:"13.45" ,increase:"6.76"} ,
    ]

    const MostTradedinMTF = [
         {name:"Reliance Power", price:"₹66.98", return:"0.07" ,increase:"0.10"} ,
        {name:"Tata Motors", price:"₹686.65", return:"25.40" ,increase:"3.57"} ,
        {name:"BSE", price:"₹2697.40", return:"13.80" ,increase:"0.51"} ,
        {name:"Indraprasth Gas", price:"₹212.33", return:"13.45" ,increase:"6.76"} ,
    ]

    const StosckNews = [
         {name:"Reliance Power", price:"₹66.98", return:"0.07" ,increase:"0.10"} ,
        {name:"Tata Motors", price:"₹686.65", return:"25.40" ,increase:"3.57"} ,
        {name:"BSE", price:"₹2697.40", return:"13.80" ,increase:"0.51"} ,
        {name:"Indraprasth Gas", price:"₹212.33", return:"13.45" ,increase:"6.76"} ,
    ]

    const TopLosers= [
         {name:"Reliance Power", price:"₹66.98", return:"0.07" ,increase:"0.10"} ,
        {name:"Tata Motors", price:"₹686.65", return:"25.40" ,increase:"3.57"} ,
        {name:"BSE", price:"₹2697.40", return:"13.80" ,increase:"0.51"} ,
        {name:"Indraprasth Gas", price:"₹212.33", return:"13.45" ,increase:"6.76"} ,
    ]
    return (
        <div className="w-screen flex justify-between p-9">
            <div className="w-[60vw]">
                <div className="flex justify-between">
                    <h3 className="text-white font-bold text-lg">Most Traded on Fingenius</h3>
                    <Link className="text-emerald-500 text-sm font-semibold">see all</Link>
                </div>

                <div className="flex items-center justify-between mt-5">
                   {MostTraded.map((m,i)=>(
                     <div key={i} className="w-45 h-45 bg-zinc-800 border-1 border-zinc-700 rounded-lg">
                        <div className="flex flex-col p-5">
                            <img src={m.image} alt="" className="w-10 h-10 rounded-md" />
                            <p className="text-white text-sm mt-2 font-semibold">{m.name}</p>
                        </div>
                        <div className="mt-2 p-2">
                            <h4 className="text-white text-md font-semibold ml-3">{m.price}</h4>
                            <p className={`${m.color==="red" ? "text-red-500" : "text-emerald-500"} ml-3 text-sm font-semibold`}>{m.return}{" "}<span>({m.increase})</span></p>
                        </div>
                     </div>
                   ))}
                </div>
            </div>
            <div className="w-[30vw]">
                <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">Your Investments</h3>
                    <Link className="text-emerald-500 font-semibold text-sm">Dashboard</Link>
                </div>
                <div className="w-full p-4 h-20 border-zinc-600 border-1 rounded-lg shadow-lg mt-5 flex items-center justify-between">
                    <div><h3 className="text-lg font-bold text-white">₹0</h3>
                    <p className="text-sm text-zinc-500 font-semibold">Total Returns</p>
                    </div>
                    <div><h3 className="text-lg font-bold text-white text-right">₹0</h3>
                    <p className="text-sm text-zinc-500 font-semibold">Current Value</p>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-15">
                    <h3 className="text-white font-semibold text-lg">All watchlists</h3>
                    <Link className="text-emerald-500 font-semibold text-sm">View all</Link>
                </div>

                <div className="w-full flex items-center justify-between h-20 border-zinc-600 border-1 rounded-lg mt-5 p-4">
                    <h3 className="text-white text-md font-semibold">{user.firstname+"'s" +" "+"Watchlist"}</h3>
                    <IoMdArrowDropdown className="text-white text-lg" />
                </div>
                
            </div>
        </div>
    )
}

export default StockShow;