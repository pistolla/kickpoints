import React from 'react';
export const FirebaseContext = React.createContext({});
export const withFirebase = (Component: any) => (props: any) => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);