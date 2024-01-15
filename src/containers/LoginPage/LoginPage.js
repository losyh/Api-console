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
    // event.preventDefault();
    doLogin();
  }

  return (
    <Styled.Wrapper>
      <Styled.LogoStyled src="/icons/logo.svg" alt="logo" />
      <Styled.Form onSubmit={onSubmit} action="/">
        <Styled.Title>API-консолька</Styled.Title>
        <Input label='Логин' error={error}/>
        <Input label='Сублогин' error={error} required={true}/>
        <Input label='Пароль' error={error} type={'password'}/>
        <Styled.Submit type="submit" onClick={onSubmit}>
          Войти
        </Styled.Submit>
      </Styled.Form>
      <Styled.LinkToGit href="https://github.com/losyh/Api-console.git" target="_blank">@link-to-my-github</Styled.LinkToGit>
    </Styled.Wrapper>
  );
}


const Input = (props) =>{
  const {label, type, error, required} = props;

  return (
    <>
      <Styled.Label for={label} $error={error}>{label}</Styled.Label>
      {required && <Styled.Option>Опционально</Styled.Option>}
      <Styled.Input id={label} type={type} $error={error}/>
    </>
  )
}

export default withRouter(LoginPage);
