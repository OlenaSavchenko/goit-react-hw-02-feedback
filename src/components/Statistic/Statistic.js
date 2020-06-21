import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li>Good: {good} </li>
    <li>Neutral: {neutral} </li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    {positivePercentage > 0 && (
      <li> Positive feedback: {positivePercentage} %</li>
    )}
  </ul>
);

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistic;
