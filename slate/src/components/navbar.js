import React, { Component } from 'react';
import navbarcss from "./navbarcss.css";
import logo from "./images/logo.PNG";

class navbar extends Component {
    render() {
        return (
            <div className="header">
            <div className="logo">
            <img src={logo} alt="Logo" />
            </div>
            <div className="heading">
                <ul>
                    <li>HOME</li>
                    <li>DISCOVER</li>
                    <li>DISCRIPTION</li>
                    <li>ABOUT US</li>
                </ul>
            </div>
        </div>
        );
    }
}

export default navbar;