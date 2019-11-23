import React, { useState } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonIcon, IonLabel, IonItem, IonPage, IonRouterOutlet } from "@ionic/react";
import './Menu.css'
import {Redirect} from 'react-router-dom'

const pages = [
  { title: 'Apollo', path: '/apollo', icon: 'home' },
  { title: 'Login', path: '/login', icon: 'information' }
];



const Menu = () => {
  const [activePage, setActivePage] = useState(pages[0].title);
  const navigateToPage = (page) => {
   setActivePage(page.title);
   console.log(page)
  return <Redirect to={page}/>;
  }

  const renderMenuItems = () => {
    return pages.map((page) => (
        <IonMenuToggle key={page.title} auto-hide="false">
            <IonItem button routerLink={page.path}
                color={page.title === activePage ? 'primary' : ''}>
                <IonIcon slot="start" name={page.icon}></IonIcon>
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
                <IonTitle>
                    Menu
                </IonTitle>
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