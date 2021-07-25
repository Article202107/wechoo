import React from "react";
import { Link } from "react-router-dom";
import { authService } from "fbase";

const Navigation = () => {
  const onLogOut = () => {
    authService.signOut();
  };

  return (
    <nav className="nav-header">
    	<div className="nav-center">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-util">
          <Link to="/profile">Profile</Link>
          <input type="button" value="Log Out" onClick={onLogOut} />
        </div>
    </nav>
  );
};

export default Navigation;
