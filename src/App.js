import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import AnnouncementComponent from "./components/announcementComponent";
import SideNavComponent from "./components/sideNavComponent";
import HeaderComponent from "./components/headerComponent";
import QuizzesComponent from "./components/quizzesComponent";

class App extends Component {
  state = {
    pages: [
      "Dashboard",
      "Schedule",
      "Courses",
      "Gradebook",
      "Performance",
      "Announcement"
    ],
    defaultPage: "Dashboard",
    announcements: []
  };

  render() {
    const AnnoucementStyle = {
      float: "left",
      width: "69%"
    };
    const QuizzesStyle = {
      float: "right",
      width: "30%"
    };
    const { pages, defaultPage } = this.state;
    return (
      <React.Fragment>
        <SideNavComponent pages={pages} defaultPage={defaultPage} />
        <div className="main">
          <HeaderComponent />
          <br />
          <div className="card">
            <div className="card-body">
              <h1 className="grad-text">EXAMS TIME</h1>
              <p className="introduction">
                Here we are, Are you ready to fight? Don't worry, we prepared
                some tips to be ready for your exams
              </p>
              <span className="quote">
                "Nothing happens unless something moves" - Albert Einstein
              </span>
              <br />
              <button className="explore-btn">View exam tips</button>
            </div>
          </div>
          <br />
          <div className="card" style={AnnoucementStyle}>
            <div className="card-body">
              <AnnouncementComponent />
            </div>
          </div>
          <div className="card" style={QuizzesStyle}>
            <div className="card-body">
              <QuizzesComponent />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
