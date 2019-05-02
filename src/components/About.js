import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import './CSS/About.css';
import axios from 'axios';


class About extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      name: '',
      subject: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({[e.target.id]: e.target.value})
  }

  async handleSubmit(e){
    e.preventDefault()

    const { email, name, subject, message } = this.state;

    const form = await axios.post('/api/form', {
      email,
      name,
      subject,
      message
    })
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid text-center about">
            <div className="about-me">
              <p>
              Hi, My name is Greg Rutherford and I am a 28 year old software
              developer from Glasgow, Scotland.
              </p>

              <p>
              I started my Coding journey through online learning such as
              FreeCodeCamp & Codecademy before enrolling in CodeClan, a 16-week
              intensive bootcamp in Glasgow. During my time at CodeClan I learned
              Ruby, Java & JavaScript. Along with these languages I also worked with
              HTML, CSS, React, PostgreSQL, MongoDB, Hibernate, Spark & Sinatra.
              </p>
            </div>
        </Row>
        <Row className="justify-content-center">
          <div className="contact-section">
            <h1>Contact Me</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
              <label>E-Mail Address</label>
                <input 
                type="email" 
                className="form-control" 
                placeholder="example@email.com" 
                id="email"
                onChange={this.handleChange} />
              <label>Full Name</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Full Name" 
                id="name"
                onChange={this.handleChange} />
              <label>Subject</label>
              <input 
              type="text" 
              className="form-control" 
              placeholder="Subject" 
              id="subject"
              onChange={this.handleChange} />
              <label>Message</label>
              <textarea
              className="form-control" 
              id="message" 
              rows="4"
              onChange={this.handleChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>
        </Row>

      </Grid>
    )
  }
}

export default About;
