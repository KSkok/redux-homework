import React, { useContext, useState } from 'react';
import { ReduxContext } from './redux/ReduxContext';
import { setLanguage } from '../behavior/actions';
import { LANGUAGES } from '../behavior/languages';

const Header = () => {
  const reduxContext = useContext(ReduxContext);
  const {
    appState: { languageId: stateLanguageId },
    dispatch,
  } = reduxContext;

  const [languageId, setLanguageId] = useState(stateLanguageId);
  const handleChange = e => {
    setLanguageId(e.target.value);
    dispatch(setLanguage(e.target.value));
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

export default Header;
