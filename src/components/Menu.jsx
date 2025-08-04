import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";


const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;

    const pathToIndex = {
      "/": 0,
      "/orders": 1,
      "/holdings": 2,
      "/positions": 3,
      "/funds": 4,
      "/apps": 5,
    };

    if (pathToIndex.hasOwnProperty(path)) {
      setSelectedMenu(pathToIndex[path]);
    }
  }, [location.pathname]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/me`, { withCredentials: true })
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.log("User Not Logged IN");
      });
  }, []);


  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/logout`,
        {},
        { withCredentials: true }
      );
      window.location.href = import.meta.env.VITE_FRONTEND_URL;
    } catch (err) {
      console.error("Logout failed");
    }
  };


  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    navigate("/profile");
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

return (
  <div
    className="menu-container d-flex align-items-center justify-content-between px-4"
    style={{ height: "60px" }}
  >
    {/* Left: Logo */}
    <div className="d-flex align-items-center">
      <img src="logo.png" alt="logo" style={{ width: "50px" }} />
    </div>

    {/* Center: Menu Options */}
    <div className="menus flex-grow-1 d-flex justify-content-center">
      <ul
        className="d-flex gap-4 mb-0"
        style={{ listStyle: "none", alignItems: "center" }}
      >
        {[
          { path: "/", label: "Dashboard" },
          { path: "/orders", label: "Orders" },
          { path: "/holdings", label: "Holdings" },
          { path: "/positions", label: "Positions" },
          { path: "/funds", label: "Funds" },
          { path: "/apps", label: "Apps" },
        ].map((item, index) => (
          <li key={item.path} style={{ fontWeight: "450", fontSize: "1rem" }}>
            <Link
              to={item.path}
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(index)}
            >
              <p
                className={selectedMenu === index ? activeMenuClass : menuClass}
              >
                {item.label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Right: Profile Dropdown */}
    <div className="dropdown me-4">
      <div
        className="profile-btn dropdown-toggle d-flex align-items-center"
        id="profileDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="avatar-box">
          {user ? user.username.slice(0, 2).toUpperCase() : "??"}
        </div>
        <p className="username mb-0 ms-2">{user ? user.username : "Guest"}</p>
      </div>

      <ul className="dropdown-menu" aria-labelledby="profileDropdown">
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={handleProfileClick}
          >
            <i className="fa-solid fa-user"></i>
            <span>Profile</span>
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={handleLogout}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
);

};

export default Menu;
