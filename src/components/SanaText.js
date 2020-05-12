import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SanaText = ({ value }) => {

  return <span>{value}</span>;
};

SanaText.propTypes = {
  value: PropTypes.string.isRequired,
};

const mapStateToProps = ({ sanaTexts: { texts } }, { textKey }) => {
  const text = texts.find(t => t.key === textKey);
  let value = '';
  if (text != null)
    value = text.value;
  return { value };
};

export default connect(mapStateToProps)(SanaText);