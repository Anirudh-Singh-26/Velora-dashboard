import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph.jsx";
import Loading from "./Loading.jsx";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const gettingPositions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/allPositions`,
          {
            withCredentials: true,
          }
        );
        setAllPositions(response.data);
      } catch (e) {
        if (e.response?.status === 401 || e.response?.status === 403) {
          window.location.href = import.meta.env.VITE_FRONTEND_URL;
        } else {
          console.error(`Positions fetch axios error:`, e);
        }
      } finally {
        setLoading(false);
      }
    };
    gettingPositions();
  }, []);

  const labels = allPositions.map((pos) => pos.name);

  const data = {
    labels,
    datasets: [
      {
        label: "All Stock",
        data: allPositions.map((stock) => stock.price),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div
      style={{ padding: "3%", paddingLeft: "1.5rem", paddingBottom: "0rem" }}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <h3 className="title">Positions ({allPositions.length})</h3>
          <h4 className="title fs-6 text-muted">
            All your positions are Listed here
          </h4>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg.</th>
                  <th>LTP</th>
                  <th>P&L</th>
                  <th>Chg.</th>
                </tr>
              </thead>
              <tbody>
                {allPositions.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const isProfit = curValue - stock.avg * stock.qty >= 0;
                  const profitClass = isProfit ? "profit" : "loss";
                  const dayClass = stock.isLoss ? "loss" : "profit";

                  return (
                    <tr key={index}>
                      <td>{stock.product}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td className={profitClass}>
                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                      </td>
                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <VerticalGraph data={data} text="Positions" />
        </>
      )}
    </div>
  );
};

export default Positions;
