import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signOut } from 'redux-oauth';
import Button from 'react-bootstrap-button-loader';
import { isUserSignedIn } from '../../redux/models/user';

class SignOutButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { dispatch } = this.props;
    dispatch(signOut());
  }

  render() {
    if (!this.props.userSignedIn) {
      return null;
    }
    return <Button onClick={this.handleClick}>Sign Out</Button>
  }
}

SignOutButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userSignedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  userSignedIn: isUserSignedIn(state)
})

export default connect(mapStateToProps)(SignOutButton);
