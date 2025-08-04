import { useState, useEffect } from "react";
import axios from "axios";

function RequireAuth({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check user authentication status via API
        await axios.get(`${import.meta.env.VITE_API_URL}/me`, {
          withCredentials: true,
        });
        setLoading(false);
      } catch (e) {
        // Redirect to frontend URL on auth failure or error
        if (e.response?.status === 401 || e.response?.status === 403) {
          window.location.href = import.meta.env.VITE_FRONTEND_URL;
        } else {
          console.error("Auth failed:", e);
          window.location.href = import.meta.env.VITE_FRONTEND_URL;
        }
      }
    };

    checkAuth();
  }, []);

  // Show loading text while checking authentication
  if (loading) return <p>Loading...</p>;

  // Render children if authenticated
  return children;
}

export default RequireAuth;
