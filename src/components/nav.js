import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavButton from "./navButton";
import navLinks from "./data/navLinks";

import img from "../assets/logo4.png";

class Nav extends Component {
  componentDidMount() {
    window.onscroll = () => {
      stickIt();
    };

    const navbar = document.getElementsByTagName("nav")[0];
    const sticky = navbar.offsetTop;

    const stickIt = () => {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };
  }
  handleNavClick = i => {
    navLinks.forEach(e => {
      e.active = false;
    });
    navLinks[i].active = true;

    document
      .getElementsByClassName("navbar-collapse")[0]
      .classList.remove("show");
  };
  handleBrandClick = () => {
    navLinks.forEach(e => {
      e.active = false;
    });
  };
  render() {
    const nav = navLinks.map((e, i) => {
      return (
        <NavButton
          isActive={e.active}
          handleClick={this.handleNavClick.bind(this, i)}
          index={i}
          key={i}
        />
      );
    });
    const navLeft = nav.filter((e, i) => i < 3);
    const navRight = nav.filter((e, i) => i > 2);
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <li className="navbar-brand" onClick={this.handleBrandClick}>
              <Link to="/home">
                {" "}
                <img className="logo" src={img} alt="logo" />
              </Link>
            </li>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">{navLeft}</ul>
            <ul className="nav navbar-nav navbar-right">{navRight}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
