import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  IonList,
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/react';
import Card from './Card';


const ApolloFeed = ({history}) => {
  const [apiResult, setApiResult] = useState([]);
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
                <Card history={history} name={item.data[0].keywords[0]} img={item.links[0].href} idx={idx} />
            )}
          }
        )}
      </IonList>
    </IonContent>
  </IonPage>
);
}

export default ApolloFeed;