import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <Link href="/" className="navbar-brand">
      Food Paradise{" "}
    </Link>{" "}
  </nav>
);

export default Navbar;
