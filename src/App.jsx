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
import { UserContext } from './context/UserContext';
import UserContextProvider from './context/UserContext';
import LoginForm from './pages/Login';
import Logout from './pages/Logout';
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



// ------------------------------- UGLY WORKING SOLUTION FOR ROUTE ---------------- //

const App = (props) => {
  return (
    <UserContextProvider>
      <UserContext.Consumer>{context => {
        const { user } = context;
        return(
          <IonApp>
            {user ?
            <>
              <IonContent>
                <Ion-Header>
                  <Ion-Toolbar>
                    <IonTitle>Welcome {user}</IonTitle>
                    <IonButtons slot="start">
                      <IonMenuButton autoHide="false"></IonMenuButton>
                    </IonButtons>
                  </Ion-Toolbar>
                </Ion-Header>
                <Menu/>
              </IonContent>
              <IonReactRouter> 
                <IonRouterOutlet>
                  <Route exact 
                    path="/login" 
                    render={props => <Redirect to='/apollo' />}
                    />
                  <Route 
                    exact
                    path="/apollo" 
                    render={props => <ApolloFeed user={user} {...props}/>}
                  />
                  <Route 
                    exact
                    path="/logout" 
                    render={props =>  <Logout user={user} {...props}/>}
                  />
                  <Route 
                    exact
                    path="/details/:idx" 
                    render={(props) => <Details {...props} user={user}/>}
                  />
                  <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
                </IonRouterOutlet>
              </IonReactRouter> 
            </>
            :
            <IonReactRouter> 
              <IonRouterOutlet>
                <Route 
                  exact 
                  path="/login" 
                  render={props => <LoginForm {...props} />}
                  />
                <Route 
                  exact
                  path="/apollo" 
                  render={props => <Redirect to='/login'/> }
                />
                  <Route 
                  exact
                  path="/logout" 
                  render={props => <Redirect to='/login'/>}
                  />
                <Route 
                  exact
                  path="/details/:idx" 
                  render={props => <Redirect to='/login'/>}
                  />
                <Route 
                  exact 
                  path="/" 
                  render={() => <Redirect to="/login" />}/>
              </IonRouterOutlet>
            </IonReactRouter> 
            }
          </IonApp>
        )
      }}
      </UserContext.Consumer>
    </UserContextProvider>
  );
}


// --------------------- LOOKS BETTER ROUTE, BUT DON'T WORK ------- //

// const App = (props) => {
//   const [isAuth, setAuth] = useState(false);
//   console.log('ISAATUH', isAuth)
//   return (
//     <UserContextProvider>
//       <UserContext.Consumer>{context => {
//         const { user } = context;
//         if (user){ 
//           console.log("HOLA", user); 
//           setAuth(user);
//         }
//         return(
//           <IonApp>
//             {user &&
//               <IonContent>
//                 <Ion-Header>
//                   <Ion-Toolbar>
//                     <IonTitle>Welcome {user}</IonTitle>
//                     <IonButtons slot="start">
//                       <IonMenuButton autoHide="false"></IonMenuButton>
//                     </IonButtons>
//                   </Ion-Toolbar>
//                 </Ion-Header>
//                 <Menu/>
//               </IonContent>
//             }
//               <IonReactRouter> 
//                 <IonRouterOutlet>
//                   <Route exact 
//                     path="/login" 
//                     render={props  =>  {
//                     console.log(isAuth, user)
//                     return user ? <Redirect to='/apollo' /> : <LoginForm {...props}/>}
//                     }
//                   />
//                   <Route 
//                     exact
//                     path="/apollo" 
//                     render={props => {
//                     return  user ?  <ApolloFeed user={user} {...props}/> : <Redirect to='/login' />}
//                     }
//                   />
//                   <Route 
//                     exact
//                     path="/logout" 
//                     render={props =>  {
//                     return user ? <Logout user={user} {...props}/>: <Redirect to='/login' /> }
//                     }
//                   />
//                   <Route 
//                     exact
//                     path="/details/:idx" 
//                     render={(props) => {
//                     return user ? <Details {...props} user={user}/>: <Redirect to='/login' />}
//                     }
//                   />
//                   <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
//                 </IonRouterOutlet>
//               </IonReactRouter> 
//           </IonApp>
//         )
//       }}
           
//       </UserContext.Consumer>
//     </UserContextProvider>
//   );
// }


export default App;