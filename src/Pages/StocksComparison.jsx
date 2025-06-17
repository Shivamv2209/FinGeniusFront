import React, { useState } from "react";
import axios from "axios";

const metricsList = [
  "Price",
  "Volatility",
  "Market Cap",
  "ESG Score",
  "Return on Equity",
  "Sharpe Ratio"
];

const StockCompareGrid = () => {
  const [stocks, setStocks] = useState([null, null, null]);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [tickerInput, setTickerInput] = useState("");

  const handleOpenModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setTickerInput("");
    setShowModal(false);
  };

  const handleAddStock = async () => {
    try {
      const ticker = tickerInput.trim().toUpperCase();
      if (!ticker) return;
      const dummyComparisonTicker = "AAPL"; // required to trigger compare (can be replaced with API to fetch single stock info)

      const res = await axios.post("http://localhost:8000/compare", {
        ticker1: ticker,
        ticker2: dummyComparisonTicker
      });

      const stockData = {
        ticker,
        metrics: {
          Price: res.data.metrics.price[0],
          Volatility: res.data.metrics.beta[0],
          "Market Cap": res.data.metrics.market_cap[0],
          "ESG Score": res.data.metrics.esg_score[0],
          "Return on Equity": res.data.metrics.roe[0],
          "Sharpe Ratio": res.data.metrics.sharpe_ratio[0]
        }
      };

      const updatedStocks = [...stocks];
      updatedStocks[currentIndex] = stockData;
      setStocks(updatedStocks);
      handleCloseModal();
    } catch (err) {
      console.error("Error fetching stock:", err);
      alert("Could not fetch stock data. Check ticker.");
    }
  };

  return (
    <div className="relative p-6 text-white">
      <h2 className="text-xl font-bold mb-2">Compare Stocks</h2>
      <p className="text-sm text-zinc-400 mb-4">
        Detailed comparison on parameters like Price, Volatility, Risk, ESG Score, etc.
      </p>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-zinc-900 rounded-xl p-4 font-semibold text-sm text-white">
          Fund Details
          {metricsList.map((metric) => (
            <div key={metric} className="mt-4 border-t border-zinc-800 pt-2">
              {metric}
            </div>
          ))}
        </div>

        {stocks.map((stock, index) => (
          <div key={index} className="bg-zinc-900 rounded-xl p-4 text-center">
            {!stock ? (
              <button
                onClick={() => handleOpenModal(index)}
                className="flex flex-col items-center justify-center h-full text-blue-400"
              >
                <div className="text-3xl">＋</div>
                <div>Add a stock</div>
              </button>
            ) : (
              <>
                <div className="font-semibold text-white text-lg mb-2">{stock.ticker}</div>
                {metricsList.map((metric, i) => (
                  <div key={i} className="border-t border-zinc-800 pt-2 text-sm text-zinc-300">
                    {stock.metrics[metric] ?? "-"}
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-zinc-800 p-6 rounded-xl w-full max-w-md border border-zinc-700">
            <h3 className="text-lg font-bold mb-2 text-white">Add a Stock</h3>
            <input
              type="text"
              placeholder="Enter ticker (e.g. AAPL)"
              value={tickerInput}
              onChange={(e) => setTickerInput(e.target.value)}
              className="w-full p-2 rounded bg-zinc-900 text-white border border-zinc-600 mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-zinc-700 text-white rounded hover:bg-zinc-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddStock}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add Stock
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockCompareGrid;
