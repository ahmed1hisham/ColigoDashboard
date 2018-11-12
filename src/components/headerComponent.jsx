import React, { Component } from "react";
import avatar from "../assets/images/img_avatar2.png";

class HeaderComponent extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <span className="logo">Welcome Talia,</span>
        <div className="header-right">
          <img src={avatar} alt="avatar" className="avatar" />
          <a>
            <i className="fa fa-bell" />
          </a>
          <a>
            <i className="fa fa-envelope" />
          </a>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
