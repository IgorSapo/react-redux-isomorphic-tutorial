import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import './Counter.css';

const Counter = ({ onClick, value }) => (
  <div>
    <div className='counter-label'>
      Value: {value}
    </div>
    <Button onClick={onClick}>+</Button>
  </div>
)

Counter.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.number
}

Counter.defaultProps = {
  onClick: () => {},
  value: 0
}

export default Counter;
