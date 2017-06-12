import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OAuthButton, SignOutButton } from 'components/AuthButtons';

import './HelloWorldPage.css';

class HelloWorldPage extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.renderGreetingWidget = this.renderGreetingWidget.bind(this);

    this.state = {
      name: this.props.initialName,
      touched: false,
      greetingWidget: () => null
    };
  }

  handleNameChange(e) {
    window.console.log(e.target.value);
    const name = e.target.value;

    this.setState({ touched: true });

    if (name.length === 0) {
      this.setState({ name: this.props.initialName });
    } else {
      this.setState({ name });
    }
  }

  renderGreetingWidget() {
    if (!this.state.touched) {
      return null;
    }

    return (
      <div>
        <hr />
        <p>Hello, {this.state.name}!</p>
      </div>
    );
  }

  render() {
    return (
      <div className='App'>
        <p>Hello, world!</p>
        <div>
          <h2>Please, sign in</h2>
          <OAuthButton provider='github' />
          <SignOutButton />
          <p>Enter your name:</p>
          <div><input onChange={this.handleNameChange} /></div>
          <div>{this.state.touched ? 'true' : 'false'}</div>
          {this.renderGreetingWidget()}
        </div>
      </div>
    );
  }
}

HelloWorldPage.propTypes = {
  initialName: PropTypes.string
};

HelloWorldPage.defaultProps = {
  initialName: 'Anonimous'
};

export default HelloWorldPage;
