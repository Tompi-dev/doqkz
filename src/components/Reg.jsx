import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {  updateUserId } from '../feautures/counter/counterSlice.js'


import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import { FaRegUserCircle } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import './Header.css';
export const Reg = () => {
  const { t } = useTranslation();
  const userId = useSelector((state) => state.counter2.userId);
  const dispatch = useDispatch();

  return (
    <div>

      <div className="reg-enter">


        {userId == null

          ?

          <div className="reg-enter-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <FaRegUserCircle size={26} /> {t('auth.login')}
          </div>

          :
          <div className="reg-enter-btn"  onClick={()=> {
            dispatch(updateUserId(null));
            localStorage.removeItem('userId');
  localStorage.removeItem('accessToken');
          }}>
            
            <FaRegUserCircle size={26} /> Exit
          </div>


        }
        <div className="reg-enter-btn">
          <div className="language-switcher">
            <TfiWorld className="lang-icon" />
            <select
              className="lang-select"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              defaultValue={i18n.language}
            >
              <option value="ru">Ru</option>
              <option value="kz">Kz</option>
              <option value="en">En</option>
            </select>
          </div>

        </div>
      </div>
    </div>
  );
};
