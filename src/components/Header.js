import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setLanguage, LANGUAGES } from '../behavior/localization';
import { connect } from 'react-redux';
import SanaText from './SanaText';
import { logout } from '../behavior/user';

const Header = ({ languageId: stateLanguageId, name = '', setLanguage, logout }) => {
  const [languageId, setLanguageId] = useState(stateLanguageId);
  const handleChange = e => {
    setLanguageId(e.target.value);
    setLanguage(e.target.value);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('userName');
    logout();
  };

  return (
    <header>
      <div className="block">
        <SanaText textKey="language" />
        {': '}
        <select id="language" value={languageId} onChange={handleChange}>
          <option value={LANGUAGES.EN}>EN</option>
          <option value={LANGUAGES.UA}>UA</option>
        </select>
      </div>
      {name && (
        <>
          <div className="block">
            <SanaText textKey="welcomeMessage" />
            {`, ${name}!`}
          </div>
          <div className="block">
            <button onClick={handleLogoutClick}>
              <SanaText textKey="logoutButton" />
            </button>
          </div>
        </>
      )}
    </header>
  );
};

Header.propTypes = {
  languageId: PropTypes.string.isRequired,
  name: PropTypes.string,
  setLanguage: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { languageId } = state.localization;
  const { name } = state.user;
  return {
    languageId,
    name,
  };
};

export default connect(mapStateToProps, { setLanguage, logout })(Header);
