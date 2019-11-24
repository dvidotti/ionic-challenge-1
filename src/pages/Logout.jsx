import React  from 'react';
import { UserContext } from '../context/UserContext';
import {
  IonPage, 
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonButton,
} from '@ionic/react';


const LogOut= (props) => {
  const sendToLogin = () => {
    props.history.push('/login')
  }
  
  return (
    <UserContext.Consumer>{(context => {
      const {user, setUser} = context;
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>
                Logout
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <h1>Goodbye {user}</h1>
            <h2>Click in the button to LogOut</h2>
            <IonButton expand={true} onClick={()=> {
              setUser(false);
              sendToLogin();
            }}>Log out </IonButton>
          </IonContent>
        </IonPage>
      )
    })}
    </UserContext.Consumer>
  )
}

export default LogOut;