import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Firebase from './Firebase';
import { FirebaseContext } from './hoc/withFirebase';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { useThemed } from './hooks/useThemed';
//import * as serviceWorker from './serviceWorker';



ReactDOM.render(
     <FirebaseContext.Provider value={new Firebase()}>
        <App />    
    </FirebaseContext.Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
