import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ru: {
        translation: {
          auth: {
            login: 'Войти',
            modalTitle: 'Вход',
            phonePrompt: 'Введите номер телефона',
            phonePlaceholder: '+7 (XXX) XXXX',
            close: 'Закрыть',
          },
          header: {
            title: 'Круглосуточная запись\nна прием',
          },
          search: {
            doctorPlaceholder: 'Врач, клиника или процедура',
            clinics: 'Доктора',
            procedures: 'Процедуры',
          },
        },
      },
      en: {
        translation: {
          auth: {
            login: 'Login',
            modalTitle: 'Sign In',
            phonePrompt: 'Enter phone number',
            phonePlaceholder: '+7 (XXX) XXXX',
            close: 'Close',
          },
          header: {
            title: '24/7 Appointment Booking',
          },
          search: {
            doctorPlaceholder: 'Doctor, clinic or procedure',
            clinics: 'Doctors',
            procedures: 'Procedures',
          },
        },
      },
      kz: {
        translation: {
          auth: {
            login: 'Кіру',
            modalTitle: 'Кіру',
            phonePrompt: 'Телефон нөміріңізді енгізіңіз',
            phonePlaceholder: '+7 (XXX) XXXX',
            close: 'Жабу',
          },
          header: {
            title: 'Тәулік бойы\nқабылдауға жазылу',
          },
          search: {
            doctorPlaceholder: 'Дәрігер, клиника немесе процедура',
            clinics: 'Дәрігерлер',
            procedures: 'Процедуралар',
          },
        },
      },
    },
  });

export default i18n;
