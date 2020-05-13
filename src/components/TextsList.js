import React from 'react';
import PropTypes from 'prop-types';
import SanaText from './SanaText';
import { connect } from 'react-redux';

const TextsList = ({ texts }) => {
  if (texts.length === 0) {
    return <p><SanaText textKey="emptyList" /></p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th><SanaText textKey="sanaTextId" /></th>
          <th><SanaText textKey="defaultLanguage" /></th>
          <th><SanaText textKey="alternativeLanguage" /></th>
        </tr>
      </thead>
      <tbody>
        {texts.map(text => {
          return (
            <tr key={text.sanaTextId}>
              <td>{text.sanaTextId}</td>
              <td>{text.defaultLanguage}</td>
              <td>{text.alternativeLanguage}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TextsList.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(({ content: { texts } }) => ({ texts }))(TextsList);