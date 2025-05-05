import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';

const Dictionary: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Dictionary</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonButton>Add New Word</IonButton>
      <p>Words and audio recordings will display here.</p>
    </IonContent>
  </IonPage>
);
export default Dictionary;