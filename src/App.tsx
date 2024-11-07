import React, { useEffect } from 'react';
import { translations } from '@aws-amplify/ui-react';
import { I18n } from 'aws-amplify/utils';
import '@aws-amplify/ui-react/styles.css';
import { useTranslation } from 'react-i18next';
import './i18n';
import AppContent from './components/AppContent';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './pages/ErrorFallback';

const MISTRAL_ENABLED: boolean =
  import.meta.env.VITE_APP_ENABLE_MISTRAL === 'true';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // set header title
    document.title = !MISTRAL_ENABLED
      ? t('app.name')
      : t('app.nameWithoutClaude');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  I18n.putVocabularies(translations);
  I18n.setLanguage(i18n.language);

  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <AppContent />
    </ErrorBoundary>
  );
};

export default App;
