import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';

const Profile: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>My Profile</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <p>User preferences and settings will appear here.</p>
      <IonButton routerLink="/home">Log Out</IonButton>
    </IonContent>
  </IonPage>
);
export default Profile