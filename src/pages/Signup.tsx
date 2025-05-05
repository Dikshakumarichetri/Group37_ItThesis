import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/react';

const SignUp: React.FC = () => (
  <IonPage className='page-signup'>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Sign Up</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonInput placeholder="Full Name" />
      <IonInput placeholder="Email" type="email" />
      <IonInput placeholder="Password" type="password" />
      <IonButton expand="block" routerLink="/dashboard">Register</IonButton>
    </IonContent>
  </IonPage>
);
export default SignUp;