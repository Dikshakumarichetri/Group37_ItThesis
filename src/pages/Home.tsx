import React, { useEffect, useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonButton,
  IonButtons
} from '@ionic/react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const Home: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const promptEvent = e as BeforeInstallPromptEvent;
      e.preventDefault();
      setDeferredPrompt(promptEvent);
      setCanInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
        setCanInstall(false);
      });
    }
  };

  const goToLogin = () => {
    window.location.href = '/login';
  };
  return (


  <IonPage className='page-home'>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Kantri Langgus</IonTitle>
        {canInstall && (
            <IonButtons slot="end">
              <IonButton onClick={handleInstall} >
                Install
              </IonButton>
            </IonButtons>
          )}

      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding page-home" fullscreen>
    <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '20vh',
          textAlign: 'center',
        }}
      >
        
        <h2>Welcome to Kantri Langgus</h2>
        <IonButton onClick={goToLogin} routerLink="/login" expand="block" style={{ width: '80%', marginTop: '1rem' }}>
          Login
        </IonButton>
        <IonButton routerLink="/signup" expand="block" style={{ width: '80%', marginTop: '0.5rem' }}>
          Sign Up
        </IonButton>
        
      </div>
    </IonContent>
  </IonPage>
);
};
export default Home