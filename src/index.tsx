// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

/* Optional: Ionic styles, if not already included */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);

// ✅ Register the service worker to enable PWA install
serviceWorkerRegistration.register();

// (Optional) for performance logging
reportWebVitals();
