import React, { Component } from 'react';
import { Grid, Row, Col, } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import Project from './Project'; 
import './CSS/Projects.css';


class Projects extends Component {

  constructor(props){
    super(props);
    this.state = {
      projects: [{
        id: 1,
        image: 'assets/blog.jpg',
        title: 'Personal Blog',
        description: 'I create this blog using Gatsby, a statis site generator for React. I used the starter-blog boilerplate',
        github: 'https://github.com/grford15/My-Blog',
        link: 'https://competent-goodall-e81734.netlify.com'
      },
        {
        id: 2,
        image: 'assets/ruby-app.jpeg',
        title: 'Ruby Project',
        description: 'This was my first project, created with Ruby, PostgreSQL & Sinatra. The app is designed to manage an art gallery\'s artists and exhibits.',
        github: 'https://github.com/grford15/Gallery_Project',
        link: 'https://gallery-app-18.herokuapp.com/'
      },
      {
        id: 3,
        image: 'assets/restaurant-app.jpeg',
        title: 'Java Project',
        description: 'I worked with on this project, pair programming with another student, the app was created using Java, Hibernate & Spark. The app is designed as a backend booking system for a local restaurant.',
        github: 'https://github.com/grford15/RestaurantProject',
        link: 'http://teamgrebi-restaurantapp.herokuapp.com/bookings'
      },
      {
        id: 4,
        image: 'assets/javascript-app.jpeg',
        title: 'JavaScript Project',
        description: 'This project was created using JavaScript, React & A Timeline API. I worked on this project as part of a group. We had to create an educational and interactive app to be presented to the BBC.',
        github: 'https://github.com/grford15/Group_JavaScript_Project',
        link: undefined
      },
      {
        id: 5,
        image: 'assets/weather-app.jpeg',
        title: 'Weather App',
        description: 'This project was created using JavaScript, React & using an open source weather API. I done this project following a tutorial I found on YouTube as practice working with a different API on React.',
        github: 'https://github.com/grford15/weather-app',
        link: 'https://greg-weather-app.herokuapp.com/'
      }
      ]
    }
  }
  render() {
    return (
      <Grid>
        <Row className="show-grid text-center">
          <Col xs={12} md={12}>
            <div className="home-text">
              <h2>Greg Rutherford: Portfolio</h2>
            </div>
          </Col>
        </Row>
        <Row className="social-media">
          <Col xs={12} md={8} componentClass="social-media-buttons" >
              <SocialIcon className="linkedin" url="https://www.linkedin.com/in/greg-rutherford/" />
              <SocialIcon className="github" bgColor="#24292D" url="https://github.com/grford15"  />
          </Col>
        </Row>

        <Project projects={this.state.projects} key={this.state.projects.id}/>

      </Grid>
    )
  }
}

export default Projects;
