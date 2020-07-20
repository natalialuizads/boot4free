import React, { Component } from 'react';
import './style.css'

import About from './About'
import Main from './Main'
import Bootcamps from './Bootcamps'
import api from '../../services/api'

class Home extends Component {
    constructor() {
        super();
        this.state = {
          courses: []
        };
      }

      componentDidMount(){
        this.loadBootcamps();
      }
    
      loadBootcamps = async () => {
        const response = await api.get(`/bootcamps`);
        this.setState({ courses: response.data });
      };
    
      
    render(){
        return(
            <main>
                <Main />
                <About /> 
                 <Bootcamps 
                 courses={this.state.courses}
                />
            </main>
        )
    }
}

export default Home