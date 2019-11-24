import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonLabel, IonItem,  IonRouterOutlet } from "@ionic/react";
import './Menu.css'
import { pages } from "../info/menu"

const Menu = () => {

  const renderMenuItems = () => {
    return pages.map((page) => (
        <IonMenuToggle key={page.title} auto-hide="false">
            <IonItem button routerLink={page.path}>
                <IonLabel>
                  {page.title}
                </IonLabel>
            </IonItem>
        </IonMenuToggle>
    ));
  }

  return (
    <IonContent>
      <IonMenu className="z-index-menu" contentId="my-content" side="start">
        <IonHeader>
          <IonToolbar>
            <IonTitle> Menu </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
              { renderMenuItems() }
            </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="my-content" main></IonRouterOutlet>
    </IonContent>   
  );
}

export default Menu;