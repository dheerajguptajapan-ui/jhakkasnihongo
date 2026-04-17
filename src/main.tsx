import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Toaster } from './components/ui/sonner';
import { AuthProvider } from './lib/AuthContext';
import { I18nProvider } from './lib/i18n';
import { ErrorBoundary } from './components/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <I18nProvider>
          <App />
          <Toaster />
        </I18nProvider>
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>,
);
