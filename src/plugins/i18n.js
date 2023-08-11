import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from '../locales/en.json'

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {
      translation: enTranslations
    }
  }
})

export default i18n
