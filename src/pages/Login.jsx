import React, { useState } from 'react';

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


const LoginForm = ({user, setUser, history}) => {
  console.log(user)
  const [ email, setEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);
  const [isAuth, setAuth ] = useState('false');
  // const [user, setUser ] = useState(null)

  const [ formErrors, setFormErrors ] = useState({});

  const submit = () => {
    console.log(email, password)
    if (email === "dev@yoobic.com" && password === "1234") {
      setUser('Batman');
      history.push('/menu');
    } else console.log('wrong password')
  }


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
        <form onSubmit={(e) => { e.preventDefault(); submit()}}>
          {/* <div>
            {formErrors ? (
              formErrors.message
            ): null}
          </div> */}
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
      </IonContent>
    </IonPage>
  )
}

export default LoginForm;