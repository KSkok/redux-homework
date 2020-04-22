import React, { useContext } from "react";
import { ReduxContext } from "../context/ReduxContext";
import { newLanguageId } from "../behavior/actions";
import { LANGUAGES } from "../constants/languages";

const Header = () => {
  const reduxContext = useContext(ReduxContext);
  const {
    appState: { languageId },
    dispatch,
  } = reduxContext;

  const handleChange = (e) => {
    dispatch(newLanguageId(e.target.value));
  };

  return (
    <>
      <label htmlFor="language">Language: </label>
      <select id="language" defaultValue={languageId} onChange={handleChange}>
        <option value={LANGUAGES.EN}>EN</option>
        <option value={LANGUAGES.UA}>UA</option>
      </select>
    </>
  );
};

export default Header;
