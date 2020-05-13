import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { LANGUAGES } from '../behavior/localization';
import { connect } from 'react-redux';
import { receiveSanaTexts } from '../behavior/sanaTexts';

const SanaTextsLoader = ({ receiveSanaTexts }) => {
  useEffect(() => {
    receiveSanaTexts([
      {
        languageId: LANGUAGES.EN,
        translations: [
          { key: 'welcomeMessage', value: 'Welcome' },
          { key: 'language', value: 'Language' },
          { key: 'loginHeader', value: 'Login' },
          { key: 'userName', value: 'User name' },
          { key: 'loginButton', value: 'Login' },
          { key: 'logoutButton', value: 'Logout' },
          { key: 'contentManagementHeader', value: 'Content management' },
          { key: 'sanaTextId', value: 'Sana text ID' },
          { key: 'defaultLanguage', value: 'Default language' },
          { key: 'alternativeLanguage', value: 'Alternative language' },
          { key: 'submitTextButton', value: 'Submit text' },
          { key: 'emptyList', value: 'There are no sana texts' },
        ],
      },
      {
        languageId: LANGUAGES.UA,
        translations: [
          { key: 'welcomeMessage', value: 'Ласкаво просимо' },
          { key: 'language', value: 'Мова' },
          { key: 'loginHeader', value: 'Увійти' },
          { key: 'userName', value: 'Ім\'я користувача' },
          { key: 'loginButton', value: 'Увійти' },
          { key: 'logoutButton', value: 'Вийти' },
          { key: 'contentManagementHeader', value: 'Управління контентом' },
          { key: 'sanaTextId', value: 'Ідентифікатор сана тексту' },
          { key: 'defaultLanguage', value: 'Мова за замовчуванням' },
          { key: 'alternativeLanguage', value: 'Альтернативна мова' },
          { key: 'submitTextButton', value: 'Надіслати текст' },
          { key: 'emptyList', value: 'Немає жодного сана тексту' },
        ],
      },
    ]);
  }, [receiveSanaTexts]);

  return null;
};

SanaTextsLoader.propTypes = {
  receiveSanaTexts: PropTypes.func.isRequired,
};

export default connect(null, { receiveSanaTexts })(SanaTextsLoader);
