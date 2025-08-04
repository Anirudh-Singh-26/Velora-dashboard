import React from "react";
import { Link } from "react-router-dom";

const upcomingFinanceProjects = [
  {
    title: "AI Portfolio Recommender",
    description: "Get personalized stock portfolio suggestions using AI.",
    status: "Coming Soon",
  },
  {
    title: "Real-Time Market Screener",
    description: "Advanced filters to track stock movements live.",
    status: "Launching Q3 2025",
  },
  {
    title: "Investment Goal Planner",
    description: "Set financial goals and track your progress smartly.",
    status: "Under Development",
  },
];

const Apps = () => {
  return (
    <div
      style={{
        padding: "3%",
        paddingLeft: "1.5rem",
        paddingBottom: "0rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "5rem",
          alignItems: "center",
          marginTop: "1.6rem"
        }}
      >
        <h3
          className="title mt-2 fs-2"
          style={{
            fontWeight: "550",
            textAlign:"center",
            alignContent: "center",
            background: "#f4f6f8",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            height: "5rem",
            width: "30rem"
          }}
        >
          Upcoming Apps & Projects
        </h3>
      </div>
      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          paddingTop: "4rem",
        }}
      >
        {upcomingFinanceProjects.map((project, index) => (
          <div
            key={index}
            style={{
              height: "20rem",
              background: "#f4f6f8",
              borderRadius: "10px",
              padding: "1.2rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              display: "flex",
              flexWrap: "wrap",
              alignContent: "space-between",
            }}
          >
            <h3
              className="fs-4"
              style={{
                marginBottom: "0.5rem",
                color: "#1a202c",
                textAlign: "center",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                marginBottom: "0.5rem",
                color: "#4a5568",
                textAlign: "center",
              }}
            >
              {project.description}
            </p>
            <Link style={{ textDecoration: "none" }}>
              <span style={{ fontWeight: "bold", color: "#2b6cb0" }}>
                {project.status}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
