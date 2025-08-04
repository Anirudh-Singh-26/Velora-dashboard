import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div
      style={{
        padding: "3%",
        paddingLeft: "1.5rem",
        paddingBottom: "0rem",
      }}
    >
      <div className="row mt-0">
        {/* Left column: Equity details */}
        <div className="col">
          <span>
            <h3 className="title">Equity</h3>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p>3,736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4,064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        {/* Right column: Fund actions and commodity account */}
        <div
          className="col"
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
          }}
        >
          <div className="row" style={{ paddingBottom: "17rem" }}>
            <div className="funds pb-4">
              <div style={{ paddingRight: "3rem" }}>
                <p className="fs-6" style={{ marginLeft: "2rem" }}>
                  Instant, zero-cost fund transfers with UPI
                </p>
                <div style={{ paddingRight: "4rem" }}>
                  <Link to="#" className="btn btn-success">
                    Add funds
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <Link to="#" className="btn btn-primary">
                    Withdraw
                  </Link>
                </div>
              </div>
            </div>
            <div className="commodity pt-5">
              <p className="fs-6">You don't have a commodity account</p>
              <Link to="#" className="btn btn-primary">
                Open Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
