import React from 'react'

const LoginButton = ({ text, isSocial = false, onClick }) => {
  const className = isSocial ? "social-login-button" : "login-button";
  const handleClick = () => {
    onClick(3);
  }
  return (
    <div>
    <button className={className} type='button' onClick={handleClick}>
       {text}
      </button>
    </div>
);
};

export default LoginButton