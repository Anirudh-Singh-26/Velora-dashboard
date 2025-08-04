import React from "react";

import Menu from "./Menu";
const TopBar = () => {
  return (
    <div className="topbar-container d-flex align-items-center">
      <div className="indices-container mt-3 d-flex align-items-center">
        {/* Logo on the left */}
        <img
          src="/candlestick-chart.png"
          alt="Logo"
          className="me-3 mb-3 logo-img "
          style={{ height: "40px" }}
        />

        {/* NIFTY block */}
        <div className="sensex me-5">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{10865.65}</p>
          <p className="percent">-1.37%</p>
        </div>

        {/* SENSEX block */}
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-pointsg">{35400.61}</p>
          <p className="percent">+1.41</p>
        </div>
      </div>

      <Menu />
    </div>
  );

};

export default TopBar;
