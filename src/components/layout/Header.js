import React from "react";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header style={HeaderStyle}>
      <h1 style={{ marginBottom: "10px" }}>Todofy</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  );
}

const HeaderStyle = {
  color: "#8B0000",
  
};

const linkStyle= {
  textDecoration: 'none',
  color: 'black'
}
export default Header;
