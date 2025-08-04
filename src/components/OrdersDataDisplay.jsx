import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { OrdersDataGraphBuy, OrdersDataGraphSell } from "./OrdersDataGraph";

function OrdersDataDisplay({ data, handleDeletion }) {
  const buyOrders = data.filter((order) => order.mode === "BUY");
  const sellOrders = data.filter((order) => order.mode === "SELL");

  return (
    <>
      <div
        style={{
          padding: "3%",
          paddingLeft: "1.5rem",
          paddingBottom: "0rem",
        }}
      >
        <h3 className="title">Orders ({data.length})</h3>
        <h4 className="title fs-6 text-muted">
          All your Orders are Listed here
        </h4>

        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order, index) => (
                <tr
                  className={
                    order.mode === "BUY" ? "table-primary" : "table-danger"
                  }
                  key={order._id}
                >
                  <th scope="row">{index + 1}</th>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td className={order.mode === "BUY" ? "profit" : "loss"}>
                    {order.mode}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeletion(order._id)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                      aria-label={`Delete order ${order.name}`}
                    >
                      <DeleteIcon style={{ color: "rgb(145, 145, 145)" }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="my-container">
        <div className="row align-items-center mt-2">
          <div className="col-md-6 p-5">
            <h3 className="title text-center">BUY Price data</h3>
            {buyOrders.length > 0 ? (
              <OrdersDataGraphBuy orders={buyOrders} />
            ) : (
              <p className="text-center text-muted fs-5">No BUY Order Placed</p>
            )}
          </div>
          <div className="col-md-6 p-5">
            <h3 className="title text-center">SELL Price data</h3>
            {sellOrders.length > 0 ? (
              <OrdersDataGraphSell orders={sellOrders} />
            ) : (
              <p className="text-center text-muted fs-5">
                No SELL Order Placed
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrdersDataDisplay;
