import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { LANGUAGES } from '../behavior/localization';
import { connect } from 'react-redux';
import { receiveSanaTexts } from '../behavior/sanaTexts';

const SanaTextsLoader = ({ languageId, receiveSanaTexts }) => {
  useEffect(() => {
    switch (languageId) {
      case LANGUAGES.EN:
        receiveSanaTexts([
          { key: 'welcomeMessage', value: 'Welcome' },
          { key: 'language', value: 'Language' },
          { key: 'loginHeader', value: 'Login' },
          { key: 'userName', value: 'User name' },
          { key: 'loginButton', value: 'Login' },
          { key: 'logoutButton', value: 'Logout' },
        ]);
        break;
      case LANGUAGES.UA:
        receiveSanaTexts([
          { key: 'welcomeMessage', value: 'Ласкаво просимо' },
          { key: 'language', value: 'Мова' },
          { key: 'loginHeader', value: 'Увійти' },
          { key: 'userName', value: 'Ім\'я користувача' },
          { key: 'loginButton', value: 'Увійти' },
          { key: 'logoutButton', value: 'Вийти' },
        ]);
        break;
      default:
        break;
    }
  }, [languageId, receiveSanaTexts]);

  return null;
};

SanaTextsLoader.propTypes = {
  languageId: PropTypes.string.isRequired,
  receiveSanaTexts: PropTypes.func.isRequired,
};

export default connect(({ localization: { languageId } }) => ({ languageId }), { receiveSanaTexts })(SanaTextsLoader);
