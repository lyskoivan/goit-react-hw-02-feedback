import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button type="button" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" onClick={onLeaveFeedback}>
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
