import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SanaText = ({ value }) => {

  return <span>{value}</span>;
};

SanaText.propTypes = {
  value: PropTypes.string.isRequired,
};

const mapStateToProps = ({ sanaTexts: { texts }, localization: { languageId } }, { textKey }) => {
  const allTexts = texts.find(t => t.languageId === languageId);
  let value = '';
  if (allTexts != null) {
    const text = allTexts.translations.find(t => t.key === textKey);
    value = text.value;
  }
  return { value };
};

export default connect(mapStateToProps)(SanaText);