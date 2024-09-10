import React, { useState } from 'react'
import InputField from './InputField';
// import PasswordField from './PasswordField';
import LoginButton from './LoginButton';
// import SocialButton from './SocialButton';

const Login = () => {
  const [number, setNumber] = useState(0);
  console.log(number);
  const handleClick = (n) => {
    setNumber(n);
    console.log(n);
  }
  return (
    <div className='login-container'>
      <h2 className='login-title'>로그인</h2>
      <div className='login-form'>
        <InputField type={"text"} placeholder={"이메일"} />
        <InputField type={"password"} placeholder={"비밀번호"} />

        <LoginButton text={"로그인"} onClick={()=>console.log("로그인버튼 클릭")}/>

        <div className='allign'><span>계정이 없으신가요?</span> <a href='#'>가입하기</a></div>
        <p className='allign'>또는</p>
        <LoginButton text={"continue with Google"} onClick={()=>console.log("소셜버튼 클릭")}
        isSocial={true} />
      </div>
    </div>
  );
};

export default Login