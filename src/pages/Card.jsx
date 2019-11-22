import React from 'react';
import { IonButton, IonCard, IonCardContent, IonContent, IonIcon, IonItem } from '@ionic/react';
import './Card.css';


const Card = ({name, link, img}) => {
  return(
 
     <IonCard>
      <IonItem>
        <IonIcon name="pin" slot="start" />
        <img src={img}/>
        <IonButton fill="outline" slot="end">View</IonButton>
      </IonItem>
      <IonCardContent><h2>{name}</h2></IonCardContent>
    </IonCard> 
);
}

export default Card;