import { useTranslation } from 'react-i18next';

export function useLanguageController() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return {
    language: i18n.language as 'en' | 'es',
    toggleLanguage,
  };
}
