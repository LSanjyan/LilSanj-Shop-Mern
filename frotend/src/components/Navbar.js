import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const isUserSignedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex justify-around p-3 border-b border-zinc-800 items-center bg-[#1a1a1a]/90 text-[#ddd5d5]">
      <Link to="/">
        <h1 className="text-3xl">Home</h1>
      </Link>
      <ul className="flex gap-6">
        {/* Add clickable links for categories */}
        <li>
          <Link to="/new">New</Link>
        </li>
        <li>
          <Link to="/best-sellers">Best Sellers</Link>
        </li>
        <li>
          <Link to="/subjects">Subjects</Link>
        </li>
        <li>
          <Link to="/color">Color</Link>
        </li>
        <li>
          <Link to="/styles">Styles</Link>
        </li>
        {isUserSignedIn ? (
          <>
            <Link to="/account">
              <li>Account</li>
            </Link>
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </>
        ) : (
          <>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/signup">
              <li>Signup</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
