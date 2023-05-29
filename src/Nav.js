import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

function Nav({ dogs }) {
  return <nav>
    {dogs?.map(dog => <Link key={dog.id} className="nav-link" to={`/dogs/${dog.src}`}>{dog.name}</Link>)}
  </nav>;
}

export default Nav;
