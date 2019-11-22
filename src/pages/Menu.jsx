import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonIcon, IonLabel, IonMenuToggle, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet, IonPage } from '@ionic/react';

const Menu = () => {
  return (
    <IonPage>
      <IonList>
        <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonItem href="./login">Dashboard</IonItem>
        <IonItem>Photos</IonItem>
        <IonItem>Available Mission</IonItem>
        <IonItem>My Missions</IonItem>
        <IonItem>Chat</IonItem>
      </IonList>
    </IonPage>

  // ---------------- IonMenu implementation (try later) ----------------
  //   <IonMenu contentId="main">
  //   <IonHeader>
  //     <IonToolbar color="primary">
  //       <IonTitle>Menu</IonTitle>
  //     </IonToolbar>
  //   </IonHeader>
  //   <IonContent color="primary">
  //     <IonList style= {{ background : '#3880ff'}} color="primary">
        
  //           <IonMenuToggle  auto-hide="false">
  //             <IonItem color="primary">
  //               <IonIcon slot="start" />
  //               <IonLabel>HELP</IonLabel>
  //             </IonItem>
  //           </IonMenuToggle>
        
        
  //     </IonList>
  //   </IonContent>
  // </IonMenu>




  //   <>
  //   <IonMenu side="start" contendId="my-content" >
  //     <IonHeader>
  //       <IonToolbar color="primary">
  //         <IonTitle>Start Menu</IonTitle>
  //       </IonToolbar>
  //     </IonHeader>
  //     <IonContent>
  //       <IonList>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //       </IonList>
  //     </IonContent>
  //   </IonMenu>

  //   <IonMenu side="start" contendId="my-content"  class="my-custom-menu">
  //     <IonHeader>
  //       <IonToolbar color="tertiary">
  //         <IonTitle>Custom Menu</IonTitle>
  //       </IonToolbar>
  //     </IonHeader>
  //     <IonContent>
  //       <IonList>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //       </IonList>
  //     </IonContent>
  //   </IonMenu>

  //   <IonMenu side="end" contendId="my-content" type="push">
  //     <IonHeader>
  //       <IonToolbar color="danger">
  //         <IonTitle>End Menu</IonTitle>
  //       </IonToolbar>
  //     </IonHeader>
  //     <IonContent>
  //       <IonList>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //         <IonItem>Menu Item</IonItem>
  //       </IonList>
  //     </IonContent>
  //   </IonMenu>
  //   <IonRouterOutlet id="my-content"></IonRouterOutlet>
  // </>
);
}

export default Menu;