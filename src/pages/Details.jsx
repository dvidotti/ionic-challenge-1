import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Details.css';

import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonContent, IonCard, IonCardContent, IonIcon, IonItem } from '@ionic/react';



const Details = (props) => {

 let apolloIdx = props.match.params.idx;
 const [apiResult, setApiResult] = useState([]);
 console.log(apiResult)
 useEffect(() => {
   const getInfo = async () => {
   try { 
     const resultFromApi = await axios.get(`https://images-api.nasa.gov/search?q=apollo
     `)
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
        {/* <IonIcon name="pin" slot="start" /> */}
        <img class="fullbox-image" src={apiResult[apolloIdx].links[0].href}/>
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
