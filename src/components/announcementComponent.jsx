import React, { Component } from "react";
import axios from "axios";
import PaginationComponent from "./paginationComponent";
import { paginate } from "../utils/paginate";
import defaultAvatar from "../assets/images/img_avatar.png";
import { getAnnouncements } from "../services/announcementService";

class AnnouncementComponent extends Component {
  state = {
    announcements: [],
    currentPage: 1,
    pageSize: 6
  };

  async componentDidMount() {
    const response = await getAnnouncements();
    const { data: announcements } = response;
    this.setState({ announcements });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { pageSize, currentPage, announcements } = this.state;
    const pageContent = paginate(announcements, currentPage, pageSize);
    return (
      <React.Fragment>
        <h1 className="section-header">Announcements</h1>
        <span className="quote">We educate warriors! Keep updated!</span>
        <hr />
        <table
          style={{ "table-layout": "fixed" }}
          class="table table-borderless"
        >
          <tbody>
            {pageContent.map(item => (
              <tr>
                <td colspan="1">
                  <img
                    src={defaultAvatar}
                    alt="avatar"
                    className="avatarAnnouncement"
                  />
                  <span className="display-name">{"User No. " + item.id}</span>
                </td>
                <td colspan="2">
                  <span className="announcement">{item.title}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PaginationComponent
          itemsCount={announcements.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default AnnouncementComponent;
