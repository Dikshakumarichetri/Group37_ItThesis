import React from 'react';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from "./pages/Signup";
import Dashboard from './pages/Dashboard';
import Record from './pages/Record';
import Library from './pages/Library';
import Editor from './pages/Editor';
import Dictionary from './pages/Dictionary';
import Playlist from './pages/Playlist';
import Help from './pages/Help';
import Profile from './pages/Profile';
import './theme/pages.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/record" component={Record} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/editor" component={Editor} />
        <Route exact path="/dictionary" component={Dictionary} />
        <Route exact path="/playlist" component={Playlist} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/profile" component={Profile} />
        <Redirect exact from="/" to="/home" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
