import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Projects from './components/Projects';
import About from './components/About';
import Navbar from './components/CustomNavbar';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Router>
        <div>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </div>
      </Router>
      <Footer/>
    </React.Fragment>
    );
  }
}

export default App;
