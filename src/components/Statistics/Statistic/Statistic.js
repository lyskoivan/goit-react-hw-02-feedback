import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ label, value }) => (
  <li>
    {label}
    {value}
  </li>
);

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Statistic;
