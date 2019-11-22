import React, { useState, useEffect } from "react";
import axios from 'axios'
import {
  IonList,
  IonPage,
  IonContent
} from '@ionic/react';
import Card from './Card'


const ApolloFeed = () => {
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
    <IonContent>
      <IonList>
        {apiResult.length > 0 && apiResult.map((item, idx) => {
          if (item.links) {
            
            return(
                <Card name={item.data[0].description} img={item.links[0].href} key={idx} />
            )}
          }
        )}
      </IonList>
    </IonContent>
  </IonPage>
);
}

export default ApolloFeed;