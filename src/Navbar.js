import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "linear-gradient(135deg, #2196F3, #64B5F6)", padding: "15px" }}>
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="/" style={{ fontSize: "1.5rem", letterSpacing: "1px" }}>
          ARVR Mini-Pro
        </a>
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
