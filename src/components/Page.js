import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../behavior/user';

const Page = ({ login, name }) => {
  const handleSubmit = (values, setSubmitting) => {
    setSubmitting(false);
    localStorage.setItem('userName', values.userName);
    login(values.userName);
  };

  return (
    <div>
      {!name && <LoginForm handleSubmit={handleSubmit} />}
    </div>
  );
};

Page.propTypes = {
  login: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default connect(({ user: { name } }) => ({ name }), { login })(Page);