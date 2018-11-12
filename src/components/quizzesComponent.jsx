import React, { Component } from "react";
import { getQuizzes } from "../services/fakeQuizService";

class QuizComponent extends Component {
  state = {
    quizzes: []
  };
  componentDidMount() {
    const quizzes = [...getQuizzes()];
    this.setState({ quizzes });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Quizzes</h1>
        {this.state.quizzes.map(quiz => (
          <div className="card" style={{ border: "none" }}>
            <div className="card-body">
              <h5 className="card-title" style={{ "font-weight": "bold" }}>
                <i
                  className="fa fa-hourglass-half"
                  style={{ color: "#4eccc4", "margin-right": "5px" }}
                />
                {quiz.title}
              </h5>
              <p className="card-text">
                Course: {quiz.course}
                <br />
                Topic: {quiz.topic}
                <br />
                Due to: {quiz.deadline}
              </p>
              <a
                href="#"
                className="btn btn-primary"
                style={{
                  width: "100%",
                  color: "#4eccc4",
                  borderColor: "#4eccc4",
                  background: "none"
                }}
              >
                Start Quiz
              </a>
            </div>
            <hr />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default QuizComponent;
