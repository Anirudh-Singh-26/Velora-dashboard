import React, { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph.jsx";
import axios from "axios";
import Loading from "./Loading.jsx";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const gettingHoldings = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/allHoldings`,
          { withCredentials: true }
        );
        setAllHoldings(response.data);
      } catch (e) {
        if (e.response?.status === 401 || e.response?.status === 403) {
          window.location.href = import.meta.env.VITE_FRONTEND_URL;
        } else {
          console.log(`Holdings fetch axios Catch ${e}`);
        }
      } finally {
        setLoading(false);
      }
    };

    gettingHoldings();
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "All Stocks",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div
      style={{
        padding: "3%",
        paddingLeft: "1.5rem",
        paddingBottom: "0rem",
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <h3 className="title">Holdings ({allHoldings.length})</h3>
          <h4 className="title fs-6 text-muted">
            All your Holdings are Listed here
          </h4>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg. cost</th>
                  <th>LTP</th>
                  <th>Cur. val</th>
                  <th>P&L</th>
                  <th>Net chg.</th>
                  <th>Day chg.</th>
                </tr>
              </thead>
              <tbody>
                {allHoldings.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                  const profitClass = isProfit ? "profit" : "loss";
                  const dayClass = stock.isLoss ? "loss" : "profit";

                  return (
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td>{curValue.toFixed(2)}</td>
                      <td className={profitClass}>
                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                      </td>
                      <td className={profitClass}>{stock.net}</td>
                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="row">
            <div className="col">
              <h5>
                29,875.<span>55</span>
              </h5>
              <p>Total investment</p>
            </div>
            <div className="col">
              <h5>
                31,428.<span>95</span>
              </h5>
              <p>Current value</p>
            </div>
            <div className="col">
              <h5>1,553.40 (+5.20%)</h5>
              <p>P&L</p>
            </div>
          </div>

          <VerticalGraph data={data} text={"Holdings"} />
        </>
      )}
    </div>
  );
};

export default Holdings;
