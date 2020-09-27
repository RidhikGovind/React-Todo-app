import React from "react";

function Header() {
  return (
    <header style={HeaderStyle}>
      <h1 style={{ margin: "0" }}>TodoList</h1>
    </header>
  );
}

const HeaderStyle = {
  color: "#8B0000"
};
export default Header;
