import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          listStyle: "none",
          justifyContent: "space-around",
        }}
      >
        <li>
          <NavLink to="/">Items</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navigation;
