import React, { Component } from 'react';
import './style.css'

import Profile from './Profile'
import CoursesList from './CoursesList'
import api from '../../services/api'

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
        const {company, logo, description, url} = this.state.bootcamp
        return(
            <div>
              <Profile 
              name={company}
              description={description}
              logo={logo}
              />
              <CoursesList 
              courses={this.state.courses}
              />
              <di>
                  <a href={url} target="blank">Acessar Site</a>
              </di>
            </div>
        )
    }
}

export default CourseProfile