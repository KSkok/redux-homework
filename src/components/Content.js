import React, { useContext } from "react";
import { ReduxContext } from "./redux/ReduxContext";
import { LANGUAGES } from "../behavior/languages";

const Content = () => {
  const reduxContext = useContext(ReduxContext);
  const { languageId } = reduxContext.appState;
  let text = "";

  switch (languageId) {
    case LANGUAGES.EN:
      text = "Hello, world!";
      break;
    case LANGUAGES.UA:
      text = "Привіт, світ!";
      break;
    default:
      break;
  }

  return <p>{text}</p>;
};

export default Content;
