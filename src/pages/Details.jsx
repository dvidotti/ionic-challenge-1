import React, { useState, useEffect } from "react";

import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonContent, IonCard, IonCardContent, IonItem } from '@ionic/react';
import { service } from "../service/service";



const Details = (props) => {

  let apolloIdx = props.match.params.idx;
  const [apiResult, setApiResult] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      try { 
        const resultFromApi = await service;
        setApiResult(resultFromApi.data.collection.items)
      } catch(error) {
        console.log(error)
      }
    }
    getInfo()
  },[])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/apollo" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {apiResult.length && 
        <IonCard>
          <IonItem>
            <img src={apiResult[apolloIdx].links[0].href} alt={apiResult[apolloIdx].data[0].keywords[0]}/>
          </IonItem>
          <IonCardContent><h1>{apiResult[apolloIdx].data[0].keywords[1]}</h1></IonCardContent>
          <IonCardContent><h1>{apiResult[apolloIdx].data[0].keywords[0]}</h1></IonCardContent>
          <IonCardContent><h2>{apiResult[apolloIdx].data[0].description}</h2></IonCardContent>
        </IonCard> 
      }
      </IonContent>
    </IonPage>
  );
};

export default Details;
