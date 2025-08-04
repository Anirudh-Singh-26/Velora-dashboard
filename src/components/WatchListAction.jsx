import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import { Tooltip, Grow } from "@mui/material";
import GeneralContext from "./GeneralContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function WatchListAction({ uid }) {
  const generalContext = useContext(GeneralContext);
  const navigate= useNavigate();

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };
  const handleAnalytics= ()=> {
    navigate("/orders")
  }
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleSellClick}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Orders (O)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleAnalytics}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
} 

export default WatchListAction;
