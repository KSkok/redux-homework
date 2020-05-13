import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../behavior/user';
import { addText, changeText } from '../behavior/content';
import { changeSanaText } from '../behavior/sanaTexts';
import ContentManagementForm from './ContentManagementForm';
import TextsList from './TextsList';

const Page = ({ login, name, sanaTexts, addText, changeText, texts, changeSanaText }) => {
  const handleLoginSubmit = (values, setSubmitting) => {
    setSubmitting(false);
    localStorage.setItem('userName', values.userName);
    login(values.userName);
  };

  const handleContentManagementSubmit = (values, setSubmitting) => {
    if (sanaTexts[0].translations.find(t => t.key === values.sanaTextId)) {
      changeSanaText(values);
    }
    else {
      if (texts.find(t => t.sanaTextId === values.sanaTextId)) {
        changeText(values);
        localStorage.setItem('texts', JSON.stringify(texts.map(text => {
          return text.sanaTextId === values.sanaTextId ? values : text;
        })));
      }
      else {
        addText(values);
        localStorage.setItem('texts', JSON.stringify([...texts, values]));
      }
    }

    setSubmitting(false);
  };

  return (
    <div>
      {name
        ? (
          <>
            <ContentManagementForm handleSubmit={handleContentManagementSubmit} />
            <TextsList />
          </>
        )
        : <LoginForm handleSubmit={handleLoginSubmit} />
      }
    </div>
  );
};

Page.propTypes = {
  login: PropTypes.func.isRequired,
  name: PropTypes.string,
  sanaTexts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addText: PropTypes.func.isRequired,
  changeText: PropTypes.func.isRequired,
  texts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  changeSanaText: PropTypes.func.isRequired,
};

export default connect(
  ({ user: { name }, sanaTexts: { texts: sanaTexts }, content: { texts } }) => ({ name, sanaTexts, texts }),
  { login, addText, changeText, changeSanaText },
)(Page);