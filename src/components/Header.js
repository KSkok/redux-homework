import React, { useContext, useState } from 'react';
import { ReduxContext } from './redux/ReduxContext';
import { newLanguageId } from '../behavior/actions';
import { LANGUAGES } from '../behavior/languages';

const Header = () => {
  const reduxContext = useContext(ReduxContext);
  const {
    appState: { languageId },
    dispatch,
  } = reduxContext;

  const [language, setLanguage] = useState(languageId);
  const handleChange = e => {
    setLanguage(e.target.value);
    dispatch(newLanguageId(e.target.value));
  };

  return (
    <>
      <label htmlFor="language">Language: </label>
      <select id="language" value={language} onChange={handleChange}>
        <option value={LANGUAGES.EN}>EN</option>
        <option value={LANGUAGES.UA}>UA</option>
      </select>
    </>
  );
};

export default Header;
