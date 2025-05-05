import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/react';

const Login: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Login</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonInput placeholder="Email" type="email" />
      <IonInput placeholder="Password" type="password" />
      <IonButton expand="block" routerLink="/dashboard">Login</IonButton>
    </IonContent>
  </IonPage>
);
export default Login