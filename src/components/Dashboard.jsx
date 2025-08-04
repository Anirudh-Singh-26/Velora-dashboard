import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Apps from "./Apps.jsx";
import Funds from "./Funds.jsx";
import Holdings from "./Holdings.jsx";
import Orders from "./Orders.jsx";
import Positions from "./Positions.jsx";
import Summary from "./Summary.jsx";
import WatchList from "./WatchList.jsx";
import RequestAuth from "./RequireAuth.jsx";
import { GeneralContextProvider } from "./GeneralContext.jsx";
import Profile from "./profile.jsx";



const Dashboard = () => {
  const [stateOrder, setStateOrder] = useState([{}]);
  const navigate = useNavigate();

  useEffect(() => {
    const navEntries = window.performance.getEntriesByType("navigation");
    const isRefresh = navEntries.length && navEntries[0].type === "reload";

    if (isRefresh) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route path="/" element={<RequestAuth><Summary /></RequestAuth>} />
          <Route path="/orders" element={<RequestAuth><Orders allOrders={stateOrder} setAllOrders={setStateOrder} /></RequestAuth>} />
          <Route path="/holdings" element={<RequestAuth><Holdings /></RequestAuth>} />
          <Route path="/positions" element={<RequestAuth><Positions /></RequestAuth>} />
          <Route path="/funds" element={<RequestAuth><Funds /></RequestAuth>} />
          <Route path="/apps" element={<RequestAuth><Apps /></RequestAuth>} />
          <Route path="/profile" element={<RequestAuth><Profile /></RequestAuth>}  />

        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
