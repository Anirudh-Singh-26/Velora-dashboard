import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import{useState, useEffect} from "react";
import OrdersDataDisplay from "./OrdersDataDisplay.jsx";
import Loading from "./Loading.jsx"

const Orders = ({ allOrders, setAllOrders }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const gettingOrder = async () => {
      try {
        setLoading(true);
        let response = await axios.get(
          `${import.meta.env.VITE_API_URL}/orders`,
          {
            withCredentials: true,
          }
        );
        setAllOrders(response.data);
      } catch (e) {
        if (e.response?.status === 401 || e.response?.status === 403) {
          window.location.href = import.meta.env.VITE_FRONTEND_URL;
        } else {
          console.log(`Orders fetch axios Catch ${e}`);
        }
      } finally {
        setLoading(false);
      }
      // console.log(allOrders)
    };
    gettingOrder();
  }, []);


  const reloadOrders = async () => {
    try {
      setLoading(true);
      let response = await axios.get(`${import.meta.env.VITE_API_URL}/orders`, {
        withCredentials: true,
      });
      console.log(response.data);
      setAllOrders(response.data);
    } catch (e) {
      if (e.response?.status === 401 || e.response?.status === 403) {
        window.location.href = import.meta.env.VITE_FRONTEND_URL;
      } else {
        console.log(`Orders fetch axios Catch ${e}`);
      }
    } finally {
      setLoading(false);
    }
  };


  const deleteOrder = async (id) => {
    try {
      setLoading(true);
      let response = await axios.post(
        `${import.meta.env.VITE_API_URL}/deleteOrder`,
        { id: id },
        {
          withCredentials: true,
        }
      );
      reloadOrders();
      console.log(response.data);
      // setAllOrders(response.data);
    } catch (e) {
      if (e.response?.status === 401 || e.response?.status === 403) {
        window.location.href = import.meta.env.VITE_FRONTEND_URL;
      } else {
        console.log(`Orders fetch axios Catch ${e}`);
      }
    } finally {
      setLoading(false);
    }

    console.log("deleted");
    console.log(id);
  };


  // console.log(allOrders[0].name);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="orders">
          {allOrders.length == 0 ? (
            <div className="no-orders">
              <p>You haven't placed any orders today</p>
              <p style={{margin: "0", marginBottom: "2rem"}}>Please Hover on the stocks and Place any Order</p>
              <Link to={"/"} className="btn">
                <button className="btn btn primary mb-5">Get Started</button>
              </Link>
            </div>
          ) : (
            <OrdersDataDisplay data={allOrders} handleDeletion={deleteOrder} />
          )}
        </div>
      )}
    </>
  );
};

export default Orders;
