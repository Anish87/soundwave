import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <FontAwesomeIcon
            type="button" data-bs-toggle="offcanvas" data-bs-target="#infoOC"
            aria-controls="infoOC"
            icon={faCircleInfo}
          />
        <div className="offcanvas offcanvas-start text-bg-primary" tabindex="-1" id="infoOC"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">Action 1</a>
                  <a className="dropdown-item" href="#">Action 2</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <a className="navbar-brand" href="#">
            <img src=''></img>
        </a>
          <FontAwesomeIcon
            type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            icon={faBars}
          />
        <div className="offcanvas offcanvas-end text-bg-primary" tabindex="-1" id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">Action 1</a>
                  <a className="dropdown-item" href="#">Action 2</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;