import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";

function Login(props) {
  // const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    // document.getElementById('login-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      console.log(e);
      // const username = e.target.username.value;
      // const password = e.target.password.value;
    
      try {
        const result = await axios.post(`http://localhost:8088/user/login`, { username, password },{
          // headers: {
          //   'Content-Type': 'application/json',
          //   'Access-Control-Allow-Origin': '*',
          // },
          withCredentials: true
        });
        console.log(result); 
    
        if (!result.data.flag) {
          return alert(result.data.message);
        }
        // location.href = '/';
      } catch (err) {
        console.error(err);
      }
    // });
  };

  return (
    <form id="login-form" class="form-box" method="post" onSubmit={handleSubmit}>
      <h4>로그인</h4>
      
      <label for="username">ID</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} name="username" />
      <label for="password">PW</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" />
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;