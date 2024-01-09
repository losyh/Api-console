import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {authenticate} from 'src/store/actions/auth';
import * as Styled from './styled.js'


function LoginPage({history}) {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [sublogin, setSubLogin] = useState('');
  const [password, setPassword] = useState('');
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
    event.preventDefault();
    doLogin();
  }

  const errorInp = error ? {outline: '1px solid red', boxShadow: '1px 1px 2px 0 red'} : null;
  const errorP = error ? {color: 'var(--Red, #CF2C00)'} : null;
  return (
    <Styled.Wrapper>
      <Styled.LogoStyled src="/icons/logo.svg" alt="logo" />
      <Styled.Form onSubmit={onSubmit} action="/">
        <Styled.Title>API-консолька</Styled.Title>
        <Styled.SubTitle style={errorP}>Логин</Styled.SubTitle>
        <Styled.Input value={login} onChange={(e) => setLogin(e.target.value)} style={errorInp}/>
        <Styled.SubTitle style={errorP}>Сублогин</Styled.SubTitle>
        <Styled.Option>Опционально</Styled.Option>
        <Styled.Input value={sublogin} onChange={(e) => setSubLogin(e.target.value)} style={errorInp}/>
        <Styled.SubTitle style={errorP}>Пароль</Styled.SubTitle>
        <Styled.InputPass value={password} onChange={(e) => setPassword(e.target.value)} type='password' style={errorInp}/>
        <Styled.LogBtn type="submit" onClick={onSubmit}>
          Войти
        </Styled.LogBtn>
      </Styled.Form>
      <Styled.LinkToGit href="https://github.com/losyh/main-project" target="_blank">@link-to-your-github</Styled.LinkToGit>
    </Styled.Wrapper>
  );
}

export default withRouter(LoginPage);
