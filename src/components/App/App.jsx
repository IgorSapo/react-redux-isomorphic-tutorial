import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import { Link } from 'react-router-dom';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import './bootstrap.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Hello, world</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav navbar>
              <LinkContainer to='/time'>
                <NavItem>Time</NavItem>
              </LinkContainer>
              <LinkContainer to='/counters'>
                <NavItem>Counters</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <div>{this.props.children}</div>
          <div>5</div>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
