import React from "react";
import { Link } from "react-router-dom";
import * as Style from "./styles";

const Header = ({ ...props }) => {
  return (
    <Style.Header>
      <div className="menu-link">
        <Link to="/" className="link">
          List Products
        </Link>
        <Link to="/cartView" className="link">
          Cart
        </Link>
      </div>
    </Style.Header>
  );
};

export default Header;
