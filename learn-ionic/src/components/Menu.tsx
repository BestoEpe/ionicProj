import {
  IonContent,
  IonIcon,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonImg,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Overview',
    url: '/folder/Overview',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Setup CLI',
    url: '/folder/Setup',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
      <IonImg src="https://ionicframework.com/docs/logos/ionic-text-docs-dark.svg"></IonImg>
        <IonList id="menu-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonCard color="secondary">
      <IonCardHeader>
        <IonCardTitle>Ionic Project</IonCardTitle>
        <IonCardSubtitle>Source code</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>https://github.com/BestoEpe/ionicProj</IonCardContent>
    </IonCard>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
