import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import Setup from '../components/Setup';
import './Page.css';

const Page: React.FC = () => {
const { name } = useParams<{ name: string }>();

return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{name}</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      {name === 'Setup' ? <Setup /> : <ExploreContainer name={name} />}
    </IonContent>
  </IonPage>
  );
};

export default Page;
