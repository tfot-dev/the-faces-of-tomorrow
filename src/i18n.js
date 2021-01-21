import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
    // load translation using http -> see /public/locales
    .use(Backend)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
