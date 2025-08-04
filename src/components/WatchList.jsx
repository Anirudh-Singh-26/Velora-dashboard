import React, { useState, useEffect } from "react";
import WatchListItem from "./WatchListItem.jsx";
import { DoughnutChart } from "./DoughnutChart.jsx";
import axios from "axios";
import Loading from "./Loading.jsx";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const gettingData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/allWatchList`,
          {
            withCredentials: true,
          }
        );
        setWatchlist(response.data);
      } catch (e) {
        console.log(`WatchLists fetch axios Catch ${e}`);
      } finally {
        setLoading(false);
      }
    };

    gettingData();
  }, []);

  useEffect(() => {
    const fetchUpdatedData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/getUpdatedList`
        );
        setWatchlist(response.data);
      } catch (error) {
        console.error("Error fetching updated data:", error);
      }
    };

    const interval = setInterval(fetchUpdatedData, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const labels = watchlist.map((stock) => stock.name);
    const prices = watchlist.map((stock) => stock.price);

    setChartData({
      labels,
      datasets: [
        {
          label: "Price",
          data: prices,
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
            "rgba(24, 7, 7, 0.5)",
            "rgba(255, 205, 86, 0.5)",
            "rgba(201, 203, 207, 0.5)",
            "rgba(0, 128, 128, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgb(20, 4, 4)",
            "rgba(255, 205, 86, 1)",
            "rgba(201, 203, 207, 1)",
            "rgba(0, 128, 128, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [watchlist]);

  return (
    <div className="watchlist-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div
            className="search-container"
            style={{ margin: "1rem 0 -1rem 2rem" }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                color: "rgb(51, 48, 48)",
                marginTop: "0.5rem",
              }}
            >
              <i className="fa-solid fa-arrows-rotate"></i> Auto-updating every
              10s
            </p>
            <span className="counts" style={{ marginTop: "-1rem" }}>
              {watchlist.length} / 25
            </span>
          </div>
          <hr className="divider" />
          <ul className="list">
            {watchlist.map((stock) => (
              <WatchListItem stock={stock} key={stock._id || stock.name} />
            ))}
          </ul>
          <div
            className="username"
            style={{ textAlign: "center", marginTop: "1.2rem" }}
          >
            <h6 style={{ textAlign: "center" }}>Stock Prices Chart</h6>
          </div>

          <DoughnutChart
            key={JSON.stringify(chartData)}
            data={chartData}
            options={{
              animation: false,
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </>
      )}
    </div>
  );
};

export default WatchList;
