import React from 'react'
import InputField from './InputField';
import PasswordField from './PasswordField';
import LoginButton from './LoginButton';
import SocialButton from './SocialButton';

const Login = () => {
  return (
    <div className='login-container'>
      <h1 className='login-title'>로그인</h1>
      <div className='login-form'>
        <InputField />
        <PasswordField />
        <LoginButton />
        <p>계정이 없으신가요?</p> <a href='#'>가입하기</a>
        <p>또는</p>
        <SocialButton />
      </div>
    </div>
  );
};

export default Login