import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth.js';
import { useState } from 'react';

const Auth = () => {
  const dispatch = useDispatch();

  const [entredEmail,setEntredEmail] = useState('');
  const [entredPassword,setEntredPassword] = useState('');


  const handleEntredEmail = (event) => {
    setEntredEmail(event.target.value);
  };

  const handleEntredPassword = (event) => {
    setEntredPassword(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    if(entredEmail.trim().length === 0 || entredPassword.trim().length === 0) {
      return;
    }else{
      dispatch(authActions.login());
    }

  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={handleEntredEmail} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={handleEntredPassword}  />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
