import React, { Component } from "react";

class SideNavComponent extends Component {
  state = {
    pages: this.props.pages,
    defaultPage: this.props.defaultPage
  };

  componentDidMount() {
    document.getElementById(this.state.defaultPage).className += " active";
  }

  render() {
    return (
      <div className="sidenav">
        {/* <img
          className="nav-logo"
          src={require("../assets/images/logo.jpeg")}
          alt="LOGO HERE"
        /> */}
        <h1 className="nav-logo-text">Coligo</h1>
        {this.state.pages.map(page => (
          <span key={page}>
            <button
              id={page}
              key={page}
              name={page}
              onClick={() => {
                var i = 0;
                for (i = 0; i < this.state.pages.length; i++) {
                  document.getElementById(
                    this.state.pages[i]
                  ).className = document
                    .getElementById(this.state.pages[i])
                    .className.replace(" active", "");
                }
                document.getElementById(page).className += " active";
              }}
              className="nav-item"
            >
              {page}
            </button>
            <br />
          </span>
        ))}
      </div>
    );
  }
}

export default SideNavComponent;
