import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="public/Mask Group.png" alt="" /><span id='logoName'>food</span><span id="logoName1">waGon</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home"><b>Home</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/detail"><b>Detail</b></Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search Food" aria-label="Search"/>
<button id='hBtn'>Order</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Header
