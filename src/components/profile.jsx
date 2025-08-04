import React, { useEffect, useState } from "react";
import axios from "axios";
import Loding from "./Loading.jsx";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/me`, {
        withCredentials: true,
      });
      setUser(res.data);
    } catch (err) {
      console.error("Failed to fetch user", err);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/orders`, {
        withCredentials: true,
      });
      setAllOrders(res.data);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchUser(), fetchOrders()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return < Loding />;
  if (!user) return <p className="p-5">User not logged in.</p>;

  const cardBackground = "#f4f6f9";

  return (
    <div
      className="p-4"
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        color: "#222",
      }}
    >
      <h2
        className="text-center fw-semibold"
        style={{
          fontSize: "2rem",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#2c3e50",
          letterSpacing: "0.5px",
          paddingBottom: "0.5rem",
        }}
      >
        👤 Your Profile
      </h2>

      <div className="row g-4 mb-4 mt-0">
        {/* Profile Card */}
        <div className="col-md-6">
          <div
            className="card shadow-sm h-100"
            style={{ backgroundColor: cardBackground, padding: "20px" }}
          >
            <div className="card-body text-center">
              <div
                className="rounded-circle text-white d-flex align-items-center justify-content-center mx-auto"
                style={{
                  width: "140px",
                  height: "140px",
                  fontSize: "42px",
                  fontWeight: "bold",
                  backgroundImage: user.profileImage
                    ? `url(${user.profileImage})`
                    : "none",
                  backgroundColor: user.profileImage
                    ? "transparent"
                    : "#007bff",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {!user.profileImage && user.username?.slice(0, 2).toUpperCase()}
              </div>
              <h4 className="mt-3 mb-0">{user.fullName || user.username}</h4>
              <p className="text-muted mb-1">@{user.username}</p>
              <div className="d-flex align-items-center justify-content-center gap-2 mt-2">
                <span
                  className="badge bg-success"
                  style={{ fontSize: "0.85rem", padding: "6px 12px" }}
                >
                  ✅ Verified
                </span>
                <span className="text-muted small">Investor Tier: Gold</span>
                <span className="text-muted small">Rating: 4.6⭐</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Card */}
        <div className="col-md-6">
          <div
            className="card shadow-sm h-100"
            style={{ backgroundColor: cardBackground, padding: "20px" }}
          >
            <div className="card-body d-flex flex-column justify-content-center">
              <div className="mb-3">
                <strong>Current Orders:</strong> <span>{allOrders.length || 5}</span>
              </div>
              <div className="mb-3">
                <strong>Current Holdings:</strong> <span>13</span>
              </div>
              <div className="mb-3">
                <strong>Current Positions:</strong> <span>8</span>
              </div>
              <div className="mb-3">
                <strong>Available Margin:</strong> <span>7.73K</span>
              </div>
              <div className="mb-3">
                <strong>Holdings Profit:</strong> <span>+5.20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Info Card */}
      <div
        className="card shadow-sm"
        style={{ backgroundColor: cardBackground, padding: "20px" }}
      >
        <div className="card-body">
          <div className="row g-4">
            <div className="col-md-6">
              <label className="text-muted">Email</label>
              <div className="fs-5">{user.email}</div>
            </div>
            <div className="col-md-6">
              <label className="text-muted">Phone Number</label>
              <div className="fs-5">+91 93765 40231</div>
            </div>
            <div className="col-md-6">
              <label className="text-muted">Date of Birth</label>
              <div className="fs-5">12th March, 2001</div>
            </div>
            <div className="col-md-6">
              <label className="text-muted">Occupation</label>
              <div className="fs-5">Financial Analyst</div>
            </div>
            <div className="col-12">
              <label className="text-muted">Bio</label>
              <div className="fs-6">
                A disciplined retail investor passionate about financial growth
                and smart trading. Enjoys building diversified portfolios and
                tracking market insights.
              </div>
            </div>
            <div className="col-12">
              <label className="text-muted">Activity History</label>
              <div className="fs-6">
                • Signed up and verified email <br />
                • Subscribed to market updates <br />
                • Active since early 2023 <br />• Participated in user
                discussions
              </div>
            </div>
            <div className="col-md-6">
              <label className="text-muted">Account Created</label>
              <div className="fs-5">18th January, 2023</div>
            </div>
            <div className="col-md-6">
              <label className="text-muted">Account Status</label>
              <div className="fs-5 text-success">Active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
