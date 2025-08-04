import react from "react";

function MarketOverviewRight(){
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            paddingTop: "2rem",
            paddingLeft: "2rem",
            fontSize: "0.9rem",
            width: "100%",
          }}
        >
          <img src="Anchor.jpg" alt="Anchor" style={{ width: "40%" }} />
          <p className="text-muted" style={{ marginTop: "20px" }}>
            You don't have any positions yet
          </p>
          <button
            className="p-2 btn btn-primary fs-9 mb-5"
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "0px"
            }}
          >
            Get Started
          </button>
        </div>
      </>
    );
}

export default MarketOverviewRight;