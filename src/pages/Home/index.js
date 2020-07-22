import React, { Component } from "react";
import "./style.css";

import About from "./About";
import Main from "./Main";
import Bootcamps from "./Bootcamps";
import api from "../../services/api";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      courses: [],
      valueInput: "",
    };
  }

  componentDidMount() {
    this.loadBootcamps();
  }

  loadBootcamps = async () => {
    const response = await api.get(`/bootcamps`);
    this.setState({ courses: response.data });
  };

  handleChange = (e) => {
    const valueInput = e.target.value;
    this.setState({ valueInput });
  };

  handleClick = (e) => {
    const { valueInput, courses } = this.state;

    const search = courses.filter(course =>
      course.company.toLowerCase().includes(valueInput.toLowerCase())
    );
    console.log(search)
    this.setState({ courses: search, valueInput: "" });
  };

  render() {
    return (
      <main>
        <Main />
        <About />
        <Bootcamps
          courses={this.state.courses}
          onChange={this.handleChange}
          value={this.state.valueInput}
          onClick={this.handleClick}
        />
      </main>
    );
  }
}

export default Home;
