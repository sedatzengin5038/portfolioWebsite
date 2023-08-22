import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../dsad.css';
import loginData from "../login.json"
const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminData,setAdminData] = useState({})
  const [cookieValue, setCookieValue] = useState('');
  const isEmailPassword = async ()=>{
  
    fetch(`http://localhost:8081/loginForm/${email}`)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response and update the state with the fetched data
      setAdminData(data[0]);

      
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }


  const setCookie = async () => {
    try {
      await fetch('http://localhost:8081/set-cookie', {
        method: 'GET',
        credentials: 'include', // Include credentials (cookies) in the request
      });
    } catch (error) {
      console.error('Error setting cookie:', error);
    }
  };


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    isEmailPassword()
  };

  const getCookieValue = (name) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return '';
  };
  useEffect(() => {
    if (Object.entries(adminData).length !== 0) {
      const validEmail = adminData.email;
      const validPassword = adminData.password;
      if (email === validEmail && password === validPassword) {
        setCookie()
        navigate(`/`); // Redirect to the specified route
      }
    }



    // Example usage
    const myCookieValue = getCookieValue('myCookieName');
    setCookieValue(myCookieValue);
    console.log(myCookieValue)
  }, [adminData]);
 

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
        <button className="submit" onClick={()=>navigate(`/signupForm`)}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
