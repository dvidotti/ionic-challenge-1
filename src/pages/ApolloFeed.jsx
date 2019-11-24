import React, { useState, useEffect } from "react";
import {
  IonList,
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/react';
import Card from './Card';
import { service } from "../service/service";


const ApolloFeed = ({history}) => {
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

  return(
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Discover Apollo</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        {apiResult.length > 0 && apiResult.map((item, idx) => {
          if (item.links) {
            return(
              <Card history={history} name={item.data[0].keywords[0]} img={item.links[0].href} key={idx} idx={idx} />
            )}
          }
        )}
      </IonList>
    </IonContent>
  </IonPage>
);
}

export default ApolloFeed;