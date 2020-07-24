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
      search: "",
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
    this.setState({ search: e.target.value });
  };
  render() {
    const { search, courses } = this.state;
    const filteredCourses = courses.filter((course) => {
      return course.company.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    return (
      <main>
        <Main />
        <About />
        <Bootcamps
          courses={filteredCourses}
          onChange={this.handleChange}
          value={search}
        />
      </main>
    );
  }
}

export default Home;
