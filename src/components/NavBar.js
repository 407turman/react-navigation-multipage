import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <NavLink to="/" style={{ marginRight: "1rem" }}>Home</NavLink>
      <NavLink to="/about" style={{ marginRight: "1rem" }}>About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default NavBar;
