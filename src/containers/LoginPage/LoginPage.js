import React, {useEffect, useState} from 'react';
import useInput from 'src/helpers/useInput.js';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {authenticate} from 'src/store/actions/auth';
import * as Styled from './styled.js';

function LoginPage({history}) {
  const dispatch = useDispatch();
  const login = useInput('');
  const sublogin = useInput('');
  const password = useInput('');
  const [error, setError] = useState(false);
  const loading = useSelector((state) => state.auth.loading);
  const isLoggedIn = useSelector((state) => !!state.auth.sessionKey?.length);

  console.log('loading', loading);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    }
  }, [isLoggedIn]);

  const doLogin = () => {
    dispatch(
      authenticate({
        login,
        sublogin,
        password,
      })
    );
  };

  function onSubmit(event) {
    // event.preventDefault();
    doLogin();
  }

  return (
    <Styled.Wrapper>
      <Styled.LogoStyled src="/icons/logo.svg" alt="logo" />
      <Styled.Form onSubmit={onSubmit} action="/">
        <Styled.Title>API-консолька</Styled.Title>
        <Input label="Логин" error={error} onChange={login.onChange} />
        <Input
          label="Сублогин"
          error={error}
          required={true}
          onChange={sublogin.onChange}
        />
        <Input
          label="Пароль"
          error={error}
          type={'password'}
          onChange={password.onChange}
        />
        <Styled.Submit type="submit" onClick={onSubmit}>
          <Link to="/console">Войти</Link>
        </Styled.Submit>
      </Styled.Form>
      <Styled.LinkToGit
        href="https://github.com/losyh/Api-console.git"
        target="_blank"
      >
        @link-to-my-github
      </Styled.LinkToGit>
    </Styled.Wrapper>
  );
}

const Input = (props) => {
  const {label, type, error, required, onChange} = props;

  return (
    <>
      <Styled.Label for={label} $error={error}>
        {label}
      </Styled.Label>
      {required && <Styled.Option>Опционально</Styled.Option>}
      <Styled.Input id={label} type={type} $error={error} onChange={onChange} />
    </>
  );
};

export default withRouter(LoginPage);
