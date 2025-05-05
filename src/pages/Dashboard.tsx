import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';

const Dashboard: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Dashboard</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonButton routerLink="/record">Record</IonButton>
      <IonButton routerLink="/library">Library</IonButton>
      <IonButton routerLink="/dictionary">Dictionary</IonButton>
      <IonButton routerLink="/playlist">Playlists</IonButton>
      <IonButton routerLink="/profile">Profile</IonButton>
    </IonContent>
  </IonPage>
);
export default Dashboard;