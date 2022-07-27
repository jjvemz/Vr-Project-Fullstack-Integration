import "./Sidebar.scss";
import {
  Dashboard,
  PersonOutline,
  Store,
  PersonAddAlt,
} from "@mui/icons-material";
import { useContext } from "react";
import { DarkModeContext } from "../../../context/darkModeContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="Sidebar">
      <div className="top">
        <span className="logo">Nimble Logo</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Listas</p>
          <li>
            <PersonOutline className="icon" />
            <span>Usuarios</span>
          </li>
          <li> 
            <Link to="/admin/additem" style={{ textDecoration: "none" }}>
              <Store className="icon" />
              <span>Ingresar item</span>
            </Link>
          </li>
          <li>
            <PersonAddAlt className="icon" />
            <span>Ingresar usuario</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
