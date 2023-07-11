import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../dsad.css';
import loginData from "../login.json"
const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Login işlemleri burada yapılabilir
    
    const validEmail = loginData.loginCredentials.email;
    const validPassword = loginData.loginCredentials.password;
    console.log(validEmail)
    if (email === validEmail && password === validPassword) {
      navigate(`/   ?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`); // Redirect to the specified route
    }
  };

 

  return (
    <div className="footer">
      <div className="user">
        <div className="Login-text">LOGIN</div>
        <input
          className="email"
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="password"
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" className="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
