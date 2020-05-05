import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setLanguage } from '../behavior/actions';
import { LANGUAGES } from '../behavior/languages';
import { connect } from 'react-redux';

const Header = ({ languageId: stateLanguageId, setLanguage }) => {
  const [languageId, setLanguageId] = useState(stateLanguageId);
  const handleChange = e => {
    setLanguageId(e.target.value);
    setLanguage(e.target.value);
  };

  return (
    <>
      <label htmlFor="language">Language: </label>
      <select id="language" value={languageId} onChange={handleChange}>
        <option value={LANGUAGES.EN}>EN</option>
        <option value={LANGUAGES.UA}>UA</option>
      </select>
    </>
  );
};

Header.propTypes = {
  languageId: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export default connect(({ languageId }) => ({ languageId }), { setLanguage })(Header);
