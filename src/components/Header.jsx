import React from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';

import logo from '/logo.svg';
import { Reg } from './Reg';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="reg">
        <div className="logo">
          <img src={logo} alt="Error" />
        </div>

        <Reg />

        
      </div>

      <div className="header2">
        <h1>{t('header.title')}</h1>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{t('auth.modalTitle')}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <h2>{t('auth.phonePrompt')}</h2>
              <input type="text" className="search-input" placeholder={t('auth.phonePlaceholder')} />
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('auth.close')}</button>
              <button type="button" className="btn btn-primary">{t('auth.login')}</button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
