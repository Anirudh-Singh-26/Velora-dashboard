import React from "react";
import { SummaryPieChartHolding, SummaryPieChartPosition } from "./SummaryPieChart";
import { LineChartSummary } from "./LineChartSummary";
import MarketOverviewRight from "./MarketOverviewRight";


const Summary = () => {
  return (
    <>
      <div className="username">
        <div
          style={{
            padding: "3%",
            paddingLeft: "1.5rem",
            paddingBottom: "0rem",
          }}
        >
          <h6>Welcome Back, Sir</h6>
          <p style={{ color: "black" }}>
            Please Visit Holdings or Positions and You can Place your Orders
            from the Stocks
          </p>
        </div>
        <hr className="divider" />
      </div>
      <div className="my-container px-4">
        {/* Equity Section Row */}
        <div className="row align-items-center mt-0">
          {/* Left Side (Equity info) */}
          <div className="col-md-4 p-3 pt-0">
            <div className="section mb-5 pb-3">
              <span>
                <p className="fs-4 mb-5" style={{ color: "black" }}>
                  Equity
                </p>
              </span>

              <div className="data">
                <div className="first pe-5">
                  <h3>7.73k</h3>
                  <p>Margin Available</p>
                </div>
                <hr />

                <div className="second padd">
                  <p>
                    Margins used <span>10.33K</span>
                  </p>
                  <p>
                    Opening balance <span>18.06k</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side (Pie Chart) */}
          <div className="col-md-8 p-3 d-flex justify-content-center">
            <div style={{ width: "350px", height: "350px" }}>
              <SummaryPieChartPosition />
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />
      <div className="my-container px-4">
        <div className="row align-items-center mt-0">
          {/* Left Side (Content - smaller width) */}
          <div className="col-md-4 p-3 pt-0">
            <div className="section mb-5 pb-3">
              <span>
                <p className="fs-4 mb-5" style={{ color: "black" }}>
                  Holdings (13)
                </p>
              </span>

              <div className="data">
                <div className="first pe-5">
                  <h3 className="profit">
                    1.55k <small>+5.20%</small>
                  </h3>
                  <p>P&L</p>
                </div>
                <hr />

                <div className="second padd">
                  <p>
                    Current Value <span>31.43k</span>
                  </p>
                  <p>
                    Investment <span>29.88k</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side (Graph - larger width) */}
          <div className="col-md-8 p-3 d-flex justify-content-center">
            <div style={{ width: "350px", height: "350px" }}>
              <SummaryPieChartHolding />
            </div>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="my-container ps-4">
        <div className="row align-items-center mt-0">
          {/* Left Side (Content - smaller width) */}
          <div className="col-md-8 p-3 pt-0">
            <div className="section mb-5 pb-3">
              <span>
                <p className="fs-4" style={{ color: "black" }}>
                  <i className="fa-solid fa-chart-line"></i>&nbsp;&nbsp;Market
                  Overview
                </p>
              </span>

              <LineChartSummary />
            </div>
          </div>

          {/* Right Side (Graph - larger width) */}
          <div className="col-md-4 p-3 d-flex justify-content-center pe-0">
            <div style={{ width: "350px", height: "350px" }}>
              <MarketOverviewRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
