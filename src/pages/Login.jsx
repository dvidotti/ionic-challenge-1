import React, { useState } from 'react';
import { UserContext } from '../context/UserContext'
import { error } from '../info/errorForm'


import {
  IonPage, 
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonInput,
  IonList,
  IonItem,
  IonButton,
  IonIcon
} from '@ionic/react';

import { mail , lock} from 'ionicons/icons';


const LoginForm = ({history}) => {
  const [ email, setEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);
  const [ formErrors, setFormErrors ] = useState('');


// mock Login
  const submit = (setUser) => {
    if (email === "dev@yoobic.com" && password === "1234") {
      setUser('Yuri');
      history.push('/apollo');
    } else {
      setFormErrors(error);
    } 
  }


  return (
    <UserContext.Consumer>{(context => {
      const { setUser } = context;
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>
                Login
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <form onSubmit={(e) => { e.preventDefault(); submit(setUser)}}>
              <IonList>
                <IonItem>
                  <IonIcon icon={mail} />
                  <IonInput name="email" type="email" placeholder="Email"  value={email} onIonChange={(event) => setEmail(event.target.value)}/>
                </IonItem>
                <IonItem>
                  <IonIcon icon={lock} />
                  <IonInput name="password" type="password" placeholder="Password" value={password}  onIonChange={(event) => setPassword(event.target.value)}/>
                </IonItem>
              </IonList>
              <IonButton expand={true} type="submit">Log in</IonButton>
            </form>
              <IonContent>
                {formErrors && 
                    <div>
                      <h2>{formErrors.message}</h2>
                      <h2>{formErrors.email}</h2>
                      <h2>{formErrors.password}</h2>
                    </div>
                }     
              </IonContent>
          </IonContent>
        </IonPage>
      )
    })}
    </UserContext.Consumer>
  )
}

export default LoginForm;