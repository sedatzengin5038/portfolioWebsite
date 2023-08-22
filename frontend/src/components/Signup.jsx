import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../dsad.css';

const SignupForm = () => {
  const navigate = useNavigate();

  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    // Make the HTTP GET request to fetch data from the backend
    fetch('http://localhost:8081/signupForm')
      .then((response) => response.json())
      .then((data) => {
        // Handle the response and update the state with the fetched data
        setAdminData(data);
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePasswordChangeAgain = (event) => {
    setPasswordAgain(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const isData = adminData.some((data) => data.email === email);
    



    const validPassword = password;
    
    if (!isData && password === passwordAgain && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      navigate(`/loginForm`); // Redirect to the specified route
      const response = await fetch("http://localhost:8081/signupForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      

    }
  };



  return (
    <div className="footer">
      <div className="user">
        <div className="Login-text">SIGN UP</div>
        <input className='text' type="text" placeholder='Enter your name please' value={name} onChange={handleNameChange} />
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
        <input
          className="password"
          type="password"
          placeholder="enter your password again"
          value={passwordAgain}
          onChange={handlePasswordChangeAgain}
        />
        <button type="submit" className="submit" onClick={handleSubmit}>
          SIGN UP
        </button>
        <button className="submit" onClick={() => navigate(`/loginForm`)}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
