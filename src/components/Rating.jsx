import React from 'react';
import PropTypes from 'prop-types';

export default function Rating({ rating }) {
  return (
    <div>
      <span className="rating">{rating}</span>
    </div>
  );
}

Rating.defaultProps = {
  rating: 4.5,
};

Rating.propTypes = {
  rating: PropTypes.number,
};
