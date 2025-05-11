import React, { useState } from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserId } from '../feautures/counter/counterSlice.js'


import logo from '/logo.svg';
import { Reg } from './Reg';

const Header = () => {
  const { t } = useTranslation();

  const userId= useSelector((state) => state.counter2.userId)
  const dispatch = useDispatch();
  


  
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');

  
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      console.log('Redux userId:', userId);

      formData.append('username', loginUsername);
      formData.append('password', loginPassword);
      

      const response = await fetch('http://127.0.0.1:8000/Authorization/api/login/', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Login failed');
      const data = await response.json();
      console.log('Login success:', data);
      if(response.ok) {
        console.log('Local Storage ')
        console.log(data)
        localStorage.setItem('userId' , data.user.id)
        localStorage.setItem('accessToken' , data.access)
        dispatch(updateUserId(data.user.id)) 
        document.getElementById("close2").click()

        
      }
     
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
  
    if (registerPassword !== registerConfirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('username', registerUsername);
      formData.append('password', registerPassword);
      formData.append('password2', registerConfirmPassword); // важно: поле ожидается бэкендом
  
      console.log('Sending FormData:');
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
  
      const response = await fetch('http://127.0.0.1:8000/Authorization/api/register/', {
        method: 'POST',
        body: formData,
      });
  
      const text = await response.text();
      console.log('Response status:', response.status);
      console.log('Raw response:', text);
  
      if (!response.ok) throw new Error('Registration failed');
      const data = text ? JSON.parse(text) : {};
      console.log('Register success:', data);
      alert('Registration successful!');
    } catch (err) {
      console.error('Registration error:', err);
      alert(err.message);
    }
  };
  

  return (
    <header>
      <div className="reg">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <Reg />
      </div>

      <div className="header2">
        <h1>{t('header.title')}</h1>
      </div>

      {/* Login Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {t('auth.modalTitle')}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id='close2'
              />
            </div>

            <div className="modal-body">
              <form onSubmit={handleLoginSubmit}>
                <span className="title">Fill these inputs please</span>

                <input
                  type="text"
                  className="input"
                  placeholder="username"
                  value={loginUsername}
                  onChange={e => setLoginUsername(e.target.value)}
                />

                <input
                  type="password"
                  className="input"
                  placeholder="password"
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                />

                <span className="sub">
                  Dont have an account?{' '}
                  <a href="#" data-bs-toggle="modal" data-bs-target="#Register">
                    Create an account
                  </a>
                </span>

                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    {t('auth.close')}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Register Modal */}
      <div
        className="modal fade"
        id="Register"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {t('auth.modalTitle')}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              <form onSubmit={handleRegisterSubmit}>
                <span className="title">Fill these inputs please</span>

                <input
                  type="text"
                  className="input"
                  placeholder="username"
                  value={registerUsername}
                  onChange={e => setRegisterUsername(e.target.value)}
                />
                <input
                  type="email"
                  className="input"
                  placeholder="email"
                  value={registerEmail}
                  onChange={e => setRegisterEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="input"
                  placeholder="password"
                  value={registerPassword}
                  onChange={e => setRegisterPassword(e.target.value)}
                />
                <input
                  type="password"
                  className="input"
                  placeholder="Confirm password"
                  value={registerConfirmPassword}
                  onChange={e => setRegisterConfirmPassword(e.target.value)}
                />

                <span className="sub">
                  Already have an account?{' '}
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                    Sign in
                  </a>
                </span>

                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    {t('auth.close')}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
