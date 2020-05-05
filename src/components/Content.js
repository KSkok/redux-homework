import React from 'react';
import PropTypes from 'prop-types';
import { LANGUAGES } from '../behavior/languages';
import { connect } from 'react-redux';

const Content = ({ languageId }) => {
  let text = '';

  switch (languageId) {
    case LANGUAGES.EN:
      text = 'Hello, world!';
      break;
    case LANGUAGES.UA:
      text = 'Привіт, світ!';
      break;
    default:
      break;
  }

  return <p>{text}</p>;
};

Content.propTypes = {
  languageId: PropTypes.string.isRequired,
};

export default connect(({ languageId }) => ({ languageId }))(Content);
