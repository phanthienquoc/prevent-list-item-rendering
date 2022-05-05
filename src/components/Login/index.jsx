import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useGoogleAuth } from "../../providers/authenticate/OAuthGoogle";
import './style.css'

const Login = () => {
  let navigate = useNavigate();
  const { signIn, signOut } = useGoogleAuth();

  const _handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements
    console.log(email.value, password.value)
  }

  const _handleLoginWithGoogle = () => {
    signIn().then(res => {
      navigate("/dashboard", { replace: true })
    }, rej => {
      console.log("signin fail")
    })
  }

  const _handleLogout = () => {
    signOut()
  }

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={_handleLogin}>
        <h5>Welcome to our app!</h5>
        <p>Log in  your account!</p>
        <div className='wrapper'>
          <label>Email</label>
          <input name='email' />
        </div>
        <div className='wrapper'>
          <label>Password</label>
          <input name='password' type="password" />
        </div>
        <div className='login-action'>
          <button type='submit'>
            Log in
          </button>
        </div>
      </form>
      <div className='login-with-google-wrapper'>
        <button className='login-with-google' onClick={_handleLoginWithGoogle}>
          Log in with Google
        </button>
      </div>

      {/* <button onClick={_handleLogout}>Log out</button> */}
    </div>
  );
};

export default Login;