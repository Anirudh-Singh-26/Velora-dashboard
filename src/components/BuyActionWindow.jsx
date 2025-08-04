import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(100);

  const { closeBuyWindow } = useContext(GeneralContext);
  const navigate = useNavigate();

  const handleBuyClick = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/newOrder`,
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        },
        { withCredentials: true }
      );

      closeBuyWindow();
      navigate("/");
    } catch (e) {
      if (e.response?.status === 401 || e.response?.status === 403) {
        window.location.href = import.meta.env.VITE_FRONTEND_URL;
      } else {
        console.log(`buyWindow error: ${e}`);
      }
    }
  };

  const handleCancelClick = () => {
    console.log("Buy cancel triggered");
    closeBuyWindow();
    navigate("/");
  };

  return (
    <div
      className="container mb-5 ps-0 pe-0"
      id="buy-window"
      draggable="true"
      style={{ marginLeft: "-1.2rem", borderRadius: "1.5rem", width: "36rem" }}
    >
      <h1
        className="mt-3 display-5 hd"
        style={{ textAlign: "center", color: "#41dfabff" }}
      >
        BUY
      </h1>
      <div className="regular-order">
        <div className="inputs">
          <fieldset style={{ height: "4rem", width: "8.3rem" }}>
            <legend
              style={{
                color: "black",
                marginBottom: "0rem",
                padding: "0.2rem",
              }}
            >
              Qty.
            </legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
              style={{ marginLeft: "0.1rem" }}
              min={1}
            />
          </fieldset>
          <fieldset
            style={{ height: "4rem", width: "8.3rem", marginRight: "4rem" }}
          >
            <legend
              style={{
                color: "black",
                marginBottom: "0rem",
                padding: "0.2rem",
              }}
            >
              Price
            </legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
              style={{ marginLeft: "0.1rem" }}
              min={0.01}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons mb-3">
        <span className="fs-5">Stock: {uid}</span>
      </div>
      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button
            className="btn btn-success"
            onClick={handleBuyClick}
            disabled={stockQuantity <= 0 || stockPrice <= 0}
          >
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
