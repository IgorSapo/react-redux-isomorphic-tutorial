import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Counter from './Counter';
import { incrementCounter } from '../../redux/actions/counterActions';

class ReduxCounter extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(incrementCounter());
  }

  render() {
    return (
      <Counter
        value={this.props.value}
        onClick={this.handleClick}
      />
    )
  }
}

ReduxCounter.propTypes = {
	dispatch: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  const {value} = state.counter;
  return {value};
};

export default connect(mapStateToProps)(ReduxCounter);