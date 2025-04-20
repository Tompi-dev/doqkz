import React from 'react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import { FaRegUserCircle } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import './Header.css';
export const Reg = () => {
  const { t } = useTranslation(); 

  return (
    <div>
      <div className="reg-enter">
        <div className="reg-enter-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <FaRegUserCircle size={26} /> {t('auth.login')}
        </div>

        <div className="reg-enter-btn">
        <div className="language-switcher">
  <TfiWorld className="lang-icon" />
  <select
    className="lang-select"
    onChange={(e) => i18n.changeLanguage(e.target.value)}
    defaultValue={i18n.language}
  >
    <option  value="ru">Ru</option>
    <option value="kz">Kz</option>
    <option value="en">En</option>
  </select>
</div>

        </div>
      </div>
    </div>
  );
};
