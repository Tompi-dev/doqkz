import React from 'react';
import './Footer.css';
import logo from '/logo.svg';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col logo-col">
          <img src={logo} alt="Doq logo" className="footer-logo" />
          <p>DOQ.kz — сервис бесплатного поиска врача и онлайн записи на прием</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>

        <div className="footer-col">
          <h4>Пациенту</h4>
          <ul>
            <li>Клиники Алматы</li>
            <li>Процедуры Алматы</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Клиникам</h4>
          <ul>
            <li>Личный кабинет</li>
            <li>Подключить клинику</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Сервис</h4>
          <ul>
            <li>Интернет-сервис</li>
            <li>Наши контакты</li>
            <li>Карта сайта</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="countries">
          <span>Казахстан</span>
          <span>Кыргызстан</span>
          <span>Венгрия</span>
          <span>Румыния</span>
        </div>
        <div className="copyright">
          © 2025 DOQ.kz, Inc. All Rights Reserved
        </div>
        <div className="policies">
          <span>Конфиденциальность</span>
          <span>Согласие на обработку персональных данных</span>
          <span>Пользовательское соглашение</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
