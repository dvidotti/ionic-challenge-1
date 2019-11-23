import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonTitle,
  IonMenuButton,
  IonButtons,
  IonContent
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import LoginForm from './pages/Login';
import ApolloFeed from './pages/ApolloFeed';
import Menu from './pages/Menu';
import Details from './pages/Details';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = (props) => {
  const [user, setUser] = useState(false);
  return (
  <IonApp> 
    {user && 
      <IonContent>
      <Ion-Header>
        <Ion-Toolbar>
          <IonTitle>MenuTitle</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton autoHide="false"></IonMenuButton>
          </IonButtons>
        </Ion-Toolbar>
      </Ion-Header>
      <Menu/>
      </IonContent>
    }
    <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/login" render={(props) => <LoginForm user={user} {...props} setUser={setUser}/>} exact={true}/>
          <Route path="/apollo" render={(props) => <ApolloFeed user={user} {...props} />} exact={true}/>
          <Route path="/details/:idx" render={(props) => <Details {...props} user={user}/>} exact={true} />
          <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  );
}

export default App;
