import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {NavLink } from 'react-router-dom'


export default function Navbar2(props) {
  return (
    <div>
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}  navbar border-bottom border-${props.mode === "light" ? "dark" : "light"}`}>

  <div className="container-fluid">
    <Link className="navbar-brand" to="#">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/about"}>{props.about}</Link>
        </li>
        <li className="nav-item">
                <a className="nav-link" aria-current="page" >
                    <div className="form-check form-switch" onClick={props.toDarkMode}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
                    </div>
                 </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" style={{backgroundColor: props.mode === "light" ? "white" : "black" ,color : props.mode === "light" ? "black" : "white" }} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
Navbar2.propTypes = {title : PropTypes.string.isRequired, 
    about : PropTypes.string.isRequired}

Navbar2.defaultProps = {
title : "TextUtils",
about :"about TextUtils"
}
