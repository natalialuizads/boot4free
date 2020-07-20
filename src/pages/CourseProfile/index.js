import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.css'

import Profile from './Profile'
import CoursesList from './CoursesList'
import api from '../../services/api'
import personImg from '../../assets/images/person_bootcamp_women.png'

class CourseProfile extends Component {
    constructor() {
        super();
        this.state = {
         bootcamp: {},
         courses: []
        }
      }
     async componentDidMount() {
      const { id } = this.props.match.params;
      const response = await api.get(`/bootcamps/${id}`)
      this.setState({ bootcamp: response.data, courses: response.data.courses})
     }

    render(){
        const {company, description, url} = this.state.bootcamp
        return(
            <div className="courseProfile">
            <div className="container">
              <Profile 
              name={company}
              description={description}
              url={url}
              />
              <CoursesList 
              courses={this.state.courses}
              />
            </div>
            <img className="person__img" src={personImg} alt=""></img>
            </div>
        )
    }
}

export default CourseProfile