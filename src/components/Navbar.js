import React from "react";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode === 'light'?'light':'dark'} navbar-${props.mode === 'light'?'light':'dark'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <span className="fw-bold"><span style={{color: 'green'}}>Opcode</span>Converter</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://github.com/GouravDutta-01/Opcode-Converter">
                View Github
              </a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light'?'Enable':'Disable'} Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

